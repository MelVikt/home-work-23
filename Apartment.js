'use strict';
import Human from './Human.js';

class Apartment {
  constructor() {
    this.residents = [];
  }

  addResident(human) {
    if (human instanceof Human) {
      this.residents.push(human);
    } else {
      console.log("Тільки жителі живуть в квартирах.");
    }
  }
}

export default Apartment;