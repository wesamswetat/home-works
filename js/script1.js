/**
 * Created by Wesam on 7/30/2016.
 */

var array = [2,4,6,8,10,12,14,16,18,20];

console.log(array.length);

console.log(array[0] , array[2] , array[5]);

console.log(array.indexOf(10));

array.splice(8,2);

console.log(array.toString());

var array2 = [1,"אחד",2,"שתיים",3,"שלוש"];



function face(color) {
    this.eyeColor = color;
}

function person(eye , name , height) {
    this.namee = name;
    this.height = height;
    this.eye = (new face(eye)).eyeColor;
}

var talmed = new person ("black" , "wesam" , 193);
var talmed1 = new person("black" , "iyelena" , 170);
var talmed2 = new person("black" , "wafe" , 175);
var talmed3 = new person("black" , "hsan" , 174);

var arrayOfTalmedem = [talmed , talmed1 ,talmed2 ,talmed3];

arrayOfTalmedem.shift();

console.log(arrayOfTalmedem);

arrayOfTalmedem.unshift(new person("black" , "dotan" , 174));

console.log(arrayOfTalmedem);