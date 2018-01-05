import { render } from '@stencil/core/testing';
import { OLLayerWMS } from './ol-layer-wms';

describe('ol-layer-wms', () => {
  it('should build', () => {
    expect(new OLLayerWMS()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [OLLayerWMS],
        html: '<ol-layer-wms></ol-layer-wms>'
      });
    });
  });
});
