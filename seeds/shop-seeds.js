const { Shop } = require('../models');

const shopData = [{
        shopName: 'Coffee Vivace',
        shopLocation: 'Captiol Hill, Seattle',
        description: 'Espresso Vivace is a Seattle area coffee shop and roaster known for its coffee and roasting practices.',
        menu: ''
    },
    {
        shopName: 'Storyville Coffee Company',
        shopLocation: "Pike Place, Seattle",
        description: "Storyville Coffee Company is a privately owned, Seattle-based specialty coffee company with a mission to end human trafficking.",
        menu: ''
    },
    {
        shopName: 'Moore Coffee Shop',
        shopLocation: 'Downtown Seattle',
        description: "Known for its latte art, this family-owned coffee spot with a loungey vibe offers breakfast & lunch.",
        menu: ''
    },
    {
        shopName: 'Capitol Coffee Works',
        shopLocation: 'Capitol Hill, Seattle',
        description: "A calm oasis in vibrant Capitol Hill. Kind people and exquisite coffee. Part of the Seattle Coffee Works family, a direct trade coffee roaster and importer dedicated to making coffee better in terms Quality, Equity, Sustainability and Transparency.",
        menu: ''
    }
];

const seedShops = () => Shop.bulkCreate(shopData);

module.exports = seedShops;