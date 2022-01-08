$('#submitNewShop').on('click', function (e) {
    e.preventDefault()

    console.log('new shop submit clicked')

    const newShop = {
        newShopName: $('#newShopName').val(),
        newShopNeighborhood: $('#newShopNeighborhood').val(),
        newShopCity: $('.newShopCity').val(),
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
        console.log('Data from Backed we got back after we did fetch!', data)
    })
})