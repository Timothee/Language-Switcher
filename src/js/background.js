chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.storage.sync.get('sites', function(sites) {
        sites = sites['sites'];
        for (var i = 0; i < sites.length; i++) {
            var site = sites[i];
            if (changeInfo.url && changeInfo.url.indexOf(site.url) === 0) {
                chrome.pageAction.setIcon({ tabId: tabId, path: '../images/icon38.png' });
                chrome.pageAction.show(tabId);
            }
        }
    });
});
