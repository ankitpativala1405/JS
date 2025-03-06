let employee = [];

const handledelete = (index) => {
  employee.splice(index, 1);
  uimaker();
};

function dltall(){
  let tableBody = document.getElementById("tablebody");
  tableBody.innerHTML = "";
}


function uimaker() {
  let tableBody = document.getElementById("tablebody");
  tableBody.innerHTML = "";

  employee.map((ele,i) => {
    let td1 = document.createElement("td");
    td1.innerHTML = ele.name;
    let td2 = document.createElement("td");
    td2.innerHTML = ele.surname;
    let td3 = document.createElement("td");
    td3.innerHTML = ele.contact;
    let td4 = document.createElement("td");
    td4.innerHTML = ele.acontact;
    let td5 = document.createElement("td");
    td5.innerHTML = ele.email;
    let td6 = document.createElement("td");
    td6.innerHTML =
      ele.address.ad1 + ", " + ele.address.ad2 + ", " + ele.address.ad3;
    let td7 = document.createElement("td");
    td7.innerHTML = ele.landmark;
    let td8 = document.createElement("td");
    td8.innerHTML = ele.pincode;
    let td9 = document.createElement("td");
    td9.innerHTML = ele.city;
    let td10 = document.createElement("td");
    td10.innerHTML = ele.state;
    let td11 = document.createElement("td");
    td11.innerHTML = ele.password;
    let td12=document.createElement("td");
    td12.innerHTML=ele.username;
    let btn = document.createElement("button");
    btn.addEventListener("click",()=>handledelete(i))
    btn.innerHTML = "delete";
    let tr = document.createElement("tr");
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11,td12, btn);

    document.getElementById("tablebody").append(tr);
  });
}

document
  .getElementById("myForm")
  .addEventListener("submit", function customer(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let contact = document.getElementById("mobile number").value;
    let acontact = document.getElementById("alternative number").value;
    let email = document.getElementById("email").value;
    let landmark = document.getElementById("landmark").value;
    let pincode = document.getElementById("pincode").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let password = document.getElementById("password").value;
    let ad1 = document.getElementById("adress1").value;
    let ad2 = document.getElementById("adress2").value;
    let ad3 = document.getElementById("adress3").value;
    let address = {
      ad1,
      ad2,
      ad3,
    };
    let rpassword = document.getElementById("rpassword").value;
    let username=getvalue("username")
    let usernameregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,15}$/;
   let PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/-]).{8,12}$/;


            let detail = {
      name: name,
      surname: surname,
      contact: contact,
      acontact: acontact,

      email: email,
      address: address,
      landmark: landmark,
      pincode: pincode,
      city: city,
      state: state,
      password: password,
      username:username,
    };

   

    if (name.length < 2) {
        errordetail("errorname","Please enter a valid name.")
        return;
    }

    if (surname.length<2) {
        errordetail("errorsurname","Please enter a valid surname.")
        return;
    }


    if(contact.length<10 || contact.length>10){
        errordetail("errorcontact","Please enter a valid contact number")
        return;
    }

    if(acontact.length<10 || acontact.length>10){
        errordetail("erroralternative","Please enter a valid alternative contact number")
        return;
    }

    if(email.length<6){
        errordetail("erroremail","Please enter a valid email")
        return;
    }

    if(pincode.length<6 || pincode.length>6){
        errordetail("errorpincode","Please enter a valid pincode number")
        return;
    }

    if(city.length<3){
        errordetail("errorcity","Please enter a valid city name")
        return;
    }

    if(state.length<3){
        errordetail("errorstate","Please enter a valid state name")
        return;
    }

 if (!PasswordRegex.test(password)) {
   errordetail("errorpassword","Password must contain at least 8 characters, including uppercase letters, lowercase letters, numbers, and special characters.");
   return;
  
 }
  
   
    if (!usernameregex.test(username)) {
      errordetail("errorusername","Invalid username. It must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number.");
      return;
  }
  

    employee.push(detail);
    uimaker();
  });

  const errordetail=(id,msg)=>{
    let error = document.createElement("p");
    error.innerHTML = msg;
    
    document.getElementById(id).append(error);
    return; 
  }

  const getvalue = (id) => {
    return document.getElementById(id).value;
  };


  
 
  