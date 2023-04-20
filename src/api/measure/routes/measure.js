'use strict';

/**
 * measure router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::measure.measure');
