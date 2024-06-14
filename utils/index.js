import { filename } from 'pathe/utils'

export const getImagesFromGlob = (glob) => {
  
  return Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
  ) 
}