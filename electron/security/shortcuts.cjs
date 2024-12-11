const { globalShortcut } = require('electron');

function registerSecurityShortcuts() {
  // Prevent alt+tab
  globalShortcut.register('Alt+Tab', () => {
    return false;
  });

  // Prevent task manager and other system shortcuts
  const shortcuts = [
    'CommandOrControl+Shift+Esc',
    'CommandOrControl+Alt+Delete',
    'F11',
    'Alt+F4'
  ];

  shortcuts.forEach(shortcut => {
    globalShortcut.register(shortcut, () => {
      return false;
    });
  });
}

function unregisterSecurityShortcuts() {
  globalShortcut.unregisterAll();
}

module.exports = {
  registerSecurityShortcuts,
  unregisterSecurityShortcuts
};