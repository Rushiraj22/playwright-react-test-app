const { test, expect } = require('@playwright/test');
test.describe('CRUD Operations', () => {
  test('should allow creating a new post', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[type="email"]', 'test@test.com');
    await page.fill('input[type="password"]', 'password');
    await page.click('button[type="submit"]');

    await page.fill('input[placeholder="New Post"]', 'My New Post');
    await page.click('button:text("Add Post")');
    await expect(page.locator('ul > li:text("My New Post")')).toBeVisible();
  });

  test('should allow editing a post', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[type="email"]', 'test@test.com');
    await page.fill('input[type="password"]', 'password');
    await page.click('button[type="submit"]');

    await page.click('ul > li >> text=Edit');
    await page.fill('input[type="text"]', 'Updated Post Title');
    await page.click('button:text("Update Post")');
    await expect(
      page.locator('ul > li:text("Updated Post Title")')
    ).toBeVisible();
  });

  test('should allow deleting a post', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[type="email"]', 'test@test.com');
    await page.fill('input[type="password"]', 'password');
    await page.click('button[type="submit"]');

    await page.click('ul > li >> text=Delete');
    await expect(page.locator('ul > li:text("My New Post")')).not.toBeVisible();
  });
});
