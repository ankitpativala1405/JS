detail = [];

function dltall() {
  document.getElementById("tablebody").innerHTML = "";
}

function uimaker() {
  let tableBody = document.getElementById("tablebody");
  tableBody.innerHTML = "";

  detail.map((ele, i) => {
    let td1 = document.createElement("td");
    td1.innerHTML = ele.name;
    let td2 = document.createElement("td");
    td2.innerHTML = ele.number;
    let td3 = document.createElement("td");
    td3.innerHTML = ele.email;
    let td4 = document.createElement("td");
    td4.innerHTML = ele.course;
    let td5 = document.createElement("td");
    td5.innerHTML = ele.experience;
    let td6 = document.createElement("td");
    td6.innerHTML = ele.experiencelevel;
    let td7 = document.createElement("td");
    td7.innerHTML = ele.salary;
    let img = document.createElement("img");
    img.src = ele.image;
    let td8=document.createElement("td")
    td8.append(img)

    let btn = document.createElement("button");
    btn.addEventListener("click", function dlt(index){
      detail.splice(index, 1);
      uimaker();
    });
    btn.innerHTML = "delete";
    let tr = document.createElement("tr");
    tr.append(td1, td2, td3, td4, td5, td6, td7,td8, btn);

    document.getElementById("tablebody").append(tr);
  });
}

document
  .getElementById("myform")
  .addEventListener("submit", function customer(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;
    let experience = document.getElementById("experience").value;
    let salary = document.getElementById("salary").value;
    let image = document.getElementById("image").value;


    if (experience <= 3) {
      experiencelevel = "junior";
    } else if (experience > 3 && experience <= 5) {
      experiencelevel = "mid";
    } else {
      experiencelevel = "senior";
    }
    


    let studentdetail = {
      name: name,
      number: number,
      email: email,
      course: course,
      experience: experience,
      salary: salary,
      image:image,
      experiencelevel:experiencelevel
    };

    detail.push(studentdetail);
    uimaker();
  });
