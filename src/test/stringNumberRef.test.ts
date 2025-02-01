import { expect, it } from 'vitest';
import {stringNumberRef} from "../stringNumberRef";

it('default', () => {
  [
    "123",
    "abc123",
    "123.5",
    "abc123.5",
    "-123",
    "-123.5",
    "１２３",
    "１２３．５",
    "ー１２３",
    "abc１２３",
  ].forEach(value => {
    expect(stringNumberRef(value).value).toBe("123")
  })
})

it('allow minus', () => {
  [
    "123",
    "123.5",
    "１２３",
    "abc１２３",
  ].forEach(value => {
    expect(stringNumberRef(value, {allowMinus: true}).value).toBe("123")
  });
  [
    "-123",
    "-123.5",
    "ー１２３",
    "abcー１２３",
    "ー１２３．５",
    ].forEach(value => {
    expect(stringNumberRef(value, {allowMinus: true}).value).toBe("-123")
  })
})

it('allow decimal', () => {
  [
    "123",
    "abc123",
    "-123",
    "１２３",
    "ー１２３",
    "abc１２３",
  ].forEach(value => {
    expect(stringNumberRef(value, {allowDecimal: true}).value).toBe("123")
  });
  [
    "123.5",
    "-123.5",
    "１２３．５",
    "ー１２３．５",
    ].forEach(value => {
    expect(stringNumberRef(value, {allowDecimal: true}).value).toBe("123.5")
  })
})

it('allow minus+decimal', () => {
  [
    "-123.5",
    "abc-123.5",
    "ー１２３．５",
    "abcー１２３．５",
  ].forEach(value => {
    expect(stringNumberRef(value, {allowDecimal: true, allowMinus: true}).value).toBe("-123.5")
  });
})
