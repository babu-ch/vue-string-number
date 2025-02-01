import {customRef} from 'vue'

type StringNumberRefOptions = {
  // マイナス許可?
  allowMinus?: boolean,
  // 小数点許可?
  allowDecimal?: boolean
}

// 全角数値を半角数値にreplaceするやさしいrefです
export function stringNumberRef(
  value: string,
  options: StringNumberRefOptions = {allowDecimal: false, allowMinus: false}
) {
  let internalValue = getValue(value, options);

  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return internalValue
      },
      set(v) {
        internalValue = getValue(v, options)
        trigger()
      }
    }
  })
}

// 変換後の値を返す
function getValue(v: string, options: StringNumberRefOptions) {
  if (v === "") {
    return ""
  }
  if (isFinite(Number(v))) {
    return getNumberText(v, options);
  }
  const replaced = toHalfWidth(v)
  if (replaced === "-") {
    return replaced
  }
  const allowed = replaced.match(/-?\d+(?:\.\d+)?/)
  if (allowed === null) {
    return ""
  }
  return getNumberText(allowed[0], options)
}

function toHalfWidth(str: string) {
  return str.replace(/[０-９．ー]/g, (c) =>
    c === "ー" ? "-" : String.fromCharCode(c.charCodeAt(0) - 0xFEE0)
  );
}

function getNumberText(stringNumber: string, options: StringNumberRefOptions) {
  let number = parseFloat(stringNumber)
  if (!options.allowMinus) {
    number = Math.abs(number)
  }
  if (!options.allowDecimal) {
    number = Math.trunc(number)
  }
  return `${number}`;
}

