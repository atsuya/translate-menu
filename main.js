'use strict'

const { app, BrowserWindow, clipboard, Menu, Tray } = require('electron')

const path = require('path')

let mainWindow
let tray

/**
 * Entry point.
 */
function createWindow() {
  const iconPath = path.resolve(__dirname, './tray-icon.png')
  console.log(`icon path: ${iconPath}`)

  mainWindow = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: { sandbox: true },
    icon: iconPath,
  })
  //mainWindow.loadFile('index.html')
  const dictionaryUrl =
      `https://dictionary.goo.ne.jp/srch/en/${clipboard.readText()}/m0u/`
  console.log(`url: ${dictionaryUrl}`)
  mainWindow.loadURL(dictionaryUrl)
  // https://dictionary.goo.ne.jp/srch/en/know/m0u/

  console.log(`from clipboard: ${clipboard.readText()}`)

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  // add tray
  tray = new Tray(iconPath)
  //const contextMenu = Menu.buildFromTemplate([
  //  { label: 'Item1', type: 'radio' },
  //  { label: 'Item2', type: 'radio' },
  //  { label: 'Item3', type: 'radio', checked: true },
  //  { label: 'Item4', type: 'radio' },
  //])
  tray.setToolTip('This is my application.')
  tray.on('click', () => {
    console.log('tray clicked: click')
  })
  tray.on('clicked', () => {
    console.log('tray clicked: clicked')
  })
  //tray.setContextMenu(contextMenu)
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
