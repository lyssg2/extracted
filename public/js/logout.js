$('#logout').on('click', function() {
    console.log('logout clicked');

    fetch('/login/logout', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
})