class Square {
    constructor(width) {
        this.width = width;
        this.height = width;
    }

    getArea() {
        return this.width * this.width;
    }

    changeSize(newSize) {
        this.width = (newSize);
        this.height = (newSize);
    }
        
}

let s = new Square(10);
console.log(s.getArea());

s.changeSize(5);
console.log(s);