/*
#1
Усі класи розкласти по своїм файлам і імпортувати! Наприклад, клас Human має бути в окремому файлі Human.js

a) Створити клас Людина.
  Властивості:
    імʼя;
    стать.
  Методи:
    конструктор, який приймає два параметри: імʼя та стать.

b) Створити клас Квартира.
  Властивості:
    конструктор не потрібен;
    масив жителів, який при створенні пустий.
  Методи:
    додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

c) Створити клас Будинок.

  Властивості:
    масив квартир, який при створенні пустий;
    максимальна кількість квартир.
  Методи:
    конструктор, який приймає один параметр: максимальну кількість квартир;
    додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

d) В якості демонстраціїї створити:
  декілька екземплярів класу Людина;
  декілька екземплярів класу Квартира;
  додадити екземпляри класу Людина до екземплярів класу Квартира;
  екземпляр класу Будинок;
  додадити екземпляри класу Квартира до екземплярів класу Будинок.
*/

import Human from './Human.js';
import Apartment from './Apartment.js';
import Building from './Building.js';

const person1 = new Human("Микола", "Чоловік");
const person2 = new Human("Олена", "Жінка");
const person3 = new Human("Петро", "Чоловік");
const person4 = new Human("Марія", "Жінка");

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

apartment1.addResident("автомобіль");
apartment1.addResident(person1);
apartment2.addResident(person2);
apartment3.addResident(person3);

const building = new Building(3);

building.addApartment(apartment1);
building.addApartment(apartment2);
building.addApartment("НЛО");
building.addApartment(apartment3);

const buildings = [building];

const apartment4 = new Apartment();
building.addApartment(apartment4); 
apartment1.addResident(person4);

console.log(`Кількість будинків: ${buildings.length}`);

buildings.forEach((building, index) => {
  console.log(`Будинок ${index + 1}:`);
  console.log(`Кількість квартир: ${building.apartments.length}`);
  building.apartments.forEach((apartment, apartmentIndex) => {
    console.log(`  Квартира ${apartmentIndex + 1}:`);
    apartment.residents.forEach(resident => {
      console.log(`    - ${resident.name}, ${resident.gender}`);
    });
  });
});

