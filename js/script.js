/**
 * Created by Wesam on 7/26/2016.
 */
// var x= 3;
// console.log(x);
// console.log(typeof x);
// x = "wesam swetat";
// console.log(x);
// console.log(typeof x);
//
//
// chekNames("wesam" , "wdddm");
//
//
// function chekNames( name1 , name2 ) {
//
//     var cunter = 0 ;
//
//     for (var i = 0 ; i < name1.length ; i++){
//
//         if( name1.charAt(i) == name2.charAt(i) ){
//             cunter ++;
//             if (cunter == 2 ){
//                 alert("true");
//                 return;
//             }
//         }
//     }
//
// }

var person = {

    "eyeColor": "black",
    "name": "wesam",
    "heghit": 193,
    "location": "israel",
    "languge": ["hebrew", "rusion", "english"]
};

person.eyeColor = "brown";


console.log(typeof(person.languge[0]));