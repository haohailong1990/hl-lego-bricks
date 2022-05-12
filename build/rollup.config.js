import { name } from '../package.json'
import json from '@rollup/plugin-json';
import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const file = type => `dist/${name}.${type}.js`;
const overrides={
  compilerOptions :{
    declaration:true,
  },
  exclude:[
    'node_modules',
    'src/App.vue',
    'src/main.ts'
  ]
}
export { name, file }
export default {
  input:'src/index.ts',
  output:{
    name,
    file:file('esm'),
    format:'es'
  },
  plugins:[
    nodeResolve(),
    typescript({tsconfigOverride:overrides}),
    vue(),
    json(),
    css({ output: 'bundle.css' })
  ],
  // 数组格式
  external:[
    'vue',
    'lodash-es'
  ]
};