

const multiplier={
    multiplierNumber : 2,
    arrayNum : [1,2,3,9],
    multiply(){
      return  this.arrayNum.map((num)=> num* this.multiplierNumber);
    } 

};
console.log(multiplier.multiply());


