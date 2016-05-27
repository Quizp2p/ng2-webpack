var path = require('path');
const root = path.resolve(__dirname, '..');

module.exports = {
    root: root,
    app: path.join(root, 'src/app'),
    main: path.join(root, 'src/main'),
    vendor: path.join(root, 'src/vendor'),
    polyfills: path.join(root, 'src/polyfills'),
    assets: path.join(root, 'src/assets'),
    dist: path.join(root, 'dist'),
    template: path.join(root, 'src/index.html')
};