class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }

  static titleize(string) {
    const excludeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const splitString = string.split(" ")
    for (const word of splitString) {
      cap(word)
    }
    console.log(splitString)
    return splitString.join(" ")
  }
}

function cap (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// excludeWords.includes(word) ? word : cap(word)