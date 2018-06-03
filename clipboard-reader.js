'use strict'

const { clipboard } = require('electron')

const WordExtractor = require('./word-extractor')

/**
 * ClipboardReader represents itself as a layer that provides access to
 * clipboard.
 */
class ClipboardReader {
  /**
   */
  constructor() {
    this.wordExtractor = new WordExtractor()
  }

  /**
   * Reads a text from clipboard and returns it in an appropriate form.
   * @return {string} A formatted text from clipboard.
   */
  read() {
    const text = this.readFromClipboard()
    return this.wordExtractor.extract(text)
  }

  /**
   * Reads a raw text from clipboard.
   * @return {string} Text from clipboard.
   */
  readFromClipboard() {
    return clipboard.readText()
  }
}

module.exports = ClipboardReader
