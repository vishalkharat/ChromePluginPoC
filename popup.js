console.log('<----- Extension script started running ----->');

function newNode(node, text, styles) {
    node.innerHTML = text;
    node.className = styles;
    return node;
}



window.addEventListener('DOMContentLoaded', () => {
    let bg = chrome.extension.getBackgroundPage();

    var button = document.getElementById("validate");

    button.addEventListener("click", function(e){
        e.preventDefault();

        const baseUrl = "https://reqres.in/api/login";
        const urlParams = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }       

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(urlParams)
        })
            .then(response => response.json())
            .then(response => {
                console.log('(response:', response);
                document.getElementById("message").innerHTML = "Data Verified successfully";
            }).catch(error => console.log('Error:', error));   
    });

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        console.log(tabs[0].url);
        console.log(tabs[0].title);
        let currentTabId = tabs[0].id;
        let currentPerf = bg.perfWatch[currentTabId];

        // safety check: when page is still loading
        if (!currentPerf) {
            return;
        }

        console.log('<-----  Received data ----->'+JSON.stringify(currentPerf.customerData));
        
        var table = document.getElementById('tableBody');

        for (var key in currentPerf.customerData) {
            if (currentPerf.customerData.hasOwnProperty(key)) {
                var val = currentPerf.customerData[key];
                var tr = document.createElement("tr");
                var td1 = newNode(document.createElement("td"), key, "cell");
                tr.appendChild(td1);
                var td2 = newNode(document.createElement("td"), val, "cell");
                tr.appendChild(td2);
                table.appendChild(tr);
            }
        }
    });
});
