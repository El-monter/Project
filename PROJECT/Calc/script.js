// калькулятор 1
 let numFirst1 = document.getElementById('input1');
 let numFirst2 = document.getElementById('input2');
let resultE = document.getElementById('result1');
const submintButton = document.getElementById('button1')

button1.onclick = function() {
    let itog = Number(numFirst1.value) + Number(numFirst2.value);
result.value = itog;
}

button2.onclick = function() {
    let itog = Number(numFirst1.value) - Number(numFirst2.value);
result.value = itog;
}
button3.onclick = function() {
    let itog = Number(numFirst1.value) * Number(numFirst2.value);
result.value = itog;
}
button4.onclick = function() {
    let itog = Number(numFirst1.value) / Number(numFirst2.value);
result.value = itog;
}

//калькулятор 2

const strResult = document.querySelector('#calcStr');
const btnNum = document.querySelector('.btnNumber');
const btnOper = document.querySelector('.btnOperation');

let dataVar1 ="";
let dataVar2 ="";
let dataRes = 0
let indexBtnOperation = true;
let dataBtnOperation ="";



btnNum.addEventListener('click', showNum);
btnOper.addEventListener('click', calculationSate)

function sum(){
    dataRes = Number(dataVar2) + Number(dataVar1) }
function div(){
    dataRes = Number(dataVar2) / Number(dataVar1)}
function sub(){
    dataRes = Number(dataVar2) - Number(dataVar1)}
function mult(){
    dataRes = Number(dataVar2) * Number(dataVar1)}



function calculationSate(event) {
    dataBtnOperation = event.target.innerText; 

if(index==true){
    dataVar2 = dataVar1;
    dataVar1 ="";
    indexBtnOperation=false}

console.log(dataVar2,  dataBtnOperation, dataVar1, dataRes);
}




 

function showNum(event){
    let count ='';
if (dataVar1 == '.')
    {
    dataVar1 ='0.'
    }
    if (dataVar1 == '0')
            {dataVar1 +=  (event.target.innerText)
                    if (dataVar1 != '0.')
                    {dataVar1="";
                    dataVar1 +=  (event.target.innerText)
                    }
            } 
            else
            { if ((event.target.innerText)!='0 1 2 3 4 5 6 7 8 9 .')
                    {dataVar1 +=  (event.target.innerText);
                count =(dataVar1.match(/\./g) || []).length;      
                if (count >1) {        
                   delSymbol()}}
                
                

                  
            }

strResult.value = dataVar1;
index=true;

console.log(dataVar2, dataBtnOperation, dataVar1, count)
}

function outResult(){
     strResult.value = dataRes;
    dataVar2=dataRes;
    dataVar1='';   
}

function calculations(){
    switch (dataBtnOperation){
    case "+": sum();
        outResult();
    break;
    case "-": sub();
        outResult();
    break;
    case "*": mult();
        outResult();
    break;
    case "/": div();
        outResult();
    break;}

}



document.querySelector('#btnClr').onclick = calcClear
document.querySelector('#btnDel').onclick = delSymbol
document.querySelector('#btnCalc').onclick = calculations

function delSymbol() 
    {
    dataVar1=dataVar1.slice(0, -1);
    strResult.value = dataVar1;
    }

function calcClear()
    { strResult.value = '';
      dataVar1 ="";
      dataVar2 ="";
      dataRes=0;
      dataBtnOperation = '';
      }