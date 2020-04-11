console.log('script loaded');
var one = document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');
var five = document.querySelector('.five');
var six = document.querySelector('.six');
var seven = document.querySelector('.seven');
var eight = document.querySelector('.eight');
var nine = document.querySelector('.nine');
var zero = document.querySelector('.zero');
var dot = document.querySelector('.dot');
var add = document.querySelector('.add');
var minus = document.querySelector('.minus');
var multiply = document.querySelector('.multiply');
var divide = document.querySelector('.divide');
var mod = document.querySelector('.mod');
var sqrt = document.querySelector('.sqrt');
var bopen = document.querySelector('.open_bracket');
var bclose = document.querySelector('.close_bracket');
var equals = document.querySelector('.equals');
var del = document.querySelector('.del');
var screen = document.querySelector('.screen');
var back = document.querySelector('.back');






console.log(one);
one.addEventListener('click', function a() {

    screen.innerHTML += '1';


})
two.addEventListener('click', function a() {

    screen.innerHTML += '2';


})



three.addEventListener('click', function a() {

    screen.innerHTML += '3';


})

four.addEventListener('click', function a() {

    screen.innerHTML += '4';


})

five.addEventListener('click', function a() {

    screen.innerHTML += '5';


})

six.addEventListener('click', function a() {

    screen.innerHTML += '6';


})

seven.addEventListener('click', function a() {

    screen.innerHTML += '7';


})

eight.addEventListener('click', function a() {

    screen.innerHTML += '8';


})

nine.addEventListener('click', function a() {

    screen.innerHTML += '9';


})

zero.addEventListener('click', function a() {

    screen.innerHTML += '0';


})

dot.addEventListener('click', function a() {

    screen.innerHTML += '.';


})

add.addEventListener('click', function a() {

    screen.innerHTML += '+';


})
minus.addEventListener('click', function a() {

    screen.innerHTML += '-';


})
multiply.addEventListener('click', function a() {

    screen.innerHTML += '*';


})
divide.addEventListener('click', function a() {

    screen.innerHTML += '/';


})
mod.addEventListener('click', function a() {

    screen.innerHTML += '%';


})
bclose.addEventListener('click', function a() {

    screen.innerHTML += ')';


})
bopen.addEventListener('click', function a() {

    screen.innerHTML += '(';


})
sqrt.addEventListener('click', function a() {

    //    screen.innerHTML += '&#8730;';
    var st=screen.innerHTML;
    var thenumb=Math.sqrt(st);
    var resuString=thenumb.toString();

    var resu=resuString.substr(0,10);
    
    screen.innerHTML =resu;
    // screen.innerHTML = Math.sqrt(screen.innerHTML);

})

del.addEventListener('click', function () {

    screen.innerHTML = '';


})





equals.addEventListener('click', function () {

    //    screen.innerHTML += '=';
    var string = screen.innerHTML;
    var thenum=eval(string);
    var resString=thenum.toString();

    var res=resString.substr(0,10);
    
    screen.innerHTML =res;
    console.log(res.toString().length);

})


back.addEventListener('click', function () {
console.log("back called");
    //    screen.innerHTML += '=';
    
     screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
})

