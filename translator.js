'use strict'

/**
 * Translator class translates a given word from English to Japanese.
 */
class Translator {
  /**
   */
  constructor() {
  }

  /**
   * Returns a URL that points to a page that offers translation.
   * @param {string} word Word to translate.
   * @return {string} URL that points to a page that offers translation for the
   *     given word.
   */
  translationPageUrl(word) {
    return `https://dictionary.goo.ne.jp/srch/en/${word}/m0u/`
  }
}

module.exports = Translator
