const program = require('commander');
const { version } = require('./utils/constants');
program.version(version)
  .parse(process.argv); // process.argv就是用户在命令行中传入的参数