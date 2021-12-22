const { Review } = require('../models');

const reviewData = [{
        reviewName: 'Coffee Vivace',
        review: 'Best Coffee shop in Seattle!',
        user_id: 1,
        shop_id: 1
    },
    {
        reviewName: 'Storyville Coffee Company',
        review: 'Great mission, cool vibe',
        user_id: 2,
        shop_id: 2
    },
    {
        reviewName: 'Moore Coffee review',
        review: "The coolest latte art I've ever seen!",
        user_id: 3,
        shop_id: 3,
    },
    {
        reviewName: 'Capitol Coffee Works',
        review: 'Modern and chic atmosphere, great location and delicious pastries',
        user_id: 4,
        shop_id: 4
    }
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;