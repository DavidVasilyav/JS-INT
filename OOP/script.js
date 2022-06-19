class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHey(){
        console.log(this.name);
    }

    canDrink(){
        if (this.age > 21){
            return true;
        }
            return false;
    }
    isOlder(other){
        if (this.age > other.age) {
            return true;
        }
        return false;
    }
}

let person = new Person('ok',30);
let person2 = new Person('fuck',35);

// person.sayHey();
console.log(person.canDrink());

console.log(person.isOlder(person2));