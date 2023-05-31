import { FC, InputHTMLAttributes, KeyboardEvent} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label: string;
	innerRef: React.RefObject<HTMLInputElement>;
	type: string;
	onKeyUp?: any;
	onBlur?: any;
}


const Input: FC<InputProps> = ({id, label, innerRef, type, onKeyUp, onBlur}) => {

	function handleKeyUp(e: KeyboardEvent<HTMLInputElement>) {
		if (onKeyUp !== undefined) {
			onKeyUp(e);
		}
	}

	function handleBlur(e: React.FocusEvent<HTMLElement>) {
		if (onBlur !== undefined) {
			onBlur(e);
		}
	}

	return (
		<>
			<label htmlFor={id} className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">{label}</label>
			<div className="relative">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
				</div>
				<input
					onKeyUp={handleKeyUp}
					onBlur={handleBlur}
					ref={innerRef}
					type={type}
					name={id}
					id={id}
					className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={label} />
			</div>
		</>
	);
}

export default Input;