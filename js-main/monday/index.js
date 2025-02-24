function unit() {
   let a= document.getElementById("number").value

if(a<=50)
 document.getElementById("result").innerHTML=a*5+100
else if(a>50&&a<=100)
    document.getElementById("result").innerHTML=(a-50)*10+350
 else if(a>100&&a<=150)
    document.getElementById("result").innerHTML=(a-100)*15+850
 else
 document.getElementById("result").innerHTML=(a-150)*20+1600

}
