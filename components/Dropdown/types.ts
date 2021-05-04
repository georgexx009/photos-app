export interface DropdownProps {
	options: Option[];
	setSelected: (value: string) => void;
	defaultValue: string;
}

export type Option = {
	value: string,
	label: string
}

export type Options = Option[];