
//1. reference created 

let btn1 = document.querySelector('.btn-1');


let btn2 = document.querySelector('.btn-2');

let copyDiv = document.querySelector('.output-val');
let rgb1 = "#000";
let rgb2 ="#fff";
let myHexValue = "0123456789abcdef";

const colorgenerator=()=>{
    let myColor = "#";
    for(let i=0;i<6;i++){
        myColor = myColor+(myHexValue[Math.ceil(Math.random()*15)]);;

    }
    return myColor;

}
const handelButton1 =()=>{
     rgb1 = colorgenerator();
   
     document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1},${rgb2})`;
     copyDiv.innerHTML=`background-image:  linear-gradient(to right, ${rgb1},${rgb2})`
     btn1.innerHTML =`${rgb1}`;
    
    
}
const handelButton2 =()=>{
   rgb2 = colorgenerator();
  console.log(rgb2);
  
  document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1},${rgb2})`;
     copyDiv.innerHTML=`background-image:  linear-gradient(to right, ${rgb1},${rgb2})`
     btn2.innerHTML =`${rgb2}`;
 
}


btn1.addEventListener('click',handelButton1);
btn2.addEventListener('click',handelButton2);
copyDiv.addEventListener('click',()=>{
window.navigator.clipboard.writeText(copyDiv.textContent);

alert("copied successfully!")

})