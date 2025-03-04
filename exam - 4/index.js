let count = 0;
let counter;

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
    stopcount()
    count = 0;
    document.getElementById("countlimit").innerHTML = count;

}
