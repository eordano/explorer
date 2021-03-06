export async function saveSnapshots(userURL: string, accessToken: string, face: string, body: string) {
  const data = new FormData()
  data.append('face', base64ToBlob(face), 'face.png')
  data.append('body', base64ToBlob(body), 'body.png')
  return (await fetch(`${userURL}/snapshot`, {
    method: 'POST',
    body: data,
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  })).json()
}

export function base64ToBlob(base64: string): Blob {
  const sliceSize = 1024
  const byteChars = window.atob(base64)
  const byteArrays = []
  let len = byteChars.length

  for (let offset = 0; offset < len; offset += sliceSize) {
    const slice = byteChars.slice(offset, offset + sliceSize)

    const byteNumbers = new Array(slice.length)
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }

    const byteArray = new Uint8Array(byteNumbers)

    byteArrays.push(byteArray)
    len = byteChars.length
  }

  return new Blob(byteArrays, { type: 'image/jpeg' })
}
