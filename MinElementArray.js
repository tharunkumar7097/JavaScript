var arr=[9,34,2,4,6,7,0.1,3,1];
min=arr[0]
for(var i=1;i<arr.length;i++){
    if(arr[i]<min)
    min=arr[i]
}
console.log(min)