'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Animals', [{
         img: '../../public/images/waldemar-brandt-zQsCISvBY2E-unsplash.jpeg',
         title: 'Тигр',
         description: 'Амурский',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
       img: '../../public/images/leopard.jpeg',
       title: 'Леопард',
       description: 'Кенийский',
       user_id: 1,
       createdAt: new Date(),
       updatedAt: new Date()
       },
       {
         img: '../../public/images/baby_elephant.jpeg',
         title: 'Слонёнок',
         description: 'Африканский',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '../../public/images/baby_monkey.jpeg',
         title: 'Обезьянка',
         description: 'Милая',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '../../public/images/coala.jpeg',
         title: 'Коала',
         description: 'Австралийская',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '../../public/images/crocodile.jpeg',
         title: 'Крокодил',
         description: 'Южно - Американский',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '../../public/images/elephants.jpeg',
         title: 'Слоны',
         description: 'Африканские',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '../../public/images/monkey_2.jpeg',
         title: 'Обезьяна',
         description: 'Узконосная',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '../../public/images/lion.jpeg',
         title: 'Лев',
         description: 'Царь',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '../../public/images/owl.jpeg',
         title: 'Сова',
         description: 'Привет 3-ей фазе',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '../../public/images/phlamingo.jpeg',
         title: 'Фламинго',
         description: 'Розовый фламинго',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '../../public/images/phlamingo.jpeg',
         title: 'Пингвины',
         description: 'Те самые ребята из Мадагаскара',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        img: '../../public/images/white_bear.jpeg',
        title: 'Медведь',
        description: 'Белый',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Animals', null, {});
  }
};
