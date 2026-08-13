// Stall Closures in react

// how bugs is introduced



// function that returns functions 


// function A(){
//     console.log("A")
//     return function B(){

//     }
// }




function A(){
    let x = 0 
    console.log(x)
    return function B(){ // holds the resources of A // this is what closures
        x += 10
        console.log(x)
        return function C(){
            x += 10
            console.log(x)
        }
    }
}

// only return when you function is created closures
const Bref = A()
const Cref = Bref()
Cref()


// b creates closure over A 
// c creates closure b and b creates closures a




// A function that takes a component and returns a new one


function Button(props){
    return `<button>${props.label}</button>`
}
function withLogger(Component) {
    return function Wrapped(props) {
        console.log("rendering", Component.name, props);
        return Component(props);
    };
}

const LoggedButton = withLogger(Button);