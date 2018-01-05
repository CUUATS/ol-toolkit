exports.config = {
  bundles: [
    { components: ['ol-app', 'ol-layer-stamen', 'ol-layer-wms', 'ol-map'] },
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
