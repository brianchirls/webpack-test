'use strict';

const result = true;

if (typeof process !== 'undefined') {
	process.exit(result ? 0 : 1);
} else {
	console.log('Test passed:', result);
}