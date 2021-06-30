const merge = require('lodash.merge');
const tailwindConfig = require('@macramejs/admin-vue3/tailwind.config');

module.exports = merge(tailwindConfig, {
    purge: [
        './resources/js/**/*.vue',
        './packages/admin/packages/admin-react/src/ui/**/*.vue',
        './packages/admin/packages/admin-vue3/src/ui/**/*.vue',
    ],
});
