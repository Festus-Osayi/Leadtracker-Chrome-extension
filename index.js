let myLeads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el");
const deleteEl = document.getElementById("delete-url");
const tabBtn = document.getElementById("tab-btn");


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage != null) {
    myLeads = leadsFromLocalStorage;
    renderURL(myLeads);
}

// tab button

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderURL(myLeads)
    })

})

function renderURL(url) {
    let listItems = "";
    for (let i = 0; i < url.length; i++) {

        listItems +=
            `<li> 
            <a href='${url[i]}' target='_blank'>
            ${url[i]} 
            </a>
        </li>`;
    }
    ulEl.innerHTML = listItems;
}



inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    if (inputEl.value != "") {
        inputEl.value = ""
    }
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    renderURL(myLeads);


})

// delete button

deleteEl.addEventListener("dblclick", function () {

    localStorage.clear();
    myLeads = []
    renderURL(myLeads);



})










