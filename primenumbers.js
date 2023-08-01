var start=prompt("enter a number greater than one ");
var end=prompt("enter the last number");
for(var i=start;i<end;i++){
     var flag=0;
    for (var j=2;j<i;j++){
        if (i%j==0){
            flag=1;
            break;

        }
    }
    if(flag!=1)
        console.log(i);
        
}