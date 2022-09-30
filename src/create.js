const inquirer = require('inquirer')
const { fnLoadingByOra, fetchReopLists, getTagLists, downDir, copyTempToLoclhost } = require('./utils/common');


// 输入xiaowang-cli c my则projectName为my
module.exports = async (projectName) => {
  let repos = await fnLoadingByOra(fetchReopLists, '正在链接你的仓库...')();
  repos = repos.map((item) => item.name);
  // 使用inquirer 在命令行中可以交互
  const { repo } = await inquirer.prompt([
    {
      type: 'list',
      name: 'repo',
      message: '请选择一个你要创建的项目',
      choices: repos
    }
  ]);
  let tags = await fnLoadingByOra(getTagLists, `正在链接你的选择的仓库${repo}的版本号...`)(repo);
  tags = tags.map((item) => item.name);
  // console.log(`仓库 ${repo}的版本信息列表：${tags}`);

  const { tag } = await inquirer.prompt([{
    type: 'list',
    name: 'tag',
    message: '请选择一个该项目的版本下载',
    choices: tags
  }]);
  console.log(`我现在选择了哪个仓库: ${repo}`);
  console.log(`我现在选择了哪个版本: ${tag}`);
  const target = await fnLoadingByOra(downDir, '下载项目中...')(repo, tag);
  // target:  /Users/用户名/.myTemplate/vue-tempalte projectName为my
  copyTempToLoclhost(target, projectName);
}
