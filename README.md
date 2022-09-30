1、`npm link`
使用npm link ，link将一个任意位置的npm包链接到全局执行环境，从而在任意位置使用命令行都可以直接运行该npm包。 npm link命令通过链接目录和可执行文件，实现npm包命令的全局可执行

`which xiaowang-cli`
/Users/你的用户名/.nvm/versions/node/v16.4.1/bin/xiaowang-cli

初始版本：
2、执行`eric-cli` 打印出 `这是我创建的一个文件，目录：/bin/www`

bin目录下不要同时留有www文件和www.js文件，www优先级会更高

1.0.0版本：
当前版本执行`xiaowang-cli --help`
``` shell
➜  github xiaowang-cli --help 
Usage: xiaowang-cli [options]

Options:
  -V, --version  output the version number
  -h, --help     display help for command
```

1.0.1版本：
xiaowang-cli create my
➜  xiaowang-cli git:(master) ✗ xiaowang-cli -h 
Usage: xiaowang-cli [options] [command]
Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  create|c        创建一个项目
  config|conf     config project variable
  *               command not found
  help [command]  display help for command