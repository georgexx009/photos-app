export interface PhotoMetaData {
	name: string
}

export const photoOrientationOptions = [
  'horizontal',
  'vertical',
  'square'
] as const;
export type PhotoOrientation = typeof photoOrientationOptions[number];

export const adjustmentViewOptions = ['both', 'height', 'width'] as const;
export type AdjustmentView = typeof adjustmentViewOptions[number];

export const imagePositionOptions = ['center', 'start'] as const;
export type ImagePosition = typeof imagePositionOptions[number];

export const photoMeasureOptions = [
  '200px',
  '250px',
  '300px',
  '350px',
  '400px'
] as const;
export type PhotoMeasures = typeof photoMeasureOptions[number];

export interface PhotoForm {
  name: string;
  label: string;
  placeholder?: string;
  type: 'text' | 'number' | 'dropdown';
  defaultValue?: string;
  options?: string[];
}

export interface Photo {
  id: string;
  url: string;
  name?: string;
  photoOrientation: PhotoOrientation;
}
