
    //practice kiya h khud se
    


function sayMyName(){
    // console.log("S");
    // console.log("A");
    // console.log("M");
    // console.log("I");
    // console.log("R");

}

// const user= {
//     username:"hotesh",
//     price:300,
//     welcomeFunction: function(){
//         console.log(  , 'welcome to website')
//         console.log(this);
//     }
// }

// user.welcomeFunstion()
// user.name="sam"
// user.welcomeFunction()
// console.log(this)         // isse line se output null aiga kyu ke global scope m kuch h hi nhi
// // sayMyName()



/////// name of method is IIFE

(function one(){
    console.log("hello  this is safdar")
})();                                             // jab ek se jyda iife ko run karna h to ; iska used karo

(function one(){
    console.log("hello  this is safdar")
})(rahul)