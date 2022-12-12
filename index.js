let myLeads = []

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    renderLeads();
});

// Lets user hit enter and have same functionality as clicking
// the save input button
inputEl.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        inputBtn.click();
    }
})

function renderLeads() {
    let listItems = '';
    for (let i=0; i<myLeads.length; i++) {
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
        // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</li>";
        listItems += `<li>
            <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>`
    }
    ulEl.innerHTML = listItems;
}