// primitive
// 7 type: String ,Boolean,Number,null,undefined,symbol,BigInt
constscore=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
// symbol
const id=Symbol('123'
)
const anotherid=Symbol('123')
console.log(id==anotherid)
// Reference type (non primitive)-array,object,function

const heros=["shaktiman","naagraj","doga"]
let myObj={
    name:"aman",
    age:17,
}
const myFunction=function()
{
    console.log("hello world");
}
// Stack memory(primitive) and Heap Memory(non primitive)
let myYoutubename="amankumarraj"
let anothername=myYoutubename
anothername="chaiorcode"
console.log(myYoutubename);

console.log(anothername);
let user= {
    email:"amanr2661@gmail.com",
    upi:"user@ybl"

}
let userTwo=user
userTwo.email="amanr26195@com"
console.log(user);
console.log(userTwo);


 
