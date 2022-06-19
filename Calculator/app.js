
const numPad = document.querySelector("[data-numpad]");
const screen = document.querySelector('.screen');
const resScreen = document.querySelector('[data-input]');

//opreators\\
const equalBtn = document.querySelector('[data-equal-btn]');
const plusBtn = document.querySelector('[data-plus-btn]');
const minusBtn = document.querySelector('[data-minus-btn]');
const multiplyBtn = document.querySelector('[data-multiply-btn]');
const divideBtn = document.querySelector('[data-divide-btn]');
const clearBtn = document.querySelector('[data-clear-btn]');


class Mathe {
    constructor (num1, num2){
        this.num1 = num1;
        this.num2 = num2;
        
    }
    
    plus() {
        let x  = parseInt(resualt.num1, 10) + parseInt(resualt.num2, 10);
        screen.innerHTML = x;
        resualt = x;
    }

    minus() {
        let x  = parseInt(resualt.num1, 10) - parseInt(resualt.num2, 10);
        screen.innerHTML = x;
    }

    divide() {
        let x  = parseInt(resualt.num1, 10) / parseInt(resualt.num2, 10);
        screen.innerHTML = x;
    }

    multiply() {
        let x  = parseInt(resualt.num1, 10) * parseInt(resualt.num2, 10);
        screen.innerHTML = x;
    }

};

let resualt = new Mathe( "" , "" );

/////////////////////////////////////////////////////////////////////////////////////

numPad.onclick = function (e){
    resualt.num1 += e.target.innerHTML;
    var x = parseInt(resualt.num1, 10);
    screen.innerHTML = x;
    console.log(x);
};


plusBtn.onclick = function (e){
    screen.innerHTML = resualt.num1 + ' + ' + resualt.num2;
    if(resualt.num1 < 0 || resualt.num1 > 0){
        numPad.onclick = null;
        numPad.onclick = function (e){
            resualt.num2 += e.target.innerHTML;
            screen.innerHTML = resualt.num1 + ' + ' + resualt.num2;
        };
    };
};

minusBtn.onclick = function (e){
    screen.innerHTML = resualt.num1 + ' - ' + resualt.num2;
    if(resualt.num1 < 0 || resualt.num1 > 0){
        numPad.onclick = null;
        numPad.onclick = function (e){
            resualt.num2 += e.target.innerHTML;
            screen.innerHTML = resualt.num1 + ' - ' + resualt.num2;
        };
    };
};

divideBtn.onclick = function (e){
    screen.innerHTML = resualt.num1 + ' / ' + resualt.num2;
    if(resualt.num1 < 0 || resualt.num1 > 0){
        numPad.onclick = null;
        numPad.onclick = function (e){
            resualt.num2 += e.target.innerHTML;
            screen.innerHTML = resualt.num1 + ' / ' + resualt.num2;
        };
    };
};

multiplyBtn.onclick = function (e){
    screen.innerHTML = resualt.num1 + ' * ' + resualt.num2;
    if(resualt.num1 < 0 || resualt.num1 > 0){
        numPad.onclick = null;
        numPad.onclick = function (e){
            resualt.num2 += e.target.innerHTML;
            screen.innerHTML = resualt.num1 + ' * ' + resualt.num2;
        };
    };
};


equalBtn.onclick = function (e){
    if(screen.innerHTML === resualt.num1 + ' + ' + resualt.num2){
        resualt.plus();
    }else if(screen.innerHTML === resualt.num1 + ' - ' + resualt.num2){
        resualt.minus();

    }else if(screen.innerHTML === resualt.num1 + ' / ' + resualt.num2){
        resualt.divide();

    }else if(screen.innerHTML === resualt.num1 + ' * ' + resualt.num2){
        resualt.multiply();

    }
    numPad.onclick = null;

    console.log(typeof resualt);

    saveEqual()
};

clearBtn.onclick = function (e){
    resualt.num1 = "";
    resualt.num2 = "";
    screen.innerHTML = 0;

    numPad.onclick = function (e){
        resualt.num1 += e.target.innerHTML;
        var x = parseInt(resualt.num1, 10);
        screen.innerHTML = x;
    }
    console.log(resualt);
};

//////////////////////////////////////////////////////////////////////

function saveEqual() {
    const jasonObj = JSON.stringify(resualt);
    const jasonObj2 = JSON.stringify(screen.innerHTML)
        localStorage.setItem("Equal2", jasonObj2);
        localStorage.setItem("Equal", jasonObj);
    };
    


