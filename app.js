// Strict モードで利用
'use strict';

// Node.jsがデフォルトで提供してくれる、コマンドラインの引数が入った配列
const number = process.argv[2] || 0;
let sum = 0;

for (let i = 1; i <= number; i++) {
  sum = sum + i;
}

console.log(sum);
