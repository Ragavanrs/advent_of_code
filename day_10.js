var  val="3113322113"
var func= function(i){
var word=''
for(var j=0;j<i.length;j++){
    var x=1;
    while(true){
        if(i[j]!=i[j+1]){
            break;
        }
        x++;
        j++;
    }
    word+=x+i[j]
}
return word;
}
for (var y=0;y<40;y++){
    val=func(val);
    
}
console.log(val.length)