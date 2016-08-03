// creating an XML HTTP request object
var xhr = new XMLHttpRequest();

// callback function
xhr.onreadystatechange() = function () {
    if (xhr.readyState === 4) {
        var employees = JSON.parse(xhr.responseText);
        console.log(employees);
    }
};

// opening a request
xhr.open('GET', 'data/employees.json');

// send the request
xhr.send();