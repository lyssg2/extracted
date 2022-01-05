$('#login').on('click', function() {
    console.log('login clicked')

    var login = {
        name: $('#name').val(),
        email: $('#email').val(),
        password: $('#password').val()
    }

    fetch('/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(login)
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log('Data from Backed we got back after we did fetch!', data)
    })
})

$('#signup').on('click', function() {
    console.log('signup clicked')

    var login = {
        name: $('#name-signup').val(),
        email: $('#email-signup').val(),
        password: $('#password-signup').val()
    }

    fetch('/login/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(login)
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log('Data from Backed we got back after we did fetch!', data)
    })
})