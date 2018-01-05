import { render } from '@stencil/core/testing';
import { OLApp } from './ol-app';

describe('ol-app', () => {
  it('should build', () => {
    expect(new OLApp()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [OLApp],
        html: '<ol-app></ol-app>'
      });
    });
  });
});
