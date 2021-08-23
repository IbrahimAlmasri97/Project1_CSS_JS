window.onbeforeunload = function () {
   window.scrollTo(0,0);

};

/*var firstName = "ibrahim" ;
document.getElementById("p1").innerHTML=firstName;
console.log("goo");
alert("welcome web site ibrahim almasri");
*/

/*
var info = {firstName : "ibrahim",lastName : "almasri"};
document.getElementById("p2").innerHTML = info.firstName +" "+info.lastName ;

var x ="fofo" + 5 + 4 ; 
document.getElementById("p2").innerHTML = x;// fofo54

var x ="fofo" + ( 5 + 4 ) ; 
document.getElementById("p2").innerHTML = x;// fofo9

 x = 5 + 4 + "fofo<br><br>" ; 
document.getElementById("p3").innerHTML = x;//9fofo


var t =9;
if(t===9)
    var t= t+10;
    else
   var t = t+20; 
document.getElementById("p3").innerHTML = x; //19

var fullName ="ibrahim<br> <span style = 'color : red '>yousef</span> <br>kamel<br>almasri";
document.getElementById("p4").innerHTML = fullName;//

*/

/*
var oID=document.getElementById("p5");
var oCreate =document.createElement("newEl") ; 
oCreate.innerHTML="textIbrahim";
oID.appendChild(oCreate);

*/

/*

var oID=document.getElementById("ff");
oID.setAttribute("color","red");
oID.setAttribute("size","100");

//var oID=document.getElementById("ff");
//var pp=oID.parentNode;
//pp.removeChild(oID);


oID.removeAttribute("color");

document.getElementById("p1").innerHTML = "ibr";
document.getElementById("p2").innerHTML = "yous";
var tag=document.getElementsByTagName("div");
alert(tag[0].innerText);
alert(tag[1].innerHTML);
alert(tag.length);


var cla=document.getElementsByClassName("cc");

for(var i=0 ; i<cla.length ; i++)
{
  var n=cla[i];
  n.setAttribute("style","color:#988888");
  
}

var nNode = document.createTextNode("ibraim YOUSEF almasri");
var dd=document.getElementsByTagName("div")
dd[0].appendChild(nNode);



*/

/*

var pp=document.createElement("p");
pp.setAttribute("id","id_p");

var bb=document.createElement("b");

pp.innerHTML="<b>ibrahim </b><span style = 'color : red '>yousef </span>kamel ";
bb.innerText="Almasri ";

var obodyy = document.body;
obodyy.appendChild(pp);

var op=document.getElementById("id_p");
op.appendChild(bb);
*/

/*
var oIbr=document.getElementById("ibr");

oIbr.style.color="yellow";
oIbr.style.fontSize="40px";
//OR
//oIbr.setAttribute("style","font-size:40px ; color:red");

function eventOv(){
  oIbr.innerHTML="ابراهيم يوسف كامل المصري";
}
function eventl(){
  oIbr.innerHTML="ibrahim yousef kamel almasri";
}
oIbr.onmouseover=eventOv;
oIbr.onmouseleave=eventl;

var i= 0;
oIbr.onclick=function(){
 if(i%2===0){
oIbr.style.color="blue";
oIbr.style.fontSize="10px";
//i=i+1;
 }
 else
 {
  oIbr.style.color="yellow";
  oIbr.style.fontSize="40px";
  //i=i+1;
 }
 i++
};

*/
/*

var op=document.getElementById("h11");

function ovv(){
  //this.style.backgroundColor="#fccc00";
  this.setAttribute("class","moveov");
}
function outt(){
  //this.style.backgroundColor="#fc0000";
  this.setAttribute("class","moveou");
}
op.onmouseover=ovv;
op.onmouseout=outt;
*/

/*
var x=prompt("what your name");
var xx=prompt("how old you");

var op=document.getElementById("h11");

op.innerHTML=x+" "+xx ;
*/



var o=document.getElementById("idnews");

o.innerHTML="مرحبااااااااااااا";

var b=document.getElementById("b");
 var test=document.getElementById("test");
 
var font=document.getElementsByClassName("fontz");


    var i= 0;
    b.onclick=function(){
     if(i%2===0){
       font[0].style.display="block";
       font[1].style.display="block";
       font[2].style.display="block";
       font[3].style.display="block";
       b.innerHTML="x"
    
      test.style.color="#8d0d18";
      test.style.height="370px";
      test.style.width="170px";
      test.style.transition=  "all .4s 0s ease-in-out" ;
   
    //i=i+1;
     }
     else
     {

      font[0].style.display="none";
      font[1].style.display="none";
      font[2].style.display="none";
      font[3].style.display="none";
      b.innerHTML=">"
      test.style.height="0px";
      test.style.width="0px";
      //i=i+1;
     }
     i++
    };



  
 





