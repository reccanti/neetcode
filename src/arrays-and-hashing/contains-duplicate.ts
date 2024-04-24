function containsDuplicate(nums: number[]): boolean {
    const foundNums = new Set<number>();
    for (const n of nums) {
        // if we encounter a number we haven't seen before, 
        // add it to the list of "found numbers"
        if (!foundNums.has(n)) {
            foundNums.add(n);
        } 
        // if we _have_ found that number before, return true,
        // since the list contains a duplicate
        else {
            return true
        }
    }
    // if we've reached the end of the array, that means
    // we didn't find a duplicate and can return false
    return false;
};
