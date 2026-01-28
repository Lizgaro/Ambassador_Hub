from playwright.sync_api import sync_playwright
import time

def verify(playwright):
    browser = playwright.chromium.launch(headless=True)

    # Desktop
    print("Capturing Desktop...")
    context_desktop = browser.new_context(viewport={'width': 1920, 'height': 1080})
    page_desktop = context_desktop.new_page()
    page_desktop.goto("http://localhost:3000")

    # Scroll to economics
    economics = page_desktop.locator("#economics")
    economics.scroll_into_view_if_needed()
    # Wait a bit for any animations (though we disabled some)
    time.sleep(2)
    page_desktop.screenshot(path="verification/desktop_economics.png")

    # Mobile
    print("Capturing Mobile...")
    context_mobile = browser.new_context(viewport={'width': 375, 'height': 667}, is_mobile=True, has_touch=True)
    page_mobile = context_mobile.new_page()
    page_mobile.goto("http://localhost:3000")

    # Scroll to economics
    economics_m = page_mobile.locator("#economics")
    economics_m.scroll_into_view_if_needed()
    time.sleep(2)
    page_mobile.screenshot(path="verification/mobile_economics.png")

    browser.close()
    print("Done.")

with sync_playwright() as playwright:
    verify(playwright)
