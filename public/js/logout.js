$('#logout').on('click', function () {

    fetch('/logout', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        window.alert('You have been logged out! Returning to login page.')
        window.location.replace('/login')
    })
})