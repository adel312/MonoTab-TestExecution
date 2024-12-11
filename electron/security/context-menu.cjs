function disableContextMenu(window) {
  window.webContents.on('context-menu', (e) => {
    e.preventDefault();
  });
}

module.exports = {
  disableContextMenu
};