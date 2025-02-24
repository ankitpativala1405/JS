let students = [];

const uimaker = () => {
  students.map((ele) => {
    let td1 = document.createElement("td");
    td1.innerHTML = ele.name;
    let td2 = document.createElement("td");
    td2.innerHTML = ele.email;
    let td3 = document.createElement("td");
    td3.innerHTML = ele.number;
    let td4 = document.createElement("td");
    td4.innerHTML = ele.course;
    let td5 = document.createElement("td");
    td5.innerHTML = ele.fee;
    let tr = document.createElement("tr");
    tr.append(td1, td2, td3, td4, td5);
    document.getElementById("tablebody").append(tr);
  });
};

document.getElementById("student").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let course = document.getElementById("course").value;
  let fee = document.getElementById("fee").value;

  let student = {
    name: name,
    email: email,
    number: number,
    course: course,
    fee: fee,
  };
  students.push(student);
  uimaker();
});
