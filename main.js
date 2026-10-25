const { app, BrowserWindow, ipcMain, nativeTheme } = require("electron");
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    // width: 292,
    // height: 430,
    width: 1000,
    height: 800,
    // resizable: false,
    // maximizable: false,
    // fullscreenable: false,
    //frame: false, 
    //transparent: true,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile("index.html");
}

ipcMain.handle('dark-mode:toggle', () => {
  if (nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = 'light'
  } else {
    nativeTheme.themeSource = 'dark'
  }
  return nativeTheme.shouldUseDarkColors
})

ipcMain.handle('dark-mode:system', () => {
  nativeTheme.themeSource = 'system'
})

//app.whenReady().then(createWindow);
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});