import { expect, it } from 'vitest';
import {stringNumberRef} from "../stringNumberRef";

it('default', () => {
  [
    "123",
    "１２３",
    "ー１２３",
    "abc１２３",
  ].forEach(value => {
    expect(stringNumberRef(value).value).toBe("123")
  })
})