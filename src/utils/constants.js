const { name, version } = require('../../package.json');
// 列举node运行的操作系统的环境: 内核相关的信息
const downloadDirectory = `${process.env[process.platform === 'darwin' ? 'HOME' : 'USERPROFILE']}/.myTemplate`;
console.log(downloadDirectory);

module.exports = {
  name,
  version,
  downloadDirectory
};

