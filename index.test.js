describe("Origin Financial test suite", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:8034");
  });

  it('should be titled "Origin Financial"', async () => {
    await expect(page.title()).resolves.toMatch(
      "Origin Financial - Frontend Challenge"
    );
  });

  it("should initialize with the expected values", async () => {
    await expect(page).toMatch("25,000");
    await expect(page).toMatch("48 monthly deposits");
    await expect(page).toMatch("$521");
  });

  it("should not accept letters as input for amount", async () => {
    await page.type("#amount", "test");
    await expect(page).toMatch("250,00");
  });

  it("should be able to alter the date by clicking the chevron buttons", async () => {
    await page.click("#decrease-month");
    await expect(page).toMatch("47 monthly deposits");
    await expect(page).toMatch("$532");

    await page.click("#increase-month");
    await expect(page).toMatch("48 monthly deposits");
    await expect(page).toMatch("$521");
  });

  it("should be able to alter the date by using the left and right arroy keys", async () => {
    await page.keyboard.press("ArrowLeft");
    await expect(page).toMatch("47 monthly deposits");
    await expect(page).toMatch("$532");

    await page.keyboard.press("ArrowRight");
    await expect(page).toMatch("48 monthly deposits");
    await expect(page).toMatch("$521");
  });
});
