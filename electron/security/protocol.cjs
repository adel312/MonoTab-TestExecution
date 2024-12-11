const { protocol } = require('electron');

function setupSecureProtocol() {
  // Only allow https and http protocols
  protocol.registerSchemesAsPrivileged([
    { scheme: 'https', privileges: { standard: true, secure: true } },
    { scheme: 'http', privileges: { standard: true, secure: false } }
  ]);
}

module.exports = {
  setupSecureProtocol
};