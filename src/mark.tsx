import type { JSX, SVGProps } from "react";

const FRONTAL_MARK_WIDTH: number = 22 as const;
const FRONTAL_MARK_HEIGHT: number = 22 as const;

export type FrontalMarkProps = SVGProps<SVGSVGElement>;

export function FrontalMark({
	width = FRONTAL_MARK_WIDTH,
	height = FRONTAL_MARK_HEIGHT,
	...props
}: FrontalMarkProps): JSX.Element {
	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${FRONTAL_MARK_WIDTH} ${FRONTAL_MARK_HEIGHT}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-label="Frontal Mark"
			aria-hidden="true"
			{...props}
		>
			<path
				d="M10.9954 3.66675H8.55322V6.11119H10.9954V3.66675Z"
				fill="currentColor"
			/>
			<path
				d="M8.55347 6.11108H6.11133V8.55553H8.55347V6.11108Z"
				fill="currentColor"
			/>
			<path
				d="M13.4377 1.22217H10.9956V3.66661H13.4377V1.22217Z"
				fill="currentColor"
			/>
			<path
				d="M18.322 1.22217H15.8799V3.66661H18.322V1.22217Z"
				fill="currentColor"
			/>
			<path
				d="M8.55347 1.22217H6.11133V3.66661H8.55347V1.22217Z"
				fill="currentColor"
			/>
			<path
				d="M13.4377 6.11108H10.9956V8.55553H13.4377V6.11108Z"
				fill="currentColor"
			/>
			<path
				d="M10.9954 8.55566H8.55322V11.0001H10.9954V8.55566Z"
				fill="currentColor"
			/>
			<path
				d="M10.9954 13.4443H8.55322V15.8888H10.9954V13.4443Z"
				fill="currentColor"
			/>
			<path
				d="M8.55347 15.8889H6.11133V18.3334H8.55347V15.8889Z"
				fill="currentColor"
			/>
			<path d="M13.4377 11H10.9956V13.4444H13.4377V11Z" fill="currentColor" />
			<path
				d="M15.8796 8.55566H13.4375V11.0001H15.8796V8.55566Z"
				fill="currentColor"
			/>
			<path
				d="M15.8796 3.66675H13.4375V6.11119H15.8796V3.66675Z"
				fill="currentColor"
			/>
			<path d="M8.55347 11H6.11133V13.4444H8.55347V11Z" fill="currentColor" />
			<path
				d="M10.9954 18.3333H8.55322V20.7777H10.9954V18.3333Z"
				fill="currentColor"
			/>
		</svg>
	);
}
