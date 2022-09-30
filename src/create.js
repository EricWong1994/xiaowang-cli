const axios = require('axios');
const inquirer = require('inquirer')

// 1).获取仓库列表
const fetchReopLists = async () => {
  // 获取当前组织中的所有仓库信息,这个仓库(https://github.com/lxy-cli)中存放的都是项目模板
  const { data } = await axios.get('https://api.github.com/orgs/lxy-cli/repos');
  return data;
};

module.exports = async (projectName) => {
  let repos = await fetchReopLists();
  repos = repos.map((item) => item.name);
  console.log(repos);
  console.log(`此处是文件${projectName}`);
  inquirer.prompt([
    {
      type: 'list',
      name: 'repo',
      message: '请选择一个你要创建的项目',
      choices: repos
    }
  ]).then((answers) => {
    console.log('结果为:')
    console.log(answers)
  })
};

