const language:string="javascript";
console.log(language.split(""));
const score:number=100;
const isAvailable:boolean=false;

const text:string=language === "js" ? "aa" : "bb";
let keyboard:any;
keyboard="Alokio";
keyboard=100;
let mouse:null=null;
let bottle:undefined=undefined;

let study:unknown;
study="Reactjs";
if(typeof study ==="string"){
  study.split("");
}
function sum(a:number,b:number){
  return a+b;
}

console.log(sum(6, 10)); 
function caculate():never{
  while(true){
    console.log("infinite");
  }
}