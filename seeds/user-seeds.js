const { User } = require('../models');

const userData = [{
        name: 'lyss',
        password: 'beebo22',
        email: 'lyss2@gmail.com'
    },
    {
        name: 'Troy',
        password: 'portland1',
        email: 'troyw11@gmail.com'
    },
    {
        name: 'taya',
        password: 'wenatchee3',
        email: 'taya3@gmail.com'
    },
    {
        name: 'yudong',
        password: 'alaska4',
        email: 'yudong4@gmail.com'
    },
    {
        name: 'newton',
        password: 'fig123',
        email: 'newton5@gmail.com'
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;