//var c = 300

          // scope mai example se samajiye bhai ke agr bda aaadmi chhote se ice cream mang eto accha nhi lagega per chota bde se mang sakta h ice cream

let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);       
    
}



// console.log(a);     // output yha se 10 aaiga kyu ke yha var used huwa h
// console.log(b);     // yha b and c dono  ke output me error aaaiga kyu ke woh out of scope declecre nhi h unka range scope tak hi h 
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);    // yha error nhi aaiga kyu ke ye chota h means ye global scope ka part h to woh uska koi bhi dta used kar sakta h
    }
    // console.log(website);       /// yha se output error aaiga kyu ke website two function ke another h or uske andr ka value ka range bahr nhi aaia 

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))      // yha pe agar mai ya function ke baad lis output ko likhunga to to error nhi aaiga yrr


function addone(num){
    return num + 1
}




const addTwo = function(num){
    return num + 2
}
addTwo(5)   // agar is value ko is function ke upper likh dunga to error aaiga