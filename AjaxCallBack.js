let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; 
function showTime(){
    const date = new Date();
    return date.getHours() + "Hrs: " +date.getMinutes() + "Mins: " +date.getSeconds()+ "Secs ";
}
function makeAJAXCall(methodType, url, callback, async = true, data = null){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        //console.log(methodType+ " State Change Called. Ready State: "+ xhr.readyState+" Status:" +xhr.status);
       if(xhr.readyState === 4) {
            if(xhr.status === 200 || xhr.status === 201){
                callback(xhr.responseText);
            }else if(xhr.status >= 400){
                console.log("Handle 400 Client err or 500 server err")
            }
        }
    }
    xhr.open(methodType, url , async);
    if(data){
        //console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
    }else xhr.send();
    console.log(methodType+ " request sent to server at: " +showTime()); 
}
 
const getURL = "http://127.0.0.1:3000/employees/2";
function getUserDetails(data){
    console.log("Get User Data: " +data)
}
makeAJAXCall("GET", getURL, getUserDetails, true);
console.log("Made GET AJAX Call to Server at "+showTime()); 

const deleteURL = "http://localhost:3000/employees/7";
function userDeleted(data){
    console.log("User Deleted at: " +showTime() + " data:" +data)
}
makeAJAXCall("DELETE",deleteURL,userDeleted,false)
console.log("Made DELETE AJAX Call to Server at "+showTime()); 

const postURL = "http://localhost:3000/employees";
const emp1Data = {"name": "Arpit" , "salary":"2301"};
function userAdded(data){
    console.log("User Added at: " +showTime() + " data:" +data)
}
makeAJAXCall("POST",postURL,userAdded,true, emp1Data);
console.log("Made POST AJAX Call to Server at "+showTime()); 