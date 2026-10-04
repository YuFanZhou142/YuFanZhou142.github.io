/* Live site page views: one recorded visit per production page load.
   Periodic GET requests read the total without incrementing it.
   API: https://github.com/EvanNotFound/vercount */
(function() {
  var countEl = document.getElementById('visitor-count');
  var canonicalMeta = document.querySelector('meta[property="og:url"]');
  if (!countEl || !canonicalMeta) return;

  var counter = countEl.parentElement;
  var canonical = new URL(canonicalMeta.content);
  var isProduction = /^https?:$/.test(window.location.protocol) &&
    window.location.hostname.toLowerCase() === canonical.hostname.toLowerCase();
  var pageUrl = isProduction ? new URL(window.location.pathname, canonical.origin).href : canonical.href;
  var endpoint = 'https://events.vercount.one/api/v2/log';
  var refreshInterval = 30000;
  var timer;
  var inFlight = false;
  var hasCount = false;
  var lastRequest = 0;

  function firstVisit() {
    var key = 'vercount_uv_' + canonical.host.replace(/[^a-zA-Z0-9_-]/g, '_');
    try {
      var seen = document.cookie.split(';').some(function(cookie) {
        return cookie.trim() === key + '=1';
      });
      document.cookie = key + '=1; path=/; max-age=31536000; SameSite=Lax' +
        (window.location.protocol === 'https:' ? '; Secure' : '');
      return !seen;
    } catch (error) {
      return false;
    }
  }

  function scheduleRefresh() {
    clearTimeout(timer);
    if (!document.hidden) {
      timer = setTimeout(function() { update(false); }, refreshInterval);
    }
  }

  function showUnavailable() {
    countEl.setAttribute('aria-busy', 'false');
    if (hasCount) {
      counter.dataset.state = 'stale';
      counter.title = 'Last received visit count. Reconnecting to live statistics.';
      countEl.setAttribute('aria-label', countEl.textContent + ' visits, last received total');
    } else {
      counter.dataset.state = 'unavailable';
      countEl.textContent = '—';
      countEl.setAttribute('aria-label', 'Visit count temporarily unavailable');
      counter.title = 'Visit count temporarily unavailable. Reconnecting automatically.';
    }
  }

  async function update(recordVisit) {
    if (inFlight) return;
    clearTimeout(timer);
    inFlight = true;
    lastRequest = Date.now();
    countEl.setAttribute('aria-busy', 'true');

    var controller = new AbortController();
    var timeout = setTimeout(function() { controller.abort(); }, 8000);
    try {
      var options = { method: 'GET', cache: 'no-store', signal: controller.signal };
      var url = endpoint + '?url=' + encodeURIComponent(pageUrl);
      if (recordVisit) {
        url = endpoint;
        options.method = 'POST';
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify({ url: pageUrl, isNewUv: firstVisit() });
      }

      var response = await fetch(url, options);
      if (!response.ok) throw new Error('Counter request failed');
      var result = await response.json();
      var count = result && result.data && result.data.site_pv;
      if (result.status !== 'success' || !Number.isSafeInteger(count) || count < 0) {
        throw new Error('Invalid counter response');
      }

      hasCount = true;
      if (countEl.textContent !== String(count)) countEl.textContent = String(count);
      countEl.removeAttribute('aria-label');
      countEl.setAttribute('aria-busy', 'false');
      counter.dataset.state = 'live';
      counter.title = 'Live total page views, including repeat visits';
    } catch (error) {
      showUnavailable();
    } finally {
      clearTimeout(timeout);
      inFlight = false;
      scheduleRefresh();
    }
  }

  function refreshWhenVisible() {
    if (!document.hidden && Date.now() - lastRequest >= 5000) update(false);
  }

  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      clearTimeout(timer);
    } else {
      refreshWhenVisible();
      if (!inFlight) scheduleRefresh();
    }
  });
  window.addEventListener('focus', refreshWhenVisible);
  window.addEventListener('online', refreshWhenVisible);
  window.addEventListener('pagehide', function() { clearTimeout(timer); });
  window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      refreshWhenVisible();
      if (!inFlight) scheduleRefresh();
    }
  });

  countEl.textContent = '...';
  counter.dataset.state = 'loading';
  // Local/file previews only read the published site's count.
  // Do not retry POST: the server may have recorded a visit before a timeout.
  update(isProduction);
})();
