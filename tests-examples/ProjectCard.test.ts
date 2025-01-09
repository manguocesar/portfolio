import { test, expect } from '@playwright/test';

test.describe('ProjectCard Component', () => {
  
  // Sample project data
  const project = {
    name: 'Test Project',
    image_path: '/images/test-project.png',
    category: 'Web Development',
    deployed_url: 'https://testproject.com',
    github_url: 'https://github.com/testproject',
    description: 'This is a test project description.',
    key_techs: ['React', 'TypeScript', 'Next.js'],
  };

  test('should render the project card', async ({ page }) => {
    // Load the component (Assuming you have a way to render the component in the page for testing)
    await page.goto('http://localhost:3000/'); // Change this URL to where your component is rendered in dev mode

    // Check if the project name and image are visible
    await expect(page.locator('text=Test Project')).toBeVisible();
    await expect(page.locator('img[alt="Test Project"]')).toBeVisible();
  });

  test('should show detail view on image click and show close button', async ({ page }) => {
    // Load the component
    await page.goto('http://localhost:3000/');

    // Click on the image to show details
    await page.locator('img[alt="Test Project"]').click();

    // Ensure the detailed view is visible
    await expect(page.locator('text=Test Project')).toBeVisible();
    await expect(page.locator('text=This is a test project description.')).toBeVisible();
    await expect(page.locator('text=React')).toBeVisible();

    // Check for close button
    const closeButton = page.locator('button:has-text("×")'); // Look for close button (×) based on the MdClose icon
    await expect(closeButton).toBeVisible();
  });

  test('should close detail view when close button is clicked', async ({ page }) => {
    // Load the component
    await page.goto('http://localhost:3000/');

    // Open the detail view by clicking the image
    await page.locator('img[alt="Test Project"]').click();

    // Ensure detail view is open
    await expect(page.locator('text=Test Project')).toBeVisible();

    // Click the close button
    await page.locator('button:has-text("×")').click();

    // Ensure the detail view is closed
    await expect(page.locator('text=Test Project')).not.toBeVisible();
  });

  test('should navigate to GitHub and deployed project links', async ({ page }) => {
    // Load the component
    await page.goto('http://localhost:3000/');

    // Open the detail view by clicking the image
    await page.locator('img[alt="Test Project"]').click();

    // Check the GitHub link
    const githubLink = page.locator('a:has-text("Github")');
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/testproject');

    // Check the deployed project link
    const deployedLink = page.locator('a:has-text("Project")');
    await expect(deployedLink).toHaveAttribute('href', 'https://testproject.com');
  });
});
