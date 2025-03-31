let login=JSON.parse(localStorage.getItem("signup")) || [];

const getvalue=(id)=>{
return document.getElementById(id).value;
}

document.getElementById("myform").addEventListener("submit",(event)=>{
event.preventDefault();

let about={
    email:getvalue("email"),
    password:getvalue("password")
}

let isExist=login.find(ele=>ele.email==about.email);

if(isExist){

    let password=login.find((ele)=>ele.password==about.password);
    if(password){
         alert("login succsessfull")
    }else{
        alert("...Please enter your valid password.")
    }
}else{
    let userchoise=window.confirm("...!!!... you have no account....\nClick 'ok' to create account or \n Click 'cancel' to remember with another email or contact number ")
    if(userchoise){
        window.location.href = './signup.html';
    }
}
})