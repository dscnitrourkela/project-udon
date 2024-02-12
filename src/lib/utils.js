import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @typedef {import('clsx').ClassValue} ClassValue
 */

/**
 *
 * @param  {ClassValue[]} inputs
 * @returns {string}
 */
export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
