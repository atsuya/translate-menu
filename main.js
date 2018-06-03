'use strict'

const { app, BrowserWindow, clipboard } = require('electron')

const path = require('path')

const ClipboardReader = require('./clipboard-reader')
const Translator = require('./translator')

let mainWindow = null
const clipboardReader = new ClipboardReader()
const translator = new Translator()

/**
 * Creates a window.
 */
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 600,
    center: true,
    webPreferences: { sandbox: true },
  })
  mainWindow.setMenu(null)

  const word = clipboardReader.read()
  console.log(`translating: ${word}`)
  if (word === '') {
    mainWindow.loadFile('no-text.html')
  } else {
    const translationPageUrl = translator.translationPageUrl(word)
    mainWindow.loadURL(translationPageUrl)
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
