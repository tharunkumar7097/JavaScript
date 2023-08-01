var arr=[2,4,99,287,35,12,342,9,4,5,57]
max=arr[0];
for(j=1;j<arr.length;j++){
    if(arr[j] > max)
    max=arr[j];
}
console.log(max)