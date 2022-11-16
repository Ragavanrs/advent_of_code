var fs=require('fs')
var ab=fs.readFileSync('js\\day2.txt','utf-8')
var arr=ab.split('\n')
var result=0
var cube=0
for(let i=0;i<arr.length;i++){
    var x=arr[i].split('x')
    for(let y=0;y<x.length;y++){
        x[y]=parseInt(x[y]);
    }
    val=x.sort(function(a, b){return a - b})
    
    var m=2*val[0]*val[1]+2*val[1]*val[2]+2*val[0]*val[2];
    var n=val[0]*val[1]
    var o=val[0]*val[1]*val[2];;
    var p=val[0]+val[0]+val[1]+val[1];;
    result+=m+n
    cube+=o+p;
}
console.log(result)
console.log(cube)