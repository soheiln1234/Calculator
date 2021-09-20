// Dont't cahnge any thing on this file.

// get the top and bottom display
const top_display=document.querySelector(".top_display");
const bottom_display=document.querySelector(".bottom_display");
let oprator=0,parentese=0,num=1;

// calculate function
function calculate(element){
    let value=element.innerHTML;
    if((bottom_display.innerHTML==="") && (value!="0" && value!="." && value!="-" && value!="+"&& value!="×" && value!="%" && value!="÷")){
        if(value!="()"){
            bottom_display.innerHTML+=value;
            top_display.innerHTML+=value;  
            num=1;
        }
        else{
            if(num===1){
                num=0;
                top_display.innerHTML+="(";
                bottom_display.innerHTML="";
                parentese=1;
            }
        }
    }
    else if(bottom_display.innerHTML!="" || top_display.innerHTML !=""){
        if((value==="+" || value==="-" || value==="." || value==="×" || value==="%" || value==="÷") && (oprator===0)){
                top_display.innerHTML+=value;
                bottom_display.innerHTML="";
                oprator+=1;
        }
        else{
            if (value!="+" && value!="-" && value!="." && value!="×" && value!="%" && value!="÷"){
                if (value==="()"){
                    if(parentese===0 && num===1){
                        top_display.innerHTML+="(";
                        parentese=1;
                        num=0;
                        oprator=1;
                    }
                    else if(num===1 && parentese===1){
                        top_display.innerHTML+=")"
                        bottom_display.innerHTML="";
                        parentese=0;
                        oprator=0
                    }
    
                }
                else
                {
                    num=1;
                    oprator=0;
                    bottom_display.innerHTML+=value;
                    top_display.innerHTML+=value;
                }
            }
        }
    if(value==="="){
        result()
    }
}
}
// clear function
function clear_display(){
    bottom_display.innerHTML="";
    top_display.innerHTML="";
    oprator=0;
}

// result function
function result(){
    let result=top_display.innerHTML.replace("×","*").replace("÷","/");
    bottom_display.innerHTML=eval(result);
    top_display.innerHTML=eval(result);
    oprator=0;
}