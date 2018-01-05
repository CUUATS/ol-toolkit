import { render } from '@stencil/core/testing';
import { OLMap } from './ol-map';

describe('ol-app', () => {
  it('should build', () => {
    expect(new OLMap()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [OLMap],
        html: '<ol-map></ol-map>'
      });
    });
  });
});
