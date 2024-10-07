const user ={
    username:"aman",
    price:9999,
    welcomeMessage:function()
        {
            console.log(`${this.username},welcome to this site`);
        }
    }
    // user.welcomeMessage()
    // user.username="sam"
    // user.welcomeMessage()
    // console.log(this);
    // function chai(){
    //     let username="hitesh"
    //     console.log(this.username);
        
    // }
    // chai()
    // const chai= () =>
    // {
    //     let username="aman"
    //     console.log(this);
        
    // }
    // chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2;

// }
// const addTwo=(num1,num2)=>
//     num1+num2;
const addTwo=(num1,mum2)=>({username:"aman"})

console.log(addTwo(3,4));


