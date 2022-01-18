class Temperature{
    constructor(value) {
        this.value = value;
    }
    getK = function (){
        return this.value +273;
    }
    getF = function (x){
        return 1.8*this.value +32;
    }
}
let temp1 = new Temperature(25);
let c = temp1.value;
let k = temp1.getK();
let f =temp1.getF();
document.write("c = "+c+";k = "+k+";f = "+f);