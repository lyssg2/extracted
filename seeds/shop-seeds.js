const { Shop } = require('../models');

const shopData = [{
        shopName: 'Coffee Vivace',
        shopLocation: 'Capitol Hill, Seattle',
        shopPhoto: '/images/coffeeVivace.jpg',
        description: 'Espresso Vivace is a Seattle area coffee shop and roaster known for its coffee and roasting practices.'
    },
    {
        shopName: 'Storyville Coffee Company',
        shopLocation: 'Pike Place, Seattle',
        shopPhoto: '/images/storyvilleCoffeeCompany.jpg',
        description: 'Storyville Coffee Company is a privately owned, Seattle-based specialty coffee company with a mission to end human trafficking.'
    },
    {
        shopName: 'Moore Coffee Shop',
        shopLocation: 'Downtown Seattle',
        shopPhoto: '/images/mooreCoffeeShop.jpg',
        description: 'Known for its latte art, this family-owned coffee spot with a loungey vibe offers breakfast & lunch.'
    },
    {
        shopName: 'Capitol Coffee Works',
        shopLocation: 'Capitol Hill, Seattle',
        shopPhoto: '/images/capitolCoffeeWorks.jpg',
        description: 'A calm oasis in vibrant Capitol Hill. Kind people and exquisite coffee. Part of the Seattle Coffee Works family, a direct trade coffee roaster and importer dedicated to making coffee better in terms Quality, Equity, Sustainability and Transparency.'
    },
    {
        shopName: 'Fremont Coffee Company',
        shopLocation: 'Seattle, Washington',
        shopPhoto: '/images/fremontCoffeeCompany.jpg',
        description: 'We are proud of every bean we roast, and we bring our passion for coffee into every cup we sell, whether in-house or at your house.'
    },
    {
        shopName: 'Brewed Cafe & Pub',
        shopLocation: 'Downtown Vancouver, Washington',
        shopPhoto: '/images/brewedCafeAndPub.jpg',
        description: 'The place for coffee, beer and wine enthusiasts to congregate.'
    },
    {
        shopName: 'Compass Coffee Roasting',
        shopLocation: 'Downtown Vancouver, Washington',
        shopPhoto: '/images/compassCoffeeRoasting.jpg',
        description: 'Our focus is on Coffee as Culinary from crop to cup. Soil, smoke, and steam.'
    },
    {
        shopName: 'Olympia Coffee',
        shopLocation: 'Downtown Olympia, Washington',
        shopPhoto: '/images/olympiaCoffee.jpg',
        description: 'We exist to improve quality of life for our farmers, our staff, and our customers.'
    },
    {
        shopName: 'Relevant Coffee',
        shopLocation: 'Downtown Vancouver, Washington',
        shopPhoto: '/images/relevantCoffee.jpg',
        description: 'Relevant Coffee is a Vancouver proud, community focused coffee roaster and hospitality company. We source exceptional coffees from sustainable and quality-driven farmers around the world.'
    },
    {
        shopName: 'Thatchers Coffee',
        shopLocation: 'Vancouver, Washington',
        shopPhoto: '/images/thatchersCoffee.jpg',
        description: 'Bright & modern hangout dispensing pastries & drinks made from organic, locally sourced ingredients.'
    },
    {
        shopName: 'Barista',
        shopLocation: 'Downtown Portland, Oregon',
        shopPhoto: '/images/barista.jpg',
        description: 'Serving exceptional coffees from the worlds finest roasters, prepared by the most skilled baristas in Portland, Oregon.'
    },
    {
        shopName: 'Case Study Coffee Roasters',
        shopLocation: 'NE Portland, Oregon',
        shopPhoto: '/images/caseStudyCoffeeRoasters.jpg',
        description: 'Roasting direct trade and seasonal coffees in Portland, Oregon.'
    },
    {
        shopName: 'Extracto Coffee Roasters',
        shopLocation: 'NE Portland, Oregon',
        shopPhoto: '/images/extractoCoffeeRoasters.jpg',
        description: 'Stylish coffee shop with a streetside patio, known for impressive latte art & house-roasted beans.'
    },
    {
        shopName: 'Lionheart Coffee',
        shopLocation: 'Tigard, Oregon',
        shopPhoto: '/images/lionheartCoffee.jpg',
        description: 'Easygoing cafe with local art for coffee, tea & specialty blends, plus bagels, pies & pastries.'
    }
]

const seedShops = () => Shop.bulkCreate(shopData)

module.exports = seedShops