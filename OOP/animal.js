class Animal {
    constructor(age, name, predator) {
        this.age = age;
        this.name = name;
        this.predator = predator;

    }

    makeNoise(){
        console.log('this animal make noise')
    }

    getNoise() {
        return this.age;
    }

}



class dog extends Animal {
    constructor(age, name, predator, furColor) {
        super(age, name, predator);
        this.furColor = furColor;
    }
    
    makeNoise(){
        console.log('Woof');
    }

}

class cat extends Animal {
    constructor(x, y, z, color) {
        super(x, y, z);
        this.color = color;
    }
    makeNoise(){
        console.log('Meow');
    }
}

let a = new Animal(10,'Mishmish', false);
let d = new dog(3, "Snow", false, "white");
let c = new cat(10 ,'evil' ,false ,'brown')

class Car {
    constructor() {}
}

let toyota = new Car();
