var floor=0
const fs=require('fs')
var ab=fs.readFileSync('js\\open.txt','utf-8')
var flag=true
for (let i=0;i<ab.length;i++){

    if(ab[i]=='('){
        floor++;
    }else if(ab[i]==')'){
        floor--;
    }

    if(floor==-1 && flag){
        console.log("first position to reach floor -1 is : "+(i+1))
        flag=!flag
    }
}
console.log("floor number : "+ floor)
