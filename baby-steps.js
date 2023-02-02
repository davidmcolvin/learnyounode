debugger;
let i = -1;
let sum = 0;
for(let x in process.argv){
    i++;
    if (i < 2) {
        continue;
    }
   sum += Number(process.argv[x]);
}
console.log(sum);
