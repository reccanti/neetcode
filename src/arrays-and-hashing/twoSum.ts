// Initial solution: O(nlog(n)) time, I believe 
// - n to sort the list
// - log(n) to iterate through it while avoiding duplicates

// let's do this by sorting the array. This way,
// when we add the numbers together, they'll get
// progressively larger, and if the sum exceeds
// the target, we can exit early since it's only
// going to get larger
function twoSum(nums: number[], target: number): number[] {
    // we want to sort this array by value so we can reduce
    // the number of iterations, but we also want to preserve
    // the original indices. So to do this, we'll map the nums
    // into an object which holds both of these pieces of 
    // information. Then we'll sort by the value field.
    const sortedNums = nums.map((num, i) => ({ 
        value: num, originalIndex: i 
    })).sort((a, b) => a.value - b.value);

    // we'll start with 2 indices: i and j. "i" will go
    // from 0 to the second to last index in the array.
    // "j" will always be greater than "i", so we keep the
    // last index free so "j" can point to it.
    for (let i = 0; i < sortedNums.length - 1; i++) {
        // "j" in this case starts with the index after "i"
        // and will keep iterating until it reaches the end
        // of the list.
        for (let j = i + 1; j < sortedNums.length; j++) {

            // take the sum of the indices at "i" and "j". 
            // If they equal the target, return them
            const sum = sortedNums[i].value + sortedNums[j].value;
            if (sum === target) {
                return [sortedNums[i].originalIndex, sortedNums[j].originalIndex]
            }
        }
    }

    // each input should have exactly one solution, so reaching
    // this step should be impossible
    throw Error("Each input should have exactly one solution")
};

// 1 - pass hash method (complement lookup) O(n)

// this method works by constructing a hashmap of "complements"
// as we iterate through the list (a "complement" in this case
// being the number that, when added, creates the "target" value)

function twoSum(nums: number[], target: number): number[] {
    // create a "complements" lookup, where the key is a number
    // in the list, and the value is its index.
    const complements = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // find out what complement would be needed to reach
        // the target value.
        const complement = target - num;

        // see if we've recorded that number previously. If we have, 
        // return the current index, and the index of that complement.
        // I'm also sorting it so that we'll always have a consistent
        // order.
        if (complements.has(complement)) {
            return [i, complements.get(complement)].sort();
        } 
        
        // otherwise, add that number to the list in case it's helpful
        // in a future iteration of the loop.
        else {
            complements.set(num, i)
        }
    }
    throw Error("Each input should have exactly one solution")
}
