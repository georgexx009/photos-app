export interface DropdownProps {
	options: Option[];
	handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	value: string;
	defaultValue?: string;
	name: string;
}

export type Option = {
	value: string,
	label: string
}

export type Options = Option[];