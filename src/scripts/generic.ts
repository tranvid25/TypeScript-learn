function identity <A>(arg:A):A{
  return arg;
}
identity<number>(10);
identity<string>("10");


function pair<A,B>(a:A,b:B):[A,B]{
  return [a,b]
}
pair(10,10);
pair("siuu",10);


function logLength<T extends {length:number}>(item:T):void{
  console.log(item.length);
}
logLength("123");
logLength([1,2,3]);

const student={
  name:"evondev",
  age:20,
  school:"CKC",
  year:1994
};
type Student=typeof student;
type StudentKeys=keyof Student;
type Example=Record<any,any>;
function logObjValue<O extends{},K extends keyof O>(obj:O,key:K):void{
  console.log(obj[key]);
}
logObjValue(student,"name");
