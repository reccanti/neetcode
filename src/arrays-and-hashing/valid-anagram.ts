function isAnagram(s: string, t: string): boolean {
    // first things first, if s and t are of different lengths, return false,
    // since they can't be anagrams otherwise
    if (s.length !== t.length) {
        return false;
    }
    const sMap = new Map<string, number>();

    // first, iterate through s and add each character to the map,
    // updating the count each time
    for (const char of s) {
        if (!sMap.has(char)) {
            sMap.set(char, 1)
        } else {
            const count = sMap.get(char);
            sMap.set(char, count + 1);
        }
    }

    // next, iterate through t, lowering the count each time
    // a letter we've found is encountered
    for (const char of t) {
        // if we encounter a character in t that isn't in s,
        // the strings aren't anagrams and we can exit early
        // by returning false
        if (!sMap.has(char)) {
            return false
        }
        // otherwise, lower the count. If the count reaches 0,
        // delete the entry from the map
        const count = sMap.get(char) as number; // we can cast here because of the previous sMap.has check above
        if (count - 1 === 0) {
            sMap.delete(char);
        } else {
            sMap.set(char, count - 1)
        }
    } 

    // if we haven't already exited early, if the size of the map
    // is equal to 0, then that means all characters between the
    // two strings are the same and we can return true. Otherwise,
    // return false
    return sMap.size === 0;
};
