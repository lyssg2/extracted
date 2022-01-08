$('#logout').on('click', function () {
    console.log('logout clicked');

    fetch('/logout', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log('Data from Backed we got back after we did fetch!', data)
        window.alert('You have been logged out! Returning to login page.')
        window.location.replace('/login')
    })
})