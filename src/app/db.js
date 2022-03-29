import { generateID } from "./utils"

export const getItem = key => {
  const dt = localStorage.getItem(key)
  if (dt) return JSON.parse(dt)
  else return undefined
}

const getItems = key => {
  const dt = localStorage.getItem(key)
  if (dt) return JSON.parse(dt)
  else return []
}

const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getPreviews = () => getItems('previews')

export const addEmployee = newData => {
  const id = generateID()
  const newPreview = {
    noID: id,
    nama: newData.dataPribadi.namaLengkap,
    alamat: newData.dataPribadi.alamatKTP
  }
  const previews = getPreviews()
  const entry = {
    noID: id,
    ...newData
  }

  setItem('previews', [...previews, newPreview])
  setItem(id, entry)
}