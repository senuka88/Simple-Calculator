function fno0(){

    let previous= document.getElementById('display').innerHTML; //variable called previous declared to the innerhtml of respective id "display"

    document.getElementById('display').innerHTML= previous+ 0; //previous + 0 is added /appends to the id "display" upon onclick

}
 //liekwise this is been added to the next few digits (0-9) when relevant number buttons are clicked

function fno1(){

    let previous= document.getElementById('display').innerHTML; 

    document.getElementById('display').innerHTML= previous + 1;

}


function fno2(){

    let previous= document.getElementById('display').innerHTML;

    document.getElementById('display').innerHTML= previous + 2;

}



function fno3(){

    let previous= document.getElementById('display').innerHTML;

    document.getElementById('display').innerHTML= previous + 3;

}


function fno4(){

    let previous= document.getElementById('display').innerHTML;

    document.getElementById('display').innerHTML= previous + 4;

}



function fno5(){

    let previous= document.getElementById('display').innerHTML;

    document.getElementById('display').innerHTML= previous + 5;

}



function fno6(){

    let previous= document.getElementById('display').innerHTML;

    document.getElementById('display').innerHTML= previous + 6;

}


function fno7(){

    let previous= document.getElementById('display').innerHTML;

    document.getElementById('display').innerHTML= previous + 7;

}



function fno8(){

    let previous= document.getElementById('display').innerHTML;

    document.getElementById('display').innerHTML= previous + 8;

}


function fno9(){

    let previous= document.getElementById('display').innerHTML;

    document.getElementById('display').innerHTML= previous + 9;

}


function feraser(){

//this function removes the character from display 
     let previous= document.getElementById('display').innerHTML;  //variable called previous declared to collect "display"  id
     let erasedpre = previous.slice(0,-1) //varibale called erasedpre declared
     // slice is used to remove last charcter from the display like a backspace button 
     document.getElementById('display').innerHTML= erasedpre;
}

let firstsave; // global variable declared called firstsave from outside the function but still accessible

let op; // global variable declared called op to hold code representing the operation user selects; from outside the function but still accessible

function fnADD(){

     firstsave= document.getElementById('display').innerHTML; //variable declared called firstsave to save first number
    document.getElementById('display').innerHTML= 0; //Clears the display by setting it to 0 
     op = "1"; //op is handed a string operation as follows to imply addition


}

//likewise such unique string operations are handed like 2,3,4 for subtraction , multipication and division

function fnSUB(){

     firstsave= document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML= 0;
     op = "2";


}

function fnMUL(){

     firstsave= document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML= 0;
     op = "3";


}


function fnDIV(){

    firstsave= document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML= 0;
     op = "4";




}


function fnEq(){

    let secondsave = document.getElementById('display').innerHTML; //variable declared called secondsave to save second number
   
    if(op == 1){ //if condition stating if op is equal to 1 then

        document.getElementById('display').innerHTML= parseInt(firstsave) + parseInt(secondsave) //firstsave number and secondsave number should be added
                                                                                                 //by being converted to integer using Parseint

                
                    //relevant if conditions equalling to supposed string op codes perform the following operations like subtraction, multipication etc
                    //within the two firstsave and secondsave numbers
    } else if(op == 2){

        document.getElementById('display').innerHTML= parseInt(firstsave) - parseInt(secondsave)


    }

    else if(op == 3){

        document.getElementById('display').innerHTML= parseInt(firstsave) * parseInt(secondsave)


    }

    else if(op == 4){

        document.getElementById('display').innerHTML= parseInt(firstsave) / parseInt(secondsave)


    }

    else{ //else condition showing that if any invalid buttons are clicked that cannot show accurate answers then

        document.getElementById('display').innerHTML= "invalid" //invalid message is shown on display
    }


}


function Allclear(){

     document.getElementById('display').innerHTML= 0 //retrieves and sets the "display" id to 0

     op= "0"; //op code is handed as 0 meaning no operation and all on display would be converted to 0 or nothing


}
