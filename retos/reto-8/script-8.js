function checkPart(part) {
    for (let i = 0; i <= part.length; i++) {
        let palindromo = ''

        let newPalindrome = part.replace(part.charAt(i), '')

        for (let i = newPalindrome.length; i >= 0; i--) {
            palindromo += newPalindrome.charAt(i);
        }

        if (palindromo == newPalindrome) return true
    }

    return false
}

module.exports = checkPart