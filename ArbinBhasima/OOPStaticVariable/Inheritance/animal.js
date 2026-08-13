class Animal {
    constructor(name, age, species){
        this.name = name;
        this.age = age;
        this.species = species;
    }

    walk(){
        console.log(`${this.name} is walking on Four foot`)
    }

    eat(){
        console.log(`${this.name} is eating Food.`)

    }
    makeSound(){
        console.log(`${this.name} is making a dog sound that is: `)
    }
}

class Dog extends Animal{
    // super() call inherited classes constructor
    constructor(name, age, species){
        super(name, age, species)
    }

    // polymorphsim
    eat(){
        console.log(`${this.name} is eating dog food.`)
    }
}

const month = "month"
const manon = new Dog("Manon", 7, "Japanese Spitz")
console.log()


// dependency inversion
// objexcts must be defined in run time

// instance  is created as 
// const dog = new Dog()

// create a factory function that takes animal type
// /and returns corresponding animal object 




// only possible in ts
// interface
// class x inplements z {

// }


// abstract classes is very important 
// when it is needed for the different 


// private
// public 
// need ts
// protected





// this 
// console.log(this)


// address is passed but the context is used when 
// fn referecne is passed through the function  


// const fnref = x.ge/

function fnrunner (fn){ // function // function ref is where the function is stored
    fn() // 
}

const person = {
    name: "Arbin",
    displayName: function (){
        console.log(this.name)
    }
}

const withoutBind = person.displayName
const withBind = person.displayName.bind(person)

fnrunner(withBind) 


// bind()
// call()
// apply()

// bind returns function after binding context to this keyword
// call and apply will directly invokes the function by binding context to this keyword


// very important for interview

// asyncchronous

// function reference 