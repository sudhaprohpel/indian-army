const {app, BrowserWindow} = require('electron')

// Enable live reload for Electron too
require('electron-reload')(__dirname, {
    // Note that the path to electron may vary according to the main file
    electron: require(`${__dirname}/node_modules/electron`)
});

const createWindow = () => {
    const win = new BrowserWindow({
        show: false
    })

    win.maximize()
    win.show()
    win.setMenu(null)
    win.loadFile('index.html')

    // opening dev tools in electron app
    win.openDevTools()
}

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })