// this method works by iterating through the loop twice, once
// forward and once backward:
//
// - when we iterate through the list forward, we keep a running
//   product of all elements going forward and add that to
//   a results list
// - when we iterate through the list backward, keep a running
//   product of all the elements going backward and multiply 
//   the product at the index by that product.
//
// this will give us the product except the self and we won't
// have to calculate anything more than we need!

function productExceptSelf(nums: number[]): number[] {
    const results = [];

    let productBeforeNum = 1;
    for (let i = 0; i < nums.length; i++) {
        results.push(productBeforeNum);
        productBeforeNum *= nums[i]
    }

    let productAfterNum = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        results[i] *= productAfterNum;
        productAfterNum *= nums[i]
    }

    return results
}

// this method works by first finding out the product of multiplying
// every item in the array, then goes back and divides that product by
// whatever the current number is. Doing so will give you the product
// except self.
//
// there are two cases that complicate this: if there's 1 zero and if there's
// multiple zeroes, since we can't divide by zero.
// - if there's 1 zero, everything will be 0 except at the index of that zero
// - if there's multiple zeroes, everything will be zero
// function productExceptSelf(nums: number[]): number[] {
//     const zeroCount = nums.reduce((acc, num) => {
//         if (num === 0) {
//             acc++
//         }
//         return acc;
//     }, 0);

//     // if there's multiple zeroes, return an array of zeroes,
//     // since even if we remove a zero at one index, there will
//     // be at least one other at another index
//     if (zeroCount > 1) {
//         return Array.from({ length: nums.length }, () => 0)
//     }

//     // if there's 1 zero, everything will be a zero except at the
//     // index the zero is located at. To figure this one out, we'll
//     // keep track of the product without zeroes and place it at
//     // that index
//     if (zeroCount === 1) {
//         const productWithoutZeroes = nums.reduce((acc, num) => {
//             if (num !== 0) {
//                 acc *= num
//             }
//             return acc;
//         }, 1)
//         return nums.map(num => num === 0 ? productWithoutZeroes : 0);
//     }

//     // if there are no zeroes, we can just get the total product, then
//     // divide it by each element in the num array to get our product
//     // except self array
//     const totalProduct = nums.reduce((acc, num) => acc * num, 1);
//     return nums.map(num => totalProduct / num);
// }

// This solution is O(n^2) (products has the same length as nums).
// Another way might be to iterate through the nums array and create
// a nested "factors" array, then reduce that down into products, but
// I don't think that's faster. This at least minimizes space complexity

// function productExceptSelf(nums: number[]): number[] {
//     // initialize an array where each element is "1"
//     const products = Array.from({ length: nums.length }, () => 1);

//     // iterate through the number array. For each element in our
//     // product array, multiply it by the current number UNLESS
//     // that number is at the current index
//     nums.forEach((num, i) => {
//         for (let j = 0; j < products.length; j++) {
//             if (j !== i) {
//                 products[j] *= num
//             }
//         }
//     })

//     return products
// };
