'use strict'

/**
 * WordExtractor extracts a word to be translated given a text.
 */
class WordExtractor {
  /**
   */
  constructor() {
  }

  /**
   * Extracts a word.
   * @param {string} text Text to extract a word from.
   * @return {string} A word extracted.
   */
  extract(text = '') {
    if (text === '' || text === null) {
      return ''
    }

    // prevent from processing a very long string by truncating first
    if (text.length > 100) {
      text = text.substr(0, 100)
    }

    const trimmed = text.trim()
    const segments = trimmed.split(/\s/)

    return segments[0]
  }
}

module.exports = WordExtractor
