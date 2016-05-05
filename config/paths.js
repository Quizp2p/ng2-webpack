var path = require('path');
const root = path.resolve(__dirname, '..');

module.exports = {
    root: root,
    main: path.join(root, 'src/main'),
    vendor: path.join(root, 'src/vendor'),
    polyfills: path.join(root, 'src/polyfills'),
    dist: path.join(root, 'dist'),
    template: path.join(root, 'index.html')
};