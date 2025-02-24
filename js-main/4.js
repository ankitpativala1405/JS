let n=6
if(n%2==0){
    console.log("even")}
    else{
    console.log("odd")}

    let evensum=0
    let oddsum=0

    for(let i=1; i<=n; i++){
        if(i%2==0){
            evensum+=i
        }
        else{
            oddsum+=i
        }
    }
    console.log("Sum of even numbers: ", evensum);
    console.log("Sum of odd numbers: ", oddsum);

    if(evensum>=oddsum){
        console.log("even is greater")}
        else{
        console.log("odd is greater")}
        