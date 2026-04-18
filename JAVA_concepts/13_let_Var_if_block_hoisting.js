let a="Pinky";
console.log(a); // Output: Pinky

if(true){
    // console.log(a); // Output: Pinky
    let a="Pinky and Brain";
    console.log(a); // Output: Pinky and Brain
}
console.log(a); // Output: Pinky

let b="purple";
console.log(b); // Output: purple   
if(true){
    // console.log(b); // ReferenceError: Cannot access 'b' before initialization
    let b="purple and pink";
    console.log(b); // Output: purple and pink
}