import {
  PhotoForm,
  adjustmentViewOptions,
  imagePositionOptions,
  photoMeasureOptions,
  photoOrientationOptions
} from '@types'

export const photoFormProperties: PhotoForm[] = [
  {
    name: 'name',
    label: 'Photo name',
    type: 'text',
    placeholder: 'photo name',
    clearBtn: true
  },
  {
    name: 'height',
    label: 'Photo height',
    type: 'select',
    defaultValue: '300px',
    options: (photoMeasureOptions as unknown) as string[]
  },
  {
    name: 'width',
    label: 'Photo width',
    type: 'select',
    defaultValue: '300px',
    options: (photoMeasureOptions as unknown) as string[]
  },
  {
    name: 'adjustmentView',
    label: 'Adjustment view',
    type: 'select',
    defaultValue: 'height',
    options: (adjustmentViewOptions as unknown) as string[]
  },
  {
    name: 'imagePosition',
    label: 'Image position',
    type: 'select',
    defaultValue: 'center',
    options: (imagePositionOptions as unknown) as string[]
  },
  {
    name: 'photoOrientation',
    label: 'Photo orientation',
    type: 'select',
    defaultValue: 'horizontal',
    options: (photoOrientationOptions as unknown) as string[]
  }
];
