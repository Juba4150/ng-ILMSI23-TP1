import { Component, OnInit } from '@angular/core';

//3-create class car
export class Car {
  constructor(
    public manufactor: string,
    public model: string,
    public color: string
  ) {}

  showCar = (): void => {
    console.log(this.manufactor + ' ' + this.model + ' ' + this.color);
  };

  changeColor(newColor: any): void {
    try {
      if (typeof newColor !== 'string')
        //third party : thorw an error whene user send a newColor param different of type string
        throw new Error('the new color should be string');
      this.color = newColor;
      console.log('color changed successfully');
    } catch (error: any) {
      console.error(`Error : ${error.message}`);
    }
  }
}

//1- generated with CLI ng g tpOne --standalone=false
@Component({
  selector: 'app-tp-one',
  templateUrl: './tp-one.component.html',
  styleUrl: './tp-one.component.css',
})
export class TpOneComponent {
  //3- create instace of Car
  ford = new Car('Ford', 'Focus', 'red');
  //second partie : create an array of 5 cars
  cars: Car[] = [
    new Car('BMW', 'X3', 'blue'),
    new Car('Renault', 'Megane', 'gris'),
    new Car('Audi', 'A3', 'white'),
    new Car('Dacia', 'duster', 'black'),
    new Car('Audi', 'A3', 'green'),
  ];
  constructor() {
    this.ford.showCar();
    //2.1 remove the first item with shift function
    this.cars.shift();
    //2.2 remove cars with manufactor Audi and model A3
    this.cars = this.cars.filter(
      (c) => c.manufactor != 'Audi' && c.model != 'A3'
    );

    console.log(this.cars);

    this.ford.changeColor(100);
  }
}
