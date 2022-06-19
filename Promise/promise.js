function toPromiseCallBack(resolve, reject){
    let x = 2+2;
    if(x == 4) {
        resolve('All good mate');

    }else {
        reject('Not godd...');
    }
}

let p = new Promise(toPromiseCallBack);

p
.then((data) =>console.log(`i'm form then ${data}`));
.catch((data) =>console.log(`i'm form then ${data}`));