const { app } = require('electron');
const { createMainWindow } = require('./windows/main-window.cjs');
const { initializeSecurity } = require('./security/index.cjs');
const { setupProtocols } = require('./protocols/index.cjs');

// Handle creating/removing shortcuts on Windows when installing/uninstalling
if (require('electron-squirrel-startup')) {
  app.quit();
}

app.whenReady().then(() => {
  setupProtocols();
  const mainWindow = createMainWindow();
  initializeSecurity(mainWindow);

  app.on('activate', () => {
    if (!mainWindow.isDestroyed()) {
      mainWindow.show();
    } else {
      createMainWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});