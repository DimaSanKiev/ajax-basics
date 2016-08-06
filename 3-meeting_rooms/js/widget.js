// creating an XML HTTP request object
var xhr = new XMLHttpRequest();

// callback function
xhr.onreadystatechange() = function () {
    if (xhr.readyState === 4) {
        var employees = JSON.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted>';
        for (var i = 0; i < employees.length; i++) {
            // check the "inoffice" property
            if (employees[i].inoffice === true) {
                // create a new HTML list item with class 'in'
                statusHTML += '<li class="in">';
            } else {
                // create a new HTML list item with class 'out'
                statusHTML += '<li class="out">';
            }
            // get the value for the "name" property; insert it inside the <li> tag
            statusHTML += employees[i].name;
            // close the <li> tag
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};

// opening a request
xhr.open('GET', 'data/employees.json');

// send the request
xhr.send();


var roomRequest = new XMLHttpRequest();

// callback function
roomRequest.onreadystatechange() = function () {
    if (roomRequest.readyState === 4) {
        var rooms = JSON.parse(roomRequest.responseText);
        var statusHTML = '<ul class="rooms>';
        for (var i = 0; i < rooms.length; i++) {
            // check the "inoffice" property
            if (rooms[i].available === true) {
                // create a new HTML list item with class 'in'
                statusHTML += '<li class="empty">';
            } else {
                // create a new HTML list item with class 'out'
                statusHTML += '<li class="full">';
            }
            // get the value for the "name" property; insert it inside the <li> tag
            statusHTML += rooms[i].room;
            // close the <li> tag
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('roomList').innerHTML = statusHTML;
    }
};

// opening a request
roomRequest.open('GET', '../data/rooms.json');

// send the request
roomRequest.send();