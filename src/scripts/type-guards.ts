// typeof
console.log(typeof 5); // number
function checkTypeOf(value:any){
  if(typeof value === "number"){
    return 100+value;
  }
  return null;
}
checkTypeOf(20);
type A={
  x:Number;
};
type B={
  y:string;
};
type C=A|B;
function checkInfo(info:C){
  if("x" in info){
    console.log(info.x);
  }
  if("y" in info){
    console.log(info.y);
  }
  
}
