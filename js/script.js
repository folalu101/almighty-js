// b= 5, a= 1, c=6 (-b +- Math.sqrt(b**2 - (4*a*c)/2a)
// let m = parseInt(prompt());
// let a = 1;
// let b = 5;
// let c = 6;

// function goup(){
//     return (-b + Math.sqrt(b**2 - 4 * a * c))/ (2 * a);
// }
// alert(goup());

// let a = 1;
// let b = 5;
// let c = 6;

// function goup(){
//     return (-b - Math.sqrt(b**2 - 4 * a * c))/ (2 * a);
// }
// alert(goup());




// a= 2, c= 6, d= 4, b= 3 ((a*c + b*d)/(c**2 + d**2)) + ((b*c - a*d)/(c**2 + d**2))
// let a = 2;
// let b = 3;
// let c = 6;
// let d = 4;

// function goout(){
//     let formula = (a * c + b * d)/(c ** 2 + d **2) + (b * c - a * d)/(c ** 2 + d ** 2);
//     return formula;
// }
// alert(goout());
// console.log(goout());

// where y= 3, m = (y**2 - 32)**2 / Math.sqrt(4/y)
// let y = 3;

// function goin(){

//      return (y ** 2 - 32)**2 / Math.sqrt(4/y);
// }
// alert(Math.round(goin()));

// more ways in writing functions for formular
// b= 5, a= 1, c=6 (-b +- Math.sqrt(b**2 - (4*a*c)/2a)



// q1(+)
// let m = parseInt(prompt('solve the almighty formula below'))

// let b = 5;
// let a = 1;
// let c = 6;

// function quadE(){
//     let eqt1 = Math.sqrt(b**2 - (4*a*c));
//     let eqt2 = -b + eqt1;
//     let x = Math.round(eqt2)/2*a;

//     return x;
    
// }
// alert(quadE());

// q2(-)
// let m = parseInt(prompt('solve the almighty formula below'));

// let b = 5;
// let a = 1;
// let c = 6;

// function almightyF(){
//      let eqt1 = Math.sqrt(b**2 - 4*a*c);
//      let eqt2 = -b - eqt1;
//      let x = Math.round(eqt2)/2*a;

//      return x;
// }
// document.write(almightyF());


// q3
// // a= 2, c= 6, d= 4, b= 3 ((a*c + b*d)/(c**2 + d**2)) + ((b*c - a*d)/(c**2 + d**2))

// let m = parseInt(prompt());

// let a = 2;
// let b = 3;
// let c = 6;
// let d = 4;

// function formL(){
//      let eqt1 = a*c + b*d;
//      let eqt2 = b*c - a*d;
//      let eqt3 = eqt1 + eqt2;
//      let x = Math.round(eqt3)/(c**2 + d**2);

//      return x;
// }
// document.write(formL());



// q4
// // where y= 3, m = (y**2 - 32)**2 / Math.sqrt(4/y)
let m = parseInt(prompt());
let y = 3;

function quadE(){
     let eqt1 = (y**2 - 32)**2;
     let eqt2 = Math.sqrt(4/y);
     let x = Math.round(eqt1 / eqt2);

     return x;
}
document.write(quadE());

