- **commander ：参数解析 --help其实就借助了他~ 解析用户输入的命令**
- **inquirer ：交互式命令行工具，有他就可以实现命令行的选择功能**
- **download-git-repo ：拉取GitHub上的文件**
- **chalk ：帮我们在控制台中画出各种各样的颜色**
- **ora：小图标 （loading、succeed、warn等）**
- **metalsmith ：读取所有文件，实现模板渲染**
- **consolidate ：统一模板引擎 包括了常用的jade和ejs**
- **ncp ：实现文件的拷贝功能**

1）关于：process.argv ：想了解更多可以看相关链接：nodejs.cn/api/process…process.argv 属性返回一个数组，
这个数组包含了启动Node.js进程时的命令行参数，
其中： 
数组的第一个元素process.argv[0] ——  返回启动Node.js进程的可执行文件所在的绝对路径 
第二个元素process.argv[1] ——  为当前执行的JavaScript文件路径 剩余的元素为其他命令行参数

➜  xiaowang-cli git:(master) ✗ xiaowang-cli create my
create
[
  '/Users/你的用户名/.nvm/versions/node/v16.4.1/bin/node',
  '/Users/你的用户名/.nvm/versions/node/v16.4.1/bin/xiaowang-cli',
  'create',
  'my'
]

inquirer 最新版本不支持cjs

```js
inquirer.prompt([
    {
      type: 'confirm',
      name: 'test',
      message: '你确定使用这个吗?',
      default: true
    }
  ]).then((answers) => {
    console.log('结果为:')
    console.log(answers)
  })
```

```ts
{
   // 表示提问的类型，下文会单独解释
  type: String, 
  // 在最后获取到的answers回答对象中，作为当前这个问题的键
  name: String, 
  // 打印出来的问题标题，如果为函数的话
  message: String|Function, 
  // 用户不输入回答时，问题的默认值。或者使用函数来return一个默认值。
  //假如为函数时，函数第一个参数为当前问题的输入答案。
  default: String|Number|Array|Function,
  // 给出一个选择的列表，假如是一个函数的话，第一个参数为当前问题的输入答案。
  //为数组时，数组的每个元素可以为基本类型中的值。 
  choices: Array|Function, 
  // 接受用户输入，并且当值合法时，函数返回true。当函数返回false时，
  //一个默认的错误信息会被提供给用户。
  validate: Function, 
  // 接受用户输入并且将值转化后返回填充入最后的answers对象内。
  filter: Function, 
  // 接受当前用户输入的answers对象，并且通过返回true或者false来决定是否当前的问题应该去问。
  //也可以是简单类型的值。
  when: Function|Boolean, 
  // 改变渲染list,rawlist,expand或者checkbox时的行数的长度。
  pageSize: Number,
}
```

``
### 报警1：
➜  xiaowang-cli git:(master) npm i download-git-repo

up to date, audited 250 packages in 35s

28 packages are looking for funding
  run `npm fund` for details

4 vulnerabilities (2 moderate, 2 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details
``

提交代码后github报警了：https://github.com/EricWong1994/xiaowang-cli/security/dependabot

### 报警2：
➜  xiaowang-cli git:(master) npm i ncp

added 1 package, and audited 251 packages in 6s

28 packages are looking for funding
  run `npm fund` for details

4 vulnerabilities (2 moderate, 2 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

### 3
 Unhandled rejection Error: Cannot find module 'ejs'
Require stack:
- /Users/wangshihao/Desktop/github/xiaowang-cli/node_modules/consolidate/lib/consolidate.js
- /Users/wangshihao/Desktop/github/xiaowang-cli/node_modules/consolidate/index.js
- /Users/wangshihao/Desktop/github/xiaowang-cli/src/utils/common.js

解决方法：	"ejs": "^3.0.1"