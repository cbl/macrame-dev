const merge = require('lodash.merge');
const tailwindConfig = require('@macramejs/admin-vue3/tailwind.config');

module.exports = merge(tailwindConfig, {
    purge: ['./resource/js/**/*.vue'],
});
