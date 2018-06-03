'use strict'

const { clipboard } = require('electron')

class ClipboardReader {
  constructor() {
  }

  /**
   * Reads a text from clipboard and returns it in an appropriate form.
   * @return {string} A formatted text from clipboard.
   */
  read() {
  }

  /**
   * Reads a raw text from clipboard.
   */
  readFromClipboard() {
    return clipboard.readText()
  }
}

module.exports = ClipboardReader
