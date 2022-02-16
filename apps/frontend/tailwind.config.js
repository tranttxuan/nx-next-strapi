const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');

module.exports = {
    presets: [require('../../tailwind-workspace-preset.js')],
    purge: [
        join(__dirname, '**/**/*.{js,ts,jsx,tsx}'),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    darkMode: 'media', // or 'media' or 'class'
    mode: 'jit',
    theme: {
        extend: {
        },
        container: {
            padding: '15rem'
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};