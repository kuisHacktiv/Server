'use strict';
const pertanyaan = [
  {
    soal: "Linus Torvalds created Linux and Git.",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "The programming language Python is based off a modified version of JavaScript",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "RAM stands for Random Access Memory.",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Time on Computers is measured via the EPOX System.",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "The Windows 7 operating system has six main editions.",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "French is an official language in Canada.",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Bulls are attracted to the color red.",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "The color orange is named after the fruit.",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "The movie The Nightmare before Christmas was all done with physical objects.",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "In the original Star Wars trilogy, Alec Guinness provided the voice for Darth Vader.",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "George Lucas directed the entire original Star Wars trilogy.",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "In Splatoon, the Squid Sisters are named Tako and Yaki.",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "The song Megalovania by Toby Fox made its third appearence in the 2015 RPG Undertale.",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Donkey Kong was originally set to be a Popeye arcade game",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "In Undertale, the main character of the game is Sans.",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Salt is 100% composed of Sodium.",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "An atom contains a nucleus.",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "An exothermic reaction is a chemical reaction that releases energy by radiating electricity.",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "An Astronomical Unit is the distance between Earth and the Moon.",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "An average human can go two weeks without water.",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Psychology is the science of behavior and mind.",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Not including false teeth; A human has two sets of teeth in their lifetime.",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Soals', pertanyaan, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Soals", null, {})
  }
};
