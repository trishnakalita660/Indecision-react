class person {
constructor( name = 'anonymous', age = 0){
    this.name= name;
    this.age = age;

}
getGreeting(){
    return `My name is ${this.name} `;
}
getDescription(){
    return `${this.name} is ${this.age} years old`;
}

}
class Student extends person{
    constructor( name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
         return !!this.major;
    }
    getDescription(){
        var description = super.getDescription();
        if(this.hasMajor()){
        description+=    ` has major in ${this.major}`;
    }
return description;}
}

class Traveller extends person{
    constructor(name,age,home){
        super(name,age);
        this.home = home;
    }
    hasHome(){
        return !!this.home;
    }
    travelling(){
  var home = super.getGreeting();
  if(this.hasHome){
      home+=` and I'm from ${this.home}`
  }
  return home;
    }
}
const me = new Traveller('Trishna', 21, 'xyz','xyz');
console.log(me.travelling());

const test= new Traveller();
console.log(test.travelling());

