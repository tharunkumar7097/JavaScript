var a=prompt("Enter a number");
var b=prompt("Enter second number");
var c=prompt("Enter third number");
if (a<b && a<c){
    console.log(a+" is the smallest number");
}
else if (b < a && b < c) {
    console.log(b+" is smallest number");
}
else{
console.log(c+" is the smallest number");
}