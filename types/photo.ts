import { File } from './file'


export const photoOrientationOptions = [
  'horizontal',
  'vertical',
  'square'
] as const
export type PhotoOrientation = typeof photoOrientationOptions[number]

export const adjustmentViewOptions = ['both', 'height', 'width'] as const
export type AdjustmentView = typeof adjustmentViewOptions[number]

export const imagePositionOptions = ['center', 'start'] as const
export type ImagePosition = typeof imagePositionOptions[number]

export const photoMeasureOptions = [
  '200px',
  '250px',
  '300px',
  '350px',
  '400px'
] as const
export type PhotoMeasures = typeof photoMeasureOptions[number]

export interface PhotoForm {
  name: string
  label: string
  placeholder?: string
  type: 'text' | 'number' | 'select'
  value?: string
  defaultValue?: string
  handleChange?: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void
  options?: string[]
  clearBtn?: boolean
}

export interface PhotoFormState extends PhotoMetaData {
  theFiles: File[]
}

export interface PhotoMetaData {
  name: string
  height: string
  width: string
  adjustmentView: string
  imagePosition: string
  photoOrientation: string
}

export interface PhotoPrisma {
  id: number
  name: string
  url: string
  height: string
  width: string
  adjustment_view: string
  image_position: string
  photo_orientation: string
}

export interface Photo {
  id?: number
  name: string
  height: string
  width: string
  url: string
  adjustmentView: string
  imagePosition: string
  photoOrientation: string
}
