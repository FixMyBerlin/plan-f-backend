'use strict';

/**
 * measure service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::measure.measure');
