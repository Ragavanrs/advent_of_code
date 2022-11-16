const fs = require('fs');
const inp = fs.readFileSync('js\\day3.txt', 'utf-8').split('');
var santa=inp.filter((item, index) => index % 2 === 0);
var robosanta=inp.filter((item, index) => index % 2 === 1);

console.log(santa)



var display=function(test){
    var list1=[]

    var x=0,y=0
    console.log(x,y)
    for (var i=0;i<inp.length;i++){
    
      let newCoords = {x: 0, y: 0};
    
      if (inp[i] == '^')  y++;
      if (inp[i] == 'v')  y--;
      if (inp[i] == '>')  x++;
      if (inp[i] == '<')  x--;
      var st=x+'x'+y;
      
      if(list1.indexOf(st) ==-1)
      {
        list1.push(st)
      }
      
    }
    console.log(list1)
return list1
}
var disp=display(santa)
list1=[]
var disp1=display(robosanta)

for(var i=0;i<disp.length;i++){
    if(disp1.indexOf(disp[i])==-1){
        disp1.push(disp[i])
    }
}

console.log(disp1.length)



