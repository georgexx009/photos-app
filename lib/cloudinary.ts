import cloudinary from 'cloudinary'

interface ICloudinary {
  config: any
}

const cloudinaryInstace: ICloudinary = cloudinary as unknown as ICloudinary

cloudinaryInstace.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export default cloudinary.v2