// Use this file as a scratch pad to complete the problem at
// https://leetcode.com/problems/kth-largest-element-in-an-array/

// Find the kth largest element in an unsorted array. Note that it is the kth
// largest element in the sorted order, not the kth distinct element.


var findKthLargest = function(nums, k) {
    // nums.sort((a, b) => a - b);
    // return nums[nums.length - k];

    let switched = false;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[i + 1]) {
            [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
            switched = true;
            if (switched === true) return findKthLargest(nums, k)
        }
    }
    return nums[nums.length - k]
};

num = [3, 2, 1, 5, 6, 4]
k = 2

console.log(findKthLargest(num, k))