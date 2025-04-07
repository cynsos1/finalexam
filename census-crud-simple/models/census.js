// models/Census.js

// Define the Census model class
class Census {
    constructor(address, city, state, zip, numberOfPeople, year, censusTaker) {
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.numberOfPeople = numberOfPeople;
      this.year = year;
      this.censusTaker = censusTaker;
    }
  }
  
  // Export the Census class to use in other parts of the application
  module.exports = Census;
  