# Learning Diary – Responsive Website Project

## Student Information

**Name:** [PENGHUI ZHANG]
**Student Number:** [003313532]
**Project:** WECAN Smart Home Responsive Website
**GitHub Repository:** [https://github.com/HilbertAnges/wecan-responsive-website]
**Website URL:** [http://127.0.0.1:5500/index.html]

---

## Day 1 – Environment Setup and Basic HTML

**Date:** [2026.7.24]

Today I installed Visual Studio Code and the Live Server extension. I created a new project folder named `wecan-website`.

I created the following files:

* `index.html`
* `style.css`
* `script.js`
* `learning-diary.md`

I learned that HTML is used to create the content and structure of a webpage. I added basic HTML elements, including a header, navigation menu, main content sections and footer.

I also added navigation links that connect to different parts of the same webpage.

The main difficulty was understanding the relationship between opening and closing HTML tags. I solved this problem by checking the indentation and testing the page with Live Server.

---

## Day 2 – Core CSS, Buttons and Flexbox

**Date:** [2026.7.25]

Today I connected the `style.css` file to the HTML page.

I created CSS variables for the main colours of the website. Using variables made it easier to change the colour theme consistently.

I created several reusable button classes, including:

* A primary button
* A light button
* A small navigation button

I used Flexbox in the navigation bar, hero section and footer. Flexbox helped me align elements horizontally and control the space between them.

I changed the text, colours and project information so that the website represents our WECAN smart-home team instead of directly copying the example website from the tutorial.

---

## Day 3 – CSS Grid and Content Cards

**Date:** [2026.7.26]

Today I created a feature section containing three content cards.

The three cards introduce the following smart-home functions:

1. Smart lighting
2. Home safety
3. Energy saving

I used CSS Grid to display the cards evenly on larger screens. The cards contain an icon, a heading and a short description.

I learned that CSS Grid is useful for creating layouts with rows and columns. I also learned that Grid and Flexbox have different purposes. Flexbox is useful for arranging elements mainly in one direction, while Grid is useful for creating two-dimensional layouts.

---

## Day 4 – FAQ and Interactive Elements

**Date:** [2026.7.27]

Today I added a frequently asked questions section to the website.

I used the HTML `details` and `summary` elements to create an accordion-style FAQ. Users can click a question to expand or hide its answer.

I added questions about smart-home systems, responsive design and the technologies used to create the website.

This activity helped me understand how interactive elements can be created with semantic HTML.

---

## Day 5 – Mobile Navigation and Responsive Design

**Date:** [2026.7.28]

Today I added responsive styling for mobile devices.

I created a media query for screens narrower than 768 pixels. On smaller screens:

* The navigation links are hidden inside a mobile menu.
* The feature cards change from three columns to one column.
* The hero section changes from a horizontal layout to a vertical layout.
* The footer elements are displayed vertically.
* The text and buttons remain readable on a small screen.

I also used JavaScript to open and close the mobile navigation menu.

I tested the website at desktop, tablet and mobile screen sizes by using the browser developer tools.

One problem was that the mobile menu did not open correctly at first. I checked the file path and confirmed that `script.js` was connected to `index.html`. After correcting the file connection, the menu worked normally.

---

## Day 6 – Testing and Personalisation

**Date:** [2026.7.29]

Today I tested all parts of the website.

I checked the following items:

* The navigation links move to the correct sections.
* The buttons are clickable.
* The FAQ questions can be opened and closed.
* The mobile navigation menu works correctly.
* The cards are displayed correctly on different screen sizes.
* No text or content extends outside the mobile screen.

I also personalised the website by changing the project name, headings, colours and descriptions. I added information about the WECAN student team and its smart-home project.

This made the website different from the example project used in the tutorial.

---

## Day 7 – GitHub Pages Deployment

**Date:** [2026.7.30]

Today I created a GitHub repository for the project.

I uploaded the following project files to GitHub:

* `index.html`
* `style.css`
* `script.js`
* `learning-diary.md`

I opened the repository settings and enabled GitHub Pages. I selected the `main` branch and the root folder as the publishing source.

After waiting for the deployment process to finish, the website became available through a public GitHub Pages URL.

**GitHub Repository:** [Add Your Repository URL]

**Published Website:** [Add Your GitHub Pages URL]

I opened the published website and tested the navigation links, mobile menu and responsive layout again.

---

## Final Reflection

Through this project, I learned the basic roles of HTML, CSS and JavaScript.

HTML creates the content and structure of a webpage. CSS controls the colours, spacing, layout and responsive appearance. JavaScript can be used to add interactive functions, such as opening and closing a mobile navigation menu.

The most useful part of this project was learning how HTML and CSS work together. I also gained practical experience with Flexbox, CSS Grid, media queries, responsive navigation and website deployment.

The most difficult part was understanding how different files are connected. For example, the CSS and JavaScript files must use the correct paths in the HTML file. Testing the website after every change helped me find and solve problems.

If I continue developing this website, I would like to add real project images, information about the five team members, a working contact form and more details about the smart-home system.

Overall, this project gave me a basic understanding of how to design, test and deploy a responsive website.
