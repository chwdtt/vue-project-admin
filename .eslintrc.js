/* 
  ESLint 规则 - Vue
  @fixable 表示此配置支持 --fix
  vue-eslint-parser@5.0.0
  babel-eslint@10.0.1
  eslint@5.8.0
  eslint-plugin-vue@5.1.0
*/
module.exports = {
    extends: [
      './eslintrc_base.js'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: 'babel-eslint', // 设置 js 的解析器为 vue-eslint-parser
      sourceType: 'module' // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    },
    plugins: [
      'vue'
    ],
    rules: {
      /*
        常规语法检查，防止出现可能的错误
      */
      // 禁止出现语法错误
      'vue/no-parsing-error': 'error',
      // 禁止覆盖保留字
      'vue/no-reserved-keys': 'error',
      // render 函数必须有返回值
      'vue/require-render-return': 'error',
      // 计算属性必须有返回值
      'vue/return-in-computed-property': 'error',
      // template 的根节点必须合法
      'vue/valid-template-root': 'error',
      // v-bind 指令必须合法
      'vue/valid-v-bind': 'error',
      // v-cloak 指令必须合法
      'vue/valid-v-cloak': 'error',
      // v-else-if 指令必须合法
      'vue/valid-v-else-if': 'error',
      // v-else 指令必须合法
      'vue/valid-v-else': 'error',
      // v-for 指令必须合法
      'vue/valid-v-for': 'error',
      // v-html 指令必须合法
      'vue/valid-v-html': 'error',
      // v-if 指令必须合法
      'vue/valid-v-if': 'error',
      // v-model 指令必须合法
      'vue/valid-v-model': 'error',
      // v-on 指令必须合法
      'vue/valid-v-on': 'error',
      // v-once 指令必须合法
      'vue/valid-v-once': 'error',
      // v-pre 指令必须合法
      'vue/valid-v-pre': 'error',
      // v-show 指令必须合法
      'vue/valid-v-show': 'error',
      // v-text 指令必须合法
      'vue/valid-v-text': 'error',
  
      /*
        最佳实践
      */
      // 计算属性禁止包含异步方法
      'vue/no-async-in-computed-properties': 'error',
      // 禁止出现重复的属性
      'vue/no-duplicate-attributes': 'error',
      // v-for 指令的元素必须有 v-bind:key
      'vue/require-v-for-key': 'error',
      // 禁止出现难以理解的 v-if 和 v-for
      'vue/no-confusing-v-for-v-if': 'error',
  
      /*
        风格问题
      */
      // html 属性值必须用双引号括起来
      'vue/html-quotes': 'error',
      // @fixable 禁止出现连续空格
      'vue/no-multi-spaces': 'error',
      // 定义了的 jsx element 必须使用
      'vue/jsx-uses-vars': 'error'
    }
  }
  