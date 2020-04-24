const eventlist = document.querySelector('.Events');
const loggedoutlinks = document.querySelectorAll('.logged-out');
const loggedinlinks = document.querySelectorAll('.logged-in');
const accountdetails = document.querySelector('.account-details');
const checkedevent = document.querySelector('.checkedevent');

const setupUI = (user) => {
    if (user) {
        db.collection('users').doc(user.uid).get().then(doc =>{
            const html1 = `
            <div> Logged in as ${user.email}</div>
            
        
        `;
        accountdetails.innerHTML = html1; 
        })
        
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
             <div class="collapsible-header grey lighten-4" style="font-weight:bold">${event.Name}</div>
                <div class="collapsible-body white">
                hosting by ${event.Organization}
                <br><br>
                ${event.Time} at ${event.Location} 

                <button class="button float-right" onclick="location.href = 'Geofence-master/index.html'">Check IN</button>
                </div>
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
