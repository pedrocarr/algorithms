const bubbleSort = (nums) => {
    let swapped;
    let len = nums.length;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (nums[i] > nums[i + 1]) {
                const temp = nums[i];
                nums[i] = nums[i + 1];
                temp = nums[i + 1];
                swapped = true;
            }
        }
    } while (swapped)
    console.log(nums);
    return nums;
}
