// From https://github.com/ganeshrvel/npm-electron-is-packaged
function find(name) {
  if (
    process.mainModule &&
    process.mainModule.filename.indexOf(name) !== -1
  ) {
    return true;
  } else if (process.argv.filter(a => a.indexOf(name) !== -1).length > 0) {
    return true;
  }
  return false;
}

module.exports = {
  isSnap:
    process.platform !== 'darwin'
    && process.platform !== 'win32'
    && find('app.asar')
    && find('snap/')
};
