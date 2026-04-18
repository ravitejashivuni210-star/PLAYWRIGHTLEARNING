let x ="global";
console.log(x); // Output: global

if (true) {
    console.log(x); // Output: global
    let x = "block scope";
    console.log(x); // Output: block scope
}
console.log(x); // Output: global