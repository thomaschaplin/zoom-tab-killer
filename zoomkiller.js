chrome.webNavigation.onCompleted.addListener((details) => {
    if (details.url.includes('zoom.us/postattendee')) {
        setTimeout(() => {
            chrome.tabs.remove(details.tabId, () => {});
        }, 3000);
    } else if (details.url.includes('zoom.us') && details.url.includes('status=success')) {
        setTimeout(() => {
            chrome.tabs.remove(details.tabId, () => {});
        }, 3000);
    } else if (details.url.includes('zoom.us') && details.url.endsWith('#success')) {
        setTimeout(() => {
            chrome.tabs.remove(details.tabId, () => {});
        }, 3000);
    }
}, {url: [{schemes: ['https']}]});
