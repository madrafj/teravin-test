import { useEffect } from "react";

export const isCompleted = obj => (
  Object.values(obj).filter(v => v === '').length === 0
)

export const isEmpty = obj => (
  Object.values(obj).filter(v => v !== '').length === 0
) 

export const toCamelCase = str => (
  str
  .toLowerCase()
  .split(' ')
  .map((v, i) => (i!==0) ? v[0].toUpperCase() + v.substr(1) : v)
  .reduce((a, b) => a.concat(b))
)

export const reverseCamelCase = camelStr => (
  camelStr.replace(/([A-Z])/, ' $1').replace(/^[a-z]/, x => x.toUpperCase())
)

export const generateID = () => {
  const dt = new Date()
  let newID = `${dt.getYear()}${dt.getMonth()}${dt.getDate()}${dt.getHours()}${dt.getMinutes()}`
  return newID
}