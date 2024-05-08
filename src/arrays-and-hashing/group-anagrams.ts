// I believe this solution should be O(m * n), as opposed
// to the "naive" solution, which is O(m * n * logN) since
// it has to sort the array first. However, I noticed in
// LeetCode that it seems to run slower. Not sure why this is.
// It might just be that the compiler is better at optimizing
// this sort of operation? I'm doing a lot of array and string
// creation with this method, which might make more overhead?

const A_CHAR_CODE = "a".charCodeAt(0);

// this creates an array of 26 entries where each
// index corresponds to a character between ASCII
// "a" and ASCII "z".
function createCharLog() {
    return Array.from({ length: 26 }, () => 0);
}

// given a character, update the count of that character
// at the appropriate index (a = 0, b = 1, ...)
function logChar(arr, char) {
    const index = char.charCodeAt(0) - A_CHAR_CODE;
    arr[index]++;
}

function createAnagramKey(arr) {
    return arr.join(":")
}


function groupAnagrams(strs: string[]): string[][] {
    const anagrams: Record<string, string[]> = {};
    // const anagrams = new Map<string, string[]>()
    for (const str of strs) {
        const charLog = createCharLog();
        for (const char of str) {
            logChar(charLog, char);
        }
        const key = createAnagramKey(charLog);
        if (!anagrams[key]) {
            anagrams[key] = [];
        }
        anagrams[key].push(str);
        // if (!anagrams.has(key)) {
        //     anagrams.set(key, []);
        // }
        // const anagramsForChars = anagrams.get(key);
        // anagramsForChars.push(str);
        // anagrams.set(key, anagramsForChars);
    }
    return Object.values(anagrams);

    // return [...anagrams.values()]
};

// naive solution

// function groupAnagrams(strs: string[]): string[][] {
//     // this will hold and group anagrams. The "key" will
//     // be the letters in the anagram lexically ordered, which
//     // will be the same no matter what the actual word is.
//     // the value will be an array of each word.
//     const anagrams = new Map<string, string[]>()
//     for (const str of strs) {
//         // create a lexically-ordered version of the string by:
//         // 1. splitting it into an array
//         // 2. sorting it using localeCompare
//         // 3. rejoining it
//         const orderedStr = str.split("").sort((a, b) => a.localeCompare(b)).join("");
//         if (!anagrams.has(orderedStr)) {
//             anagrams.set(orderedStr, [])
//         };
//         const anagramsForStr = anagrams.get(orderedStr);
//         anagramsForStr.push(str);
//         anagrams.set(orderedStr, anagramsForStr);
//     }
//     return [...anagrams.values()]
// };
