$('#login').on('click', function (e) {

    e.preventDefault()
    var login = {
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
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        window.alert("You have logged in!")
        window.location.replace('/')
    })
})

$('#signup').on('click', function (e) {

    e.preventDefault()
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
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        window.alert("Success! Created your account")
        window.location.replace('/login')
    })
})