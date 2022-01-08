$('#submitNewShop').on('click', function (e) {

    e.preventDefault()
    const newShop = {
        newShopName: $('#newShopName').val(),
        newShopNeighborhood: $('#newShopNeighborhood').val(),
        newShopCity: $('#newShopCity option:selected').text(),
        newShopDescription: $('#newShopDescription').val()
    }

    fetch('/review/add/newshop', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newShop)
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
    })
})