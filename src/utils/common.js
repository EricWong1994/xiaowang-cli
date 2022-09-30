const ora = require('ora')
const axios = require('axios');

// 根据我们想要实现的功能配置执行动作，遍历产生对应的命令
const mapActions = {
  create: {
    alias: 'c', //别名
    description: '创建一个项目', // 描述
    examples: [ //用法
      'lee-cli create <project-name>'
    ]
  },
  config: { //配置文件
    alias: 'conf', //别名
    description: 'config project variable', // 描述
    examples: [ //用法
      'lee-cli config set <k> <v>',
      'lee-cli config get <k>'
    ]
  },
  '*': {
    alias: '', //别名
    description: 'command not found', // 描述
    examples: [] //用法
  }
}

// 封装loading效果
const fnLoadingByOra = (fn, message) => async (...argv) => {
  const spinner = ora(message);
  spinner.start();
  let result = await fn(...argv);
  spinner.succeed(); // 结束loading
  return result;
}//  获取仓库(repo)的版本号信息

const getTagLists = async (repo) => {
  const { data } = await axios.get(`https://api.github.com/repos/lxy-cli/${repo}/tags`);
  return data;
}

// 获取仓库列表
const fetchReopLists = async () => {
  // 获取当前组织中的所有仓库信息,这个仓库(https://github.com/lxy-cli)中存放的都是项目模板
  const { data } = await axios.get('https://api.github.com/orgs/lxy-cli/repos');
  return data;
};

module.exports = {
  mapActions,
  fnLoadingByOra,
  fetchReopLists,
  getTagLists
};