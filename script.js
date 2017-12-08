function myFunction (){
var x=document.getElementById("myTopnav");
if( x.className === "mainMenu__topnav"){
    x.className +=" responsive";
}else{
x.className ="mainMenu__topnav";
}
}
