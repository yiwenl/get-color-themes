// index.js

import ColorThemes from './ColorThemes';
import hexRgb from 'hex-rgb';


/*
	mType: 'hex', 1, 255
	mReturnType : 'Array' => [r, g, b] / 'Object => {r, g, b}';
*/

const getColorTheme = (mType = 1, mReturnType = 'Array') => {
	const index = Math.floor(Math.random() * ColorThemes.length);
	let colorTheme = ColorThemes[index];

	if(mType === 'hex') {
		return colorTheme;
	}

	colorTheme = colorTheme.map(v => hexRgb(v));
	
	if(mType === 1) {
		colorTheme.forEach(color => {
			color.red /= 255;
			color.green /= 255;
			color.blue /= 255;
			color.alpha /= 255;
		});
	}

	colorTheme = colorTheme.map(color => {
		if(mReturnType === 'Array') {
			return [color.red, color.green, color.blue];
		} else {
			return {
				r:color.red,
				g:color.green,
				b:color.blue
			};
		}
	});

	return colorTheme;
};


export default getColorTheme;