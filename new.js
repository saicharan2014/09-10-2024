// Task 1
var firstside_length= +prompt("enter the length of the  one side of a traiangle")
var secondside_length= +prompt("enter the length of the  second side of a traiangle")
var thirdside_length= +prompt("enter the length of the  third side of a traiangle")


if(firstside_length+secondside_length>thirdside_length && secondside_length+thirdside_length>firstside_length && thirdside_length+firstside_length>secondside_length){
    alert("a valid triangle can be formed")
}
else{
    alert("a valid triangle cannot be formed")
}
// --------------------------
// task 2
var number=+prompt("enter the number")
var prime=false
if(number<=1){
    prime=false
}
for(i=2;i<=Math.sqrt(number);i++){
    if(number%i===0){
        prime=false
        }
        else{
            prime=true;
        }
}

if(prime){
    alert(`${number} is prime`)
}
else{
    alert(`${number} is not prime`)
}
// // -------------------------------------------
// // task 3
var newno = prompt("Enter three numbers separated by space:");
var arr = newno.split(" ").map(Number);
var i = 0;

// Compare the three numbers
if (arr[i] > arr[i+1]) {
    if (arr[i] > arr[i+2]) {
        alert(`${arr[i]} is the greatest`);
    } else {
        alert(`${arr[i+2]} is the greatest`);
    }
} else {
    if (arr[i+1] > arr[i+2]) {
        alert(`${arr[i+1]} is the greatest`);
    } else {
        alert(`${arr[i+2]} is the greatest`);
    }
}
// // -----------------------------
// // task 4
var year=+prompt("enter a year");
if(year%4===0 && year%100!=0){
    alert(`${year} is leap year`)
}
else if(year%400==0){
    alert(`${year} is leap year`)
}
else{
    alert(`${year} is not a leap year`)
}
// // ____________________________
// //task 5
var number=parseInt(prompt("enter the number"))
if(number%3===0){

    if(number%5===0){
        console.log("FizzBuzz");

    }
    else{
        console.log("Fizz");
    }
}else{
    if(number%5===0){
        console.log("Buzz");

    }
    else{
        console.log(`${number}`);
    }

}

// // task 6
var a= parseInt(prompt("enter the number"))
var b= parseInt(prompt("enter the number"))
var lcm=0
if(a>b){
lcm=a
}
else{
    lcm=b
}
value=true
while(value){
    if(lcm%a==0){
        if(lcm%b==0){
            console.log(`lcm of ${a} and  ${b} is ${lcm} `)
    value=false
        }
      else{
        lcm++;

      }
        }
        else{
            lcm++;
        }
}

// // task 6
var c = parseInt(prompt("enter the number"));
var d = parseInt(prompt("enter the number"));
var gcd = 0;
if (c > d) {
  gcd = d;
} else {
  gcd = c;
}
var i = gcd;
newi = 0;
while (i > 1) {
  if (i % c == 0) {
    if (i % d == 0) {
      newi = i;
      if (newi > i) {
        console.log(newi);
      } else {
        console.log(i);
      }
    } else {
      i--;
    }
  } else {
    i--;
  }
}

// // task 7
var a=+prompt("enter the number first number")
var b=+prompt("enter the number second number")
let action=prompt("please enter what action i need to perform")
switch (action){
     case "add":
         console.log(a+b)
         break;
     case "sub":
         console.log(a-b)
         break;
     case "mul":
         console.log(a*b)
         break;
     case "div":
         console.log(a/b)
         break;
     default:
console.log("please enter desired action")
}