export interface Album {
  ["im:name"]: Label;
  ["im:image"]: Label[];
  ["im:itemCount"]: Label;
  ["im:price"]: Attributes & Label;
  ["im:contentType"]: {
		attributes?: Attributes;
		["im:contentType"]?: Attributes;
	};
  rights: Label;
  title: Label;
  link: Attributes;
  id: {
		attributes?: Attributes;
		label?: Label;
	};
  ["im:artist"]: Attributes & Label;
  category: {
		attributes?: Attributes;
	};
  ['im:releaseDate']: {
		attributes?: Attributes;
		label?: Label;
	};
	customId: number;
}

export interface Label {
	[x: string]: any;
	label: string;
}

export interface Attributes {
	href?: string;
	rel?: string;
	type?: string;
	["im:id"]?: string;
	label?: string;
	scheme?: string;
	term?: string;
	amount?: string;
	currency?: string
}