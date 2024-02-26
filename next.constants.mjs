'use strict';

/**
 * This is used to verify if the current Website is running on a Development Environment
 */
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

/**
 * Supports a manual override of the base path of the Website
 *
 * This is useful when running the deployment on a subdirectory
 * of a domain, such as when hosted on GitHub Pages.
 *
 * Note that this is a custom Environment Variable that can be defined by us when necessary
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
