function longestPalindromicSq(str) {

    if (str.length < 1 || str === null) return ''

    let longest = '';

    for (let i = 0; i < str.length; i++) {

        // center is one character
        let oddPalindrome = expandFromCenter(str, i, i);

        // center is two characters
        let evenPalindrome = expandfromCenter(str, i - 1, i);

        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }

        if (evenPalindrome > longest.length) {
            longest = evenPalindrome;
        }

        return longest;
    }
    // palindromes mirror around its center
    // 2 cases 'center'

    // even amount of characters
    // a b b a
    // move down by one and move up by one

    // odd amount of characers 
    // aba

}

// a a b b a a

function expandFromCenter(str, left, right) {
    let i = 0;
    while (str[left-i] && str[left-1] === str[right + i]) {
        i++;
    } 
    i--;

    return str.slice(left-i, right + i + 1);

}

console.log(longestPalindromicSq("abba"))

