const outputElement=document.getElementById('output');
const btnCopy=document.getElementById('btnCopy');
const passwordLengthElement=document.getElementById('length');
const NumbersElement=document.getElementById('number');
const CapitalLettersElement=document.getElementById('capital');
const SmallLettersElement=document.getElementById('small');
const SymbolsElement=document.getElementById('symbol');
const frm=document.getElementById('frm');


//Button click to copy password
btnCopy.addEventListener('click',async()=>{
  const pass=outputElement.value;
  alert(pass);
  if(pass){
    await navigator.clipboard.writeText(pass);
    alert("Copied to clipboard");
  }else{
    alert("There is no password to copy");
  }
});

function generateRandomChar(min,max){
  const limit=max-min+1;
  return String.fromCharCode(Math.floor(Math.random()*limit)+min);
}

function numberValue(){
  return generateRandomChar(48,57);
}

function capitalValue(){
  return generateRandomChar(65,90);
}

function smallValue(){
  return generateRandomChar(97,122);
}

function symbolValue(){
  const symbols=",./<>?;:'[]{}\|`!@#$%^&*()_+-=";
  return symbols[Math.floor(Math.random()*symbols.length)];
}

const functionArry=[
  {
    element:NumbersElement,
    fun:numberValue
  },
  {
    element:CapitalLettersElement,
    fun:capitalValue
  },
  {
    element:SmallLettersElement,
    fun:smallValue
  },
  {
    element:SymbolsElement,
    fun:symbolValue
  }
];

frm.addEventListener('submit',(e)=>{
  e.preventDefault();

  const limit=passwordLengthElement.value;

  let generatedPassword="";

  const funArry=functionArry.filter(({element})=>element.checked);
  console.log(funArry);

  for (i=0;i<limit;i++){
    const index=Math.floor(Math.random()*funArry.length);
    const letter=funArry[index].fun();
    generatedPassword+=letter;
  }

  outputElement.value=generatedPassword;
})
