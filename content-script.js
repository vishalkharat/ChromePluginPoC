console.log('<----- Content script started running ----->');

function injectScript(file_path, tag) {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}

injectScript(chrome.extension.getURL('inject-script.js'), 'body');

window.addEventListener("message", function (event) {
    // only accept messages from the current tab
    if (event.source != window)
        return;

    
    // TODO - Add validation to check if application installed properly
    // if (event.data.type && (event.data.type == "FROM_PAGE"))
    {
        chrome.runtime.sendMessage({ essential: event.data.essential });
    }
}, false);
