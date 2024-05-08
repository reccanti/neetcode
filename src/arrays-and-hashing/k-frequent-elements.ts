// this method works similarly to the below method except
// instead of sorting the entries by count and slicing,
// we then iterate through the list, placing the items in
// buckets based on the frequency. Then, we iterate through
// the buckets and return the last "k" elements.
function topKFrequent(nums: number[], k: number): number[] {
    // first, count the number of each entry
    const countMap = new Map<number, number>();
    for (const num of nums) {
        if (!countMap.has(num)) {
            countMap.set(num, 0);
        }
        const curCount = countMap.get(num);
        countMap.set(num, curCount + 1);
    }

    // then, put each number in a bucket based on the number of occurrences
    // in reverse order.
    const frequency = Array.from({ length: nums.length }, () => ([]));
    for (const [num, count] of countMap.entries()) {
        const index = nums.length - count;
        frequency[index].push(num)
    }

    const kFrequentElements: number[] = []
    for (const items of frequency) {
        for (const num of items) {
            kFrequentElements.push(num)
            if (kFrequentElements.length === k) {
                return kFrequentElements;
            }
        }
    }
};

// this method:
// 1. counts each element in the array and stores its value in a map
// 2. spreads that out into an array and sorts it by the count, then
// 3. slices out the top k elements and returns that array
// 
// the sort method has a O(logN) runtime, so we might be able to store
// this more efficiently using a bucket sort.

// function topKFrequent(nums: number[], k: number): number[] {
//     const countMap = new Map<number, number>();
//     for (const num of nums) {
//         if (!countMap.has(num)) {
//             countMap.set(num, 0);
//         }
//         const curCount = countMap.get(num);
//         countMap.set(num, curCount + 1);
//     }
//     const sortedEntries = [...countMap.entries()].sort(([_a, aCount], [_b, bCount]) => bCount - aCount).map(([num]) => num);
//     const kFrequentElements = sortedEntries.slice(0, k);
//     return kFrequentElements;
// };
