import { render } from '@stencil/core/testing';
import { OLLayerStamen } from './ol-layer-stamen';

describe('ol-layer-stamen', () => {
  it('should build', () => {
    expect(new OLLayerStamen()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [OLLayerStamen],
        html: '<ol-layer-stamen></ol-layer-stamen>'
      });
    });
  });
});
