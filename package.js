Package.describe({
  summary: "First custom Telescope Package",
  version: '0.1.0',
  name: "firstpackage"
});

Package.onUse(function (api) {

  api.use([
    'telescope-base',
    'iron:router'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/templates/about_page.html',
    'lib/client/about.js'
  ], ['client']);

});
