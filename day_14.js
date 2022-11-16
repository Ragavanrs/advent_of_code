const fs = require('fs');
const INPUT = fs.readFileSync('js\\day14.txt', 'utf-8').split('\n');
var regex=/\d+/g;
var max_distance=0,TIME=2503;
for(var i=0;i<INPUT.length;i++){
var arr=INPUT[i].match(regex).map(Number);
console.log(arr)
var speed=arr[0];
var time=arr[1];
var rest=arr[2];
TIME=2053;
var result=0
while(TIME>0){
if(TIME<time){
    result+=(TIME*speed)
}else{
    result+=(time*speed)
}
TIME=TIME-time-rest;
}

console.log(result)
if(result>max_distance){
    max_distance=result
}

}

console.log("ans",max_distance)
