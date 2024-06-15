export const makeRequest = (payload) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(payload)
    }, 3000)
  })
}