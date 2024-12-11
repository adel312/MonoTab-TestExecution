const { screen } = require('electron');

function getWindowOptions() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  
  return {
    width,
    height,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    fullscreen: true,
    kiosk: true,
    autoHideMenuBar: true,
  };
}

module.exports = {
  getWindowOptions
};