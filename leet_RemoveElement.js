var removeElement = function(nums, val) {
    //Go through the array and delete occurences of that value
    for(var i = 0; i < nums.length; i++){
        if(nums[i] === val){
            nums.splice(i,1);
            i--;
        }  
    };
    //Return the new length
    return {"Array": nums,
    "Length": nums.length
};

}
const arr = [1,2,3,4,5,5,4,3,4,6,7];
let num = 1;

console.log(removeElement(arr, num));