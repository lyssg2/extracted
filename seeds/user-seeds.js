const { User } = require('../models');

const userData = [{
        name: 'lyss',
        userName: 'lyssg22',
        password: 'beebo22',
        email: 'lyss2@gmail.com'
    },
    {
        name: 'Troy',
        userName: 'troy11',
        password: 'portland1',
        email: 'troyw11@gmail.com'
    },
    {
        name: 'taya',
        userName: 'taya33',
        password: 'wenatchee3',
        email: 'taya3@gmail.com'
    },
    {
        name: 'yudong',
        userName: 'yudonglu',
        password: 'alaska4',
        email: 'yudong4@gmail.com'
    },
    {
        name: 'newton',
        userName: 'newton5',
        password: 'fig123',
        email: 'newton5@gmail.com'
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;