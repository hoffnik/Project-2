const { Inventory } = require('../models');

const invdata = [
  {
    user_id: 1,
    card_name: 'Horde of Notions',
    scryfall_id: 'a5137c28-632f-40f4-bf9d-877f5f070987',
    img_uri: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/a/5/a5137c28-632f-40f4-bf9d-877f5f070987.jpg?1562265721'
  },
  {
    user_id: 1,
    card_name: 'Notion Thief',
    scryfall_id: 'f675f509-4343-4568-96dd-265626cb6c2b',
    img_uri: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/f/6/f675f509-4343-4568-96dd-265626cb6c2b.jpg?1604195095'
  },  
  {
    user_id: 1,
    card_name: 'Arc Lightning',
    scryfall_id: '35c7c392-6782-40c8-bb24-6aad24f14660',
    img_uri: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/3/5/35c7c392-6782-40c8-bb24-6aad24f14660.jpg?1562784760'
  },  
  {
    user_id: 1,
    card_name: 'Ball Lightning',
    scryfall_id: 'd9b53218-804b-4992-9c93-a797dd6b2a04',
    img_uri: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/d/9/d9b53218-804b-4992-9c93-a797dd6b2a04.jpg?1600701851'
  },  
  {
    user_id: 2,
    card_name: 'Boltwing Marauder',
    scryfall_id: 'aab8841f-5c6f-47fc-91c9-acf3c84b7313',
    img_uri: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/a/a/aab8841f-5c6f-47fc-91c9-acf3c84b7313.jpg?1562791336'
  }, ]
//   {
//     user_id: 3,
//     post_id: 16
//   },
//   {
//     user_id: 4,
//     post_id: 7
//   },
//   {
//     user_id: 10,
//     post_id: 7
//   },
//   {
//     user_id: 3,
//     post_id: 18
//   },
//   {
//     user_id: 9,
//     post_id: 16
//   },
//   {
//     user_id: 3,
//     post_id: 17
//   },
//   {
//     user_id: 10,
//     post_id: 2
//   },
//   {
//     user_id: 6,
//     post_id: 10
//   },
//   {
//     user_id: 5,
//     post_id: 11
//   },
//   {
//     user_id: 6,
//     post_id: 1
//   },
//   {
//     user_id: 9,
//     post_id: 18
//   },
//   {
//     user_id: 6,
//     post_id: 15
//   },
//   {
//     user_id: 6,
//     post_id: 7
//   },
//   {
//     user_id: 6,
//     post_id: 4
//   },
//   {
//     user_id: 1,
//     post_id: 16
//   },
//   {
//     user_id: 10,
//     post_id: 18
//   },
//   {
//     user_id: 4,
//     post_id: 10
//   },
//   {
//     user_id: 10,
//     post_id: 5
//   },
//   {
//     user_id: 5,
//     post_id: 16
//   },
//   {
//     user_id: 6,
//     post_id: 17
//   },
//   {
//     user_id: 1,
//     post_id: 15
//   },
//   {
//     user_id: 7,
//     post_id: 13
//   },
//   {
//     user_id: 6,
//     post_id: 3
//   },
//   {
//     user_id: 6,
//     post_id: 13
//   },
//   {
//     user_id: 7,
//     post_id: 1
//   },
//   {
//     user_id: 4,
//     post_id: 15
//   },
//   {
//     user_id: 2,
//     post_id: 18
//   },
//   {
//     user_id: 9,
//     post_id: 10
//   },
//   {
//     user_id: 10,
//     post_id: 15
//   },
//   {
//     user_id: 8,
//     post_id: 1
//   },
//   {
//     user_id: 10,
//     post_id: 8
//   },
//   {
//     user_id: 2,
//     post_id: 13
//   },
//   {
//     user_id: 9,
//     post_id: 20
//   },
//   {
//     user_id: 1,
//     post_id: 17
//   },
//   {
//     user_id: 10,
//     post_id: 9
//   },
//   {
//     user_id: 10,
//     post_id: 3
//   },
//   {
//     user_id: 5,
//     post_id: 6
//   },
//   {
//     user_id: 6,
//     post_id: 12
//   },
//   {
//     user_id: 5,
//     post_id: 2
//   },
//   {
//     user_id: 6,
//     post_id: 14
//   },
//   {
//     user_id: 8,
//     post_id: 18
//   },
//   {
//     user_id: 3,
//     post_id: 4
//   }
// ];

const seedInv = () => Inventory.bulkCreate(invdata);

module.exports = seedInv;
