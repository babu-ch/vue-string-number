<script setup lang="ts">
import {stringNumberRef} from "./stringNumberRef.ts";

const text = stringNumberRef("")
const dec = stringNumberRef("", {allowDecimal: true, allowMinus: false})
const min = stringNumberRef("", {allowDecimal: false, allowMinus: true})
const all = stringNumberRef("", {allowDecimal: true, allowMinus: true})
</script>

<template>
  <div>
    <p>整数のみ <input type="text" v-model="text" inputMode="numeric"></p>
    <p>小数点許可 <input type="text" v-model="dec" inputMode="numeric"></p>
    <p>マイナス許可 <input type="text" v-model="min" inputMode="numeric"></p>
    <p>小数点+マイナス許可 <input type="text" v-model="all" inputMode="numeric"></p>
  </div>
</template>