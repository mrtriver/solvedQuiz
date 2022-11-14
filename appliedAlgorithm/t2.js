 const arr = [101.25, 78, 97, 1.123, 1859, 468, 322, 697.77, 5999.9]; 
 let target= 697.77;
// let index = 0;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] == target){
//         index = arr.lastIndexOf(target);
//         break;
//     }
// }
// console.log(index);

function arrTargetIndex(arr, target){
for(let i=0; i<arr.length; i++){
    if(arr[i] == target){
     let index = arr.indexOf(target);
       return arr+'/'+index;
    }
}
}

let result = arrTargetIndex(arr, target);
console.log(result);
