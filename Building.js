'use strict';
import Apartment from './Apartment.js';

class Building {
  constructor(maxApartments) {
    this.maxApartments = maxApartments;
    this.apartments = [];
  }

  addApartment(apartment) {
    if (this.apartments.length < this.maxApartments) {
      if (apartment instanceof Apartment) {
        this.apartments.push(apartment);
      } else {
        console.log("Будинки складаються з квартир, а не з НЛЮ.");
      }
    } else {
      console.log("Квартири закінчились!");
    }
  }
}

export default Building;