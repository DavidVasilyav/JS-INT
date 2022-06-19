

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    } 
    
    changeWidthAndHeight(setWidth, setHight) {
        this.width = setWidth;
        this.height = setHight;

    }

    getArea() {
    return this.width * this.height;
    }
    
    getDiagnoal(){
        let diagnoal = 0 ;
        diagnoal = ((this.width * this.width) + (this.height * this.height));
        diagnoal = Math.sqrt(diagnoal);
        console.log(`The diagnoal is: ${diagnoal}`);

    }
    
    isBigger(x){
        let area1 = this.getArea()
        let area2 = x.getArea() ;
        if (area1 > area2) {
            return true;
        } return false;
    }

    isSmaller(x){
        let area1 = this.getArea()
        let area2 = x.getArea() ;
        if (area1 < area2) {
            return true;
        } return false;
    }



    
}

let r1 = new Rectangle(3,4);
let r2 = new Rectangle(1,2);
console.log(r1.isBigger(r2));
