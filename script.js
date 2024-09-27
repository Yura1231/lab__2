class Car {
    constructor() {
      this.engineType = null;
      this.engineVolume = null;
      this.abs = false;
      this.esp = false;
      this.airbags = 0;
      this.boardComputer = false;
      this.airConditioning = null;
      this.interior = null;
      this.price = 0;
    } 
  
    displaySpecs() {
      return `
        <strong>Тип двигуна:</strong> ${this.engineType}<br>
        <strong>Об'єм двигуна:</strong> ${this.engineVolume} л<br>
        <strong>ABS:</strong> ${this.abs ? 'Так' : 'Ні'}<br>
        <strong>ESP:</strong> ${this.esp ? 'Так' : 'Ні'}<br>
        <strong>Подушки безпеки:</strong> ${this.airbags}<br>
        <strong>Бортовий комп'ютер:</strong> ${this.boardComputer ? 'Так' : 'Ні'}<br>
        <strong>Кондиціонер/Клімат-контроль:</strong> ${this.airConditioning}<br>
        <strong>Обшивка салону:</strong> ${this.interior}<br>
        <strong>Ціна:</strong> ${this.price} $
      `;
    }
  }
  
  class CarBuilder {
    constructor() {
      this.car = new Car();
    }
  
    setEngine() {}
    setABS() {}
    setESP() {}
    setAirbags() {}
    setBoardComputer() {}
    setAirConditioning() {}
    setInterior() {}
    setPrice() {}
  
    getCar() {
      return this.car;
    }
  }
  
  class StandardCarBuilder extends CarBuilder {
    setEngine() {
      this.car.engineType = 'Бензиновий';
      this.car.engineVolume = 1.6;
    }
  
    setABS() {
      this.car.abs = true;
    }
  
    setESP() {
      this.car.esp = false;
    }
  
    setAirbags() {
      this.car.airbags = 2;
    }
  
    setBoardComputer() {
      this.car.boardComputer = false;
    }
  
    setAirConditioning() {
      this.car.airConditioning = 'Кондиціонер';
    }
  
    setInterior() {
      this.car.interior = 'Тканинна обшивка';
    }
  
    setPrice() {
      this.car.price = 15000;
    }
  }
  
  class ComfortCarBuilder extends CarBuilder {
    setEngine() {
      this.car.engineType = 'Дизельний';
      this.car.engineVolume = 2.0;
    }
  
    setABS() {
      this.car.abs = true;
    }
  
    setESP() {
      this.car.esp = true;
    }
  
    setAirbags() {
      this.car.airbags = 4;
    }
  
    setBoardComputer() {
      this.car.boardComputer = true;
    }
  
    setAirConditioning() {
      this.car.airConditioning = 'Клімат-контроль';
    }
  
    setInterior() {
      this.car.interior = 'Шкіряна обшивка';
    }
  
    setPrice() {
      this.car.price = 20000;
    }
  }
  
  class CarDirector {
    construct(builder) {
      builder.setEngine();
      builder.setABS();
      builder.setESP();
      builder.setAirbags();
      builder.setBoardComputer();
      builder.setAirConditioning();
      builder.setInterior();
      builder.setPrice();
      return builder.getCar();
    }
  }
  
  const director = new CarDirector();
  
  document.getElementById('show-specs').addEventListener('click', () => {
    const carConfig = document.getElementById('car-config').value;
    let builder;
    
    if (carConfig === 'standard') {
      builder = new StandardCarBuilder();
    } else if (carConfig === 'comfort') {
      builder = new ComfortCarBuilder();
    }
  
    const car = director.construct(builder);
    document.getElementById('specs').innerHTML = car.displaySpecs();
    document.getElementById('car-specs').style.display = 'block';
  });
  