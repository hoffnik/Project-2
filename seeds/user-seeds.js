const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'niq',
    email: 'niq@niq.com',
    password: '12345'
  },
  {
    username: 'user2',
    email: 'user2@email.com',
    password: 'password123'
  },
  {
    username: 'user3',
    email: 'user3@email.com',
    password: 'password123'
  },
  {
    username: 'user4',
    email: 'user4@email.com',
    password: 'password123'
  },
  {
    username: 'user5',
    email: 'user5@email.com',
    password: 'password123'
  },
  {
    username: 'user6',
    email: 'user6@email.com',
    password: 'password123'
  },
  {
    username: 'user7',
    email: 'user7@email.com',
    password: 'password123'
  },
  {
    username: 'user8',
    email: 'user8@email.com',
    password: 'password123'
  },
  {
    username: 'user9',
    email: 'user9@email.com',
    password: 'password123'
  },
  {
    username: 'user10',
    email: 'user10@email.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
