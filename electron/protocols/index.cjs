const { protocol } = require('electron');

function setupProtocols() {
  // Register secure file protocol
  protocol.registerFileProtocol('file', (request, callback) => {
    const pathname = decodeURI(request.url.replace('file:///', ''));
    callback(pathname);
  });

  // Register privileged schemes
  protocol.registerSchemesAsPrivileged([
    { scheme: 'https', privileges: { standard: true, secure: true } },
    { scheme: 'http', privileges: { standard: true, secure: false } }
  ]);
}

module.exports = {
  setupProtocols
};