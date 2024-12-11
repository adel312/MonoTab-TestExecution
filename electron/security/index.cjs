const { registerSecurityShortcuts, unregisterSecurityShortcuts } = require('./shortcuts.cjs');
const { setupSecureProtocol } = require('./protocol.cjs');
const { setupKeyboardSecurity } = require('./keyboard.cjs');

function initializeSecurity(window) {
  setupSecureProtocol();
  registerSecurityShortcuts();
  setupKeyboardSecurity(window.webContents);

  window.on('closed', () => {
    unregisterSecurityShortcuts();
  });
}

module.exports = {
  initializeSecurity
};