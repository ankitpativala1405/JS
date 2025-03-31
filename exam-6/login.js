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

let isExist=login.find((ele)=>ele.email==about.email);

if(isExist){
    // alert("login succsessfull")
    let password=login.find((ele)=>ele.password==about.password);
    if(password){
         alert("login succsessfull")
    }else{
        alert("wrong password")
    }
}else{
    alert("Sorry !!... you have no account.....")

// signup.push(about)
// localStorage.setItem("signup",JSON.stringify(signup))
}

})