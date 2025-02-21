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
    let btn = document.createElement("button");
    btn.addEventListener("click",()=>handledelete(i))
    btn.innerHTML = "delete";
    let tr = document.createElement("tr");
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11, btn);

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

    if (password !== rpassword || contact === acontact) {
      alert(
        `You must have made two mistakes either one of them        1.your contact number and alternative contact number does matched here. please type diffrent number      2.your Passwords and retype password do not match.please type same password.          Please check and make sure than after try again.`
      );
      return 0;
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
    };

    employee.push(detail);
    uimaker();
  });
