function setupKeyboardSecurity(webContents) {
  webContents.on('before-input-event', (event, input) => {
    if ((input.control || input.alt || input.meta) && input.key.toLowerCase() !== 'v') {
      event.preventDefault();
    }
  });
}

module.exports = {
  setupKeyboardSecurity
};