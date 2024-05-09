// A thing this made me think about is how 
// while loops can somewhat represent a
// Finite State Machine. This Stackoverflow
// answer defines some methods in a FSA that
// might be useful, namely (OnEnter, OnExit, and Do).
//
// https://stackoverflow.com/a/35474198
//
// This might help break down future implementations

class Solution {
    constructor() {
        this.DELIMETER = "+"
    }
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let buffer = ""
        for (const str of strs) {
            const len = str.length;
            buffer += `${len}${this.DELIMETER}`;
            for (const char of str) {
                buffer += char;
            }
        }
        return buffer;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // decoding has 2 modes:
        //
        // 1. identify length of the word
        // 2. write substring
        //
        // There might be some better way to
        // format this as a state machine, but
        // I'm going to kind of just do it by
        // hand right now.
        const decoded = [];
        let i = 0;
        while (i < str.length) {
            // identify the length of the string
            let curChar = str[i];
            let lengthBuffer = "";
            do {
                lengthBuffer += curChar;
                i++;
                curChar = str[i];
            } while (curChar !== this.DELIMETER);
            i++; // skip the delimeter
            const length = parseInt(lengthBuffer);

            // write the substring of a given length
            let stringBuffer = ""
            let j = 0;
            while (j < length) {
                let curChar = str[i];
                stringBuffer += curChar;
                i++;
                j++;
            }
            decoded.push(stringBuffer);
        }

        return decoded;
    }
}
