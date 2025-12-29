# Water Cycle Interactive Infographic

## Usage

Open the HTML file in your browser.

## Features

- The **tabs-and-panels** UI pattern is implemented using `<dialog>`, a relatively new web element and API that has been available since 2022 and is considered [Baseline](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility) compatibility. The "tabs" as "panel openers" appears as round buttons in a clockwise arrangement, rather than the traditional tabs in a row or column.

  The reason for this choice in technology is to leverage native browser support for modern web platform capabilities instead of implementing the pattern with third‑party UI and JavaScript frameworks/libaries such as React, Bootstrap, etc. ("reinventing the wheel"), which confers several benefits:
    - Smaller bundle size, faster load times – no extra dependencies for the client/browser to download.
    - Better raw performance – direct DOM access avoids the virtual‑DOM diffing overhead common among said frameworks/libaries.
    - Built‑in SEO and accessibility – plain HTML content from the start. Often-overlooked usability features are available with no/little extra work required. For example, an open panel can be easily closed in many ways: clicking the implemented close button, clicking outside the panel, and pressing <kbd>Esc</kbd>.
    - Less code = better code – onboarding, maintenance and debugging are easier. Also no mandatory bundler or transpiler.
    - Long‑term stability and reduced dependency risk – web platform standards remain backward compatible. Less worry about third‑party updates or breaking changes.

- `<details>` and `<summary>` elements (Baseline 2020) are showcased in the 4th panel ("Collection"), implementing a simple **accordion** pattern.

- A **tooltip** feature is implemented in the 3rd panel ("Precipitation"). Accessibilty-wise, the tooltip triggers are not just hoverable as expected, but also focusable via pressing <kbd>Tab</kbd>.

- The infographic is **responsive**; adapts to mobile and desktop views.

- **Pure CSS animations** are showcased in each panel, needing no JavaScript.

- There are **no binary images** (JPG, PNG, etc.) used in this project. All images are either emojis, or SVGs sourced free online (cycle arrows) and generated with tools (the waves in panel 4), and then hand-modified as needed and to reduce size even further while improving readability. As a result this project loads extremely fast and efficiently.

- Thanks to the use of native web platform APIs, and offloading the bulk of functionality and behaviours to HTML and CSS, there is minimal JavaScript in this project. Documented with Typecript-flavoured **JSDoc**.

## Assumptions/limitations

- My tooltip implementation is not screen-reader accessible. I made this less-ideal choice over a more sophisticated [tooltip role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role) implmentation that I might try in the future, as well as the new [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) (hint type) that's not currently Baseline among all browsers.

- This project is not embeddable as-is into a webpage. It would require a shadow DOM usage but it's not currently implemented.