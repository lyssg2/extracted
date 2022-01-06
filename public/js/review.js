$('#submit-review').on('click', function() {
    console.log('review added')

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
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log('Data from Backed we got back after we did fetch!', data)
    })
})