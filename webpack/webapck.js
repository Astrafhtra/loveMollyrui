 const fs = require("fs");
 const path = require("path");
 const parser = require("@babel/parser"); // 转换语法树
 const traverse = require("@babel/traverse").default; // 节点遍历
 const babel = require("@babel/core");

 function getModuleInfo(file) {
   // 读取文件
   const body = fs.readFileSync(file, 'utf-8');

   // 转换AST语法树
   const ast = parser.parse(body, {
     sourceType: "moudule", // 表示我们要解析的是ES模块
   });

   // 依赖收集
   const deps = {};
   traverse(ast, {
     // visitor
     ImportDeclaration({ node }) {
       const dirname = path.dirname(file);
       const abspath = "./" + path.join(dirname, node.source.value);
       deps[node.source.value] = abspath;
     }
   });

  //  ES6 转 ES5
  const { code } = babel.transformFromAst(ast,null,{
    presets: ["@babel/preset-env"],
  });
  const modulInfo = { file, deps, code};
  return module;
 }
 const info = getModuleInfo('./src/index.js')
 console.log('info:',info)