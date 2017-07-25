module.exports = {
  people: getPeople()
};

function getPeople() {
  return [
    { id: 1, firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
    { id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
    { id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
    { id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'California' },
    { id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'California' },
    { id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'California' },
    { id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Florida' },
    { id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Florida' }
  ];
}
