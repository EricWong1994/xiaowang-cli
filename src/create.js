const axios = require('axios');
// 1).获取仓库列表
const fetchReopLists = async () => {
  // 获取当前组织中的所有仓库信息,这个仓库(https://github.com/lxy-cli)中存放的都是项目模板
  const { data } = await axios.get('https://api.github.com/orgs/lxy-cli/repos'); return data
};

module.exports = async (projectName) => {
  let repos = await fetchReopLists();
  repos = repos.map((item) => item.name);
  console.log(repos);
  console.log(`此处是文件${projectName}`);
};