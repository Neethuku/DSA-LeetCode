const input = [3,10,7,2]
const targetNo = 5

function twoSum(nums,target){
    for(let i=0; i<nums.length; i++){
        for(j=i+1; j<nums.length; j++){
            if(nums[j] === target-nums[i]){
                return[i,j]
            }
        }
    }
    return[];
}
console.log('sum',twoSum(input,targetNo));

