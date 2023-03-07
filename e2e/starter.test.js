import { device, element, by } from 'detox';

describe('Palettes tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have "home" heading', async () => {
    await expect(element(by.label('Home'))).toBeVisible();
  });
});
