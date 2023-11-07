export const waitAndClick = async (el, timeout) => {
  await el.waitForDisplayed({ timeout });
  await el.click();
};
