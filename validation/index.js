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
    let td13=document.createElement("td");
    td13.innerHTML=ele.passwordtype;
    let btn = document.createElement("button");
    btn.addEventListener("click",()=>handledelete(i))
    btn.innerHTML = "delete";
    let tr = document.createElement("tr");
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11 , td12 , td13, btn);

    document.getElementById("tablebody").append(tr);
  });
}

document
  .getElementById("myForm")
  .addEventListener("input", function customer(e) {
    e.preventDefault();
    let name = getvalue("name");
    let surname = getvalue("surname");
    let contact = getvalue("mobile number");
    let acontact = getvalue("alternative number");
    let email = getvalue("email");
    let landmark = getvalue("landmark");
    let pincode = getvalue("pincode");
    let city = getvalue("city");
    let state = getvalue("state");
    let password = getvalue("password");
    let ad1 = getvalue("adress1");
    let ad2 = getvalue("adress2");
    let ad3 = getvalue("adress3");
    let address = {
      ad1,
      ad2,
      ad3,
    };
    let rpassword =getvalue("rpassword")
    let username=getvalue("username")
    let usernameregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,15}$/;
    let easypasswordregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,8}$/;
   let mediumPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/-]).{9,12}$/;
   let strongpasswordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/-]).{13,}$/;


    let passwordtype;
    let PasswordRegex;

    if (easypasswordregex.test(password)) {
        PasswordRegex = easypasswordregex;
        document.getElementById("password").setAttribute("class","passed")
        errordetail("errorpassword","Your password is Easy!!  .")
    } else if (mediumPasswordRegex.test(password)) {
        PasswordRegex = mediumPasswordRegex;
        document.getElementById("password").setAttribute("class","passed")
    } else if (strongpasswordRegex.test(password)) {
        PasswordRegex = strongpasswordRegex;
        document.getElementById("password").setAttribute("class","passed")
    } else {
        errordetail("errorpassword","Password must be at least 5 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
        document.getElementById("password").setAttribute("class","err")
        return false;
    }


    if (easypasswordregex.test(password)) {
      passwordtype = "Easy";  
  } else if (mediumPasswordRegex.test(password)) {
      passwordtype = "Medium"; 
  } else if (strongpasswordRegex.test(password)) {
      passwordtype = "Strong"; 
  } else {
       errordetail("errorpassword","Password must be at least 5 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
      return false;
  }
    

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
      passwordtype:passwordtype,
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
   errordetail("errorpassword","Password must contain at least 5 characters, including uppercase letters, lowercase letters, numbers, and special characters.");
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


  
 
  