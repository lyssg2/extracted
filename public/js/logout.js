$('#logout').on('click', function() {
    console.log('logout clicked');

    fetch('/login/logout', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        //Remember to change bool for {{#if loggedIn}} in here or on route
    });
})