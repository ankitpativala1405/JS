let count = 0;

const startcount = () => { 
     counter = setInterval(() => {
        count++;
        document.getElementById("countlimit").innerHTML = count;
    }, 50);
}

const stopcount=()=> {
    clearInterval(counter); 
}

const resetcount=()=>{
    document.getElementById("countlimit").innerHTML = "";
}