const svg = require('svgo');
const loaderUtils = require('loader-utils');
const compiler = require('vue-template-compiler');

module.exports = function (content) {
  const options = loaderUtils.getOptions(this) || {};
  const query = loaderUtils.parseQuery(this.resourceQuery || '?');
  const svgo = new svg(options.svgo || {
    plugins: [{ removeDoctype: true }, { removeComments: true }],
  });

  this.cacheable && this.cacheable(true);
  this.addDependency(this.resourcePath);

  const cb = this.async();

  svgo.optimize(content, (result) => {
    if (result.error) {
      return cb(result.error);
    }

    const compiled = compiler.compile(result.data, { preserveWhitespace: false });
    let render = compiled.render

    render = render.replace('with(this){','')
    render = render.slice(0,-1)
    render = render.replace(new RegExp('_c', 'g'), 'this._c')
    let component = `render: function () {${render}}`;

    if (options.includePath || query.includePath) {
      const filename = loaderUtils.interpolateName(this, '[path][name].[ext]', { context: this.options.context });
      component = `${component}, path:${JSON.stringify(filename)}`;
    }

    cb(null, `module.exports = {${component}};`);
  });
};
