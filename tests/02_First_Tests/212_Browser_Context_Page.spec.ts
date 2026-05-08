/*Browsers, Contexts & Pages (BCP) concept in Playwright (TypeScript)

**Browser** = the application itself (Chrome, Firefox, Safari). You launch it ONCE. It's the heaviest, most expensive thing to create. Like opening the Chrome app on your desktop.

**Context** = a fresh browser profile. Each context has its OWN cookies, sessions, localStorage — **completely isolated from other contexts**. Like opening an incognito window. Same browser, but zero shared data.

**Page** = a single tab inside a context. You can open multiple tabs in one context. Like opening google.com in one tab and github.com in another tab — both tabs share the same cookies (same context).

Browser (Chrome)
├── Context 1 (User A — logged in as admin)
│   ├── Page 1 (Dashboard tab)
│   └── Page 2 (Settings tab)
│
├── Context 2 (User B — logged in as viewer)
│   ├── Page 1 (Dashboard tab)
│   └── Page 2 (Reports tab)
│
└── Context 3 (Guest — not logged in)
    └── Page 1 (Login page)

Context 1 and Context 2 share NOTHING — different cookies, different sessions, different users. But Page 1 and Page 2 inside Context 1 share the same cookies — both pages see admin's session.*/

/*
Real-Life Analogy:
**Browser** = a hotel building. You build it once.

**Context** = a hotel room. Each room is completely private — separate key, separate minibar, separate bathroom. Guest in Room 101 can't access Room 102.

**Page** = a window inside a room. One room can have multiple windows. All windows in the same room see the same view (same session/cookies).
*/

import { chromium, Browser, BrowserContext, Page } from 'playwright';


async function run() {
    // LEVEL 1: Launch browser — heaviest operation, do it once
    let browser: Browser = await chromium.launch({ headless: false });//chromium.launch is used to launch the browser. {headless: false} is used to launch the browser in non-headless mode.
    console.log("Browser Launched", browser);

    // LEVEL 2: Create context — fresh session, isolated cookies
    let context: BrowserContext = await browser.newContext();//newContext is used to create a new context.
    console.log("Context created", context);

    // LEVEL 3: Open page — a tab inside the context
    let page: Page = await context.newPage();
    console.log("Page opened");

    await page.goto("https://example.com");
    console.log("Title:", await page.title());

    // Cleanup — reverse order
    await page.close();
    await context.close();
    await browser.close();
}

run();

// Browser launched
// Context created
// Page opened
// Title: Example Domain