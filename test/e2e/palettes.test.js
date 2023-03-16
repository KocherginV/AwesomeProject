import { device, element, by, waitFor } from 'detox';

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

  it('should open "add new palette" modal', async () => {
    await element(by.id('newPaletteBtn')).tap();
    await expect(element(by.label('AddNewPaletteModal'))).toBeVisible();
  });

  it('should create new palette', async () => {
    await element(by.id('newPaletteBtn')).tap();
    await element(by.id('input')).tap();
    await element(by.id('input')).typeText('my new palette');
    await element(by.id('switch-AliceBlue')).tap();
    await element(by.id('switch-Azure')).tap();
    await element(by.id('switch-Blue')).tap();
    await waitFor(element(by.id('switch-Chocolate')))
      .toBeVisible()
      .whileElement(by.id('colorsList'))
      .scroll(50, 'down');
    await element(by.id('switch-Chocolate')).tap();
    await element(by.id('submitBtn')).tap();
    await expect(element(by.label('my new palette'))).toBeVisible();
  });

  it('should open palette details', async () => {
    await element(by.id('paletteNameFrontend Masters')).tap();
    await expect(element(by.label('Frontend Masters'))).toBeVisible();
    await expect(element(by.id('colorNameRed'))).toBeVisible();
    await expect(element(by.id('colorNameBlack'))).toBeVisible();
    await expect(element(by.id('colorNameGrey'))).toBeVisible();
    await expect(element(by.id('colorNameWhite'))).toBeVisible();
    await expect(element(by.id('colorNameOrange'))).toBeVisible();
  });
});
