
let signup=JSON.parse(localStorage.getItem("signup")) || [];

const getvalue=(id)=>{
return document.getElementById(id).value;
}

document.getElementById("myform").addEventListener("submit",(event)=>{
event.preventDefault();

let about={
    name:getvalue("name"),
    email:getvalue("email"),
    number:getvalue("mumber"),
    password:getvalue("password")
}

let isExist=signup.find(ele=>ele.email==about.email || ele.number==about.number);

if(isExist){
    let userchoise=window.confirm("...!!!... you have an already account....\nClick 'ok' to login or \n Click 'cancel' to try with another email or contact number ")
    if(userchoise){
        window.location.href = './login.html';
    }
}else{

signup.push(about)
localStorage.setItem("signup",JSON.stringify(signup))
alert("Created account successfully.....")
}

})