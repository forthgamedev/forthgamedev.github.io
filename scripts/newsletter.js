// Special handling for in-app browsers that don't always support new windows
(function() {
    function browserSupportsNewWindows(userAgent) {
        var rules = [
            'FBIOS',
            'Twitter for iPhone',
            'WebView',
            '(iPhone|iPod|iPad)(?!.*Safari\/)',
            'Android.*(wv|\.0\.0\.0)'
        ];
        var pattern = new RegExp('(' + rules.join('|') + ')', 'ig');
        return !pattern.test(userAgent);
    }
    if (!browserSupportsNewWindows(navigator.userAgent || navigator.vendor || window.opera)) {
        document.getElementById('af-form-848599986').parentElement.removeAttribute('target');
    }
})();