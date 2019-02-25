//const faker = require("faker");
const txtgen = require("txtgen");

/*faker.setLocale = "en_US";
console.log(txtgen.sentence());
console.log(txtgen.sentence());
console.log(txtgen.sentence());
console.log(txtgen.sentence());
console.log(txtgen.sentence());*/

export default function () {
  return Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 0,
          name: 'Wash the dishes'
        },
        {
          id: 1,
          name: 'Make the bed'
        }
      ])
  })
}