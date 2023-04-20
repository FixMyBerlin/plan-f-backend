'use strict';

/**
 * community-entry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::community-entry.community-entry');
