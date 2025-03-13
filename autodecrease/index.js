document.getElementById("button").addEventListener("click", () => {
    let storedCount = localStorage.getItem("counter");
    let count = storedCount !== null ?   Number(storedCount):Number(document.getElementById("number").value);


   counterInterval = setInterval(() => {
        document.getElementById("counter").innerHTML = count;
        localStorage.setItem("counter", count);
        count--;

        if (count < 0) {  
            clearInterval(counterInterval);
            localStorage.removeItem("counter"); 
        }
    }, 50); 
});
