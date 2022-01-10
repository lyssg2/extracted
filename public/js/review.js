
console.log('Review js has been loaded')

$('#submit-review').on('click', function(event) {
        event.preventDefault();

    var newReview = {
        reviewName: $('#review-title').val(),
        review: $('#review-content').val(),
    }

    fetch('/review/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReview)
    }).then(function (response) {
        return response.json()
    }).then(function () {
        console.log('Review has been added')
        window.location.reload()
    })
})

