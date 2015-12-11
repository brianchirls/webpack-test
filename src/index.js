'use strict';

const THREE = require('three.js');
const result = THREE !== undefined;

if (typeof process !== 'undefined') {
	process.exit(result ? 0 : 1);
} else {
	console.log('Test passed:', result);
}