const path = require('path')
const { mapActions } = require('./utils/common.js');
const program = require('commander');
const { version } = require('./utils/constants');

// Object.keys()
Reflect.ownKeys(mapActions).forEach((action) => {
  program.command(action) //配置命令的名字
    .alias(mapActions[action].alias) // 命令的别名
    .description(mapActions[action].description) // 命令对应的描述
    .action(() => {  //动作
      if (action === '*') {  //访问不到对应的命令 就打印找不到命令
        console.log(mapActions[action].description);
      } else {
        console.log(action);
        // 分解命令 到文件里 有多少文件 就有多少配置 create config
        // xiaowang-cli create project-name ->[node,xiaowang-cli,create,project-name]
        console.log(process.argv);
        // create.js中代码在此引入执行
        require(path.join(__dirname, action))(...process.argv.slice(3));
      }
    })
});

// 监听用户的help事件
program.on('--help', () => {
  console.log('\nExamples:');
  Reflect.ownKeys(mapActions).forEach((action) => {
    mapActions[action].examples.forEach((example) => {
      console.log(` ${example}`);
    })
  })
})

program.version(version)
  .parse(process.argv); // process.argv就是用户在命令行中传入的参数

// // 监听用户的help事件【Warning: 这段代码不能放在这个位置，否则监听不到事件】
// program.on('--help', () => {
//   console.log('\nExamples:');
//   Reflect.ownKeys(mapActions).forEach((action) => {
//     mapActions[action].examples.forEach((example) => {
//       console.log(` ${example}`);
//     })
//   })
// })