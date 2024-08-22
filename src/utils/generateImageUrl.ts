function generateImageUrl({
  fileName,
  format,
  option = 'q_auto,c_fill',
}: {
  fileName: string
  format: 'jpg' | 'webp'
  option?: string
}) {
  return `https://res.cloudinary.com/dbzi5fo0y/image/upload/${option}/v1724280601/${format}/${fileName}.${format}`
}

export default generateImageUrl
