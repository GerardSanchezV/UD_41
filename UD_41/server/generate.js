var faker = require('faker');

var database = { persons: []};

for (var i = 1; i <= 50; i++){
    database.persons.push({

      id: 1,
      name: faker.lorem.words(),
      status: faker.lorem.words(),
      species:faker.lorem.words(),
      gender: faker.lorem.words(),
      origin: faker.lorem.words(),
      location: faker.lorem.words(),
      image:faker.image.cats()

    });
}
