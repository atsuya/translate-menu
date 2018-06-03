'use strict'

const assert = require('assert')

const WordExtractor = require('../word-extractor')

describe('WordExtractor', () => {
  let wordExtractor

  beforeEach(() => {
    wordExtractor = new WordExtractor()
  })

  afterEach(() => {
    wordExtractor = null
  })

  it('trims white spaces', () => {
    const text = ' test  '
    assert.strictEqual(wordExtractor.extract(text), 'test')
  })

  it('returns the first word given a sentence', () => {
    const text = 'cats are very cute'
    assert.strictEqual(wordExtractor.extract(text), 'cats')
  })

  it('returns the first word given multi-lined text', () => {
    const text = 'dogs are very friendly, \nand they are kind'
    assert.strictEqual(wordExtractor.extract(text), 'dogs')
  })

  it('returns empty string for empty string', () => {
    const text = ''
    assert.strictEqual(wordExtractor.extract(text), '')
  })

  it('returns empty string for null', () => {
    const text = null
    assert.strictEqual(wordExtractor.extract(text), '')
  })

  it('returns empty string for undefined', () => {
    const text = undefined
    assert.strictEqual(wordExtractor.extract(text), '')
  })
})
