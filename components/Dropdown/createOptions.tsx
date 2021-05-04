import { Options } from './types';

export const createOptions = (options: Options) => (
	options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)
);