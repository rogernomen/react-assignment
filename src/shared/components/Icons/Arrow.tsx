import React from "react";

function Arrow(props: React.SVGProps<SVGSVGElement>): JSX.Element {
	return (
		<svg
			role="arrowIcon"
			width="8"
			height="15"
			viewBox="0 0 8 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M3.19733 6.82323C2.98916 7.0515 2.99038 7.41856 3.20007 7.64521L7.84193 12.6625C8.05269 12.8903 8.05269 13.2596 7.84193 13.4874L7.07869 14.3124C6.86793 14.5402 6.52622 14.5402 6.31546 14.3124L0.158071 7.65704C-0.0516188 7.43039 -0.0528406 7.06333 0.155335 6.83506L6.23012 0.173833C6.43936 -0.055606 6.78106 -0.0582636 6.99333 0.167897L7.76204 0.986898C7.97431 1.21306 7.97677 1.58239 7.76753 1.81183L3.19733 6.82323Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default Arrow;
