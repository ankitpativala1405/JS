let a=[2,3,4,5,6,9,10,3]
let n=a.length

let b=a[0]
for ( let i=0; i<n-1; i++) {
    if (a[i] > b) {
        b = a[i]
    }
}
console.log(b);
