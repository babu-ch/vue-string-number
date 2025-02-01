# なにこれ？

IMEで全角入力になっていても半角数値に変換してくれるvueのrefのラッパーです

![Image](https://github.com/user-attachments/assets/ed4565c8-4539-4f11-a416-d9328f9ca1b2)

see

https://qiita.com/babu-ch/items/5e3eecf801335ebc3508

# usage

```
npm i vue-string-number-ref
```

```vue
<script setup lang="ts">
import {stringNumberRef} from "vue-string-number-ref";

const text = stringNumberRef("１２")
const dec = stringNumberRef("", {allowDecimal: true, allowMinus: false})
const min = stringNumberRef("", {allowDecimal: false, allowMinus: true})
const all = stringNumberRef("", {allowDecimal: true, allowMinus: true})
</script>

<template>
  <div>
    <p>整数のみ <input type="text" v-model="text" ></p>
    <p>小数点許可 <input type="text" v-model="dec" ></p>
    <p>マイナス許可 <input type="text" v-model="min"></p>
    <p>小数点+マイナス許可 <input type="text" v-model="all"></p>
  </div>
</template>
```

# setup

npm i

npm run dev

npm run test

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
