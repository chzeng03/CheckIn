const eventlist = document.querySelector('.Events');
const loggedoutlinks = document.querySelectorAll('.logged-out');
const loggedinlinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
    if (user) {

        loggedinlinks.forEach(item => item.style.display = 'block');
        loggedoutlinks.forEach(item => item.style.display = 'none');

    } else {

        loggedinlinks.forEach(item => item.style.display = 'none');
        loggedoutlinks.forEach(item => item.style.display = 'block');
    }
}

//setup events
const setupEvents = (data) => {

    let html = '';
    data.forEach(doc => {
        const event = doc.data();
 
        const li = `
            <li>
             <div class="collapsible-header grey lighten-4" style="font-weight:bold">${event.Organization} : ${event.Name}</div>
                <div class="collapsible-body white">${event.Time} at ${event.Location}</div>
            </li>
            `;

        html += li
    });

    eventlist.innerHTML = html;
}


// setup materialize componets
document.addEventListener('DOMContentLoaded', function () {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
});
