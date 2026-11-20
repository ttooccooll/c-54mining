# C-54 HomeTech website

Live at https://www.c54hometech.com, hosted on Vercel.

## Editing the site

- **Prices, packages, miners, FAQs, service area:** `src/content/site.js`. Pages, structured data, and the sitemap all read from it.
- **Your name and the reply-time promise:** `owner` and `replyTime` at the top of `src/content/site.js`. The site speaks as "I" throughout, and a test fails if a page slips back to "we".
- **Service area:** each state in `SERVICE_AREA` lists its counties, the towns shown under each county, and the few cities shown beside the region name on a phone. Adding a county or town there updates the page, the quote form's county list and the structured data.
- **Heater prices:** the Antminer S9 price is `S9_PRICE_SATS` in `src/content/site.js`; it shows on the S9 card, the home page and the heater FAQ. For any other miner, add `price: 'From $199'` (any text) in `MINERS` and it shows on that card.
- **Learn articles:** `src/content/articles.js`. Each one gets its own page at `/learn/<slug>` and a sitemap entry automatically.
- **Page titles and descriptions:** the `<Seo>` element at the top of each file in `src/pages/`.

## How the build works

`npm run build` runs the normal Create React App build, then `scripts/prerender.js` renders every route to its own HTML file (`build/about/index.html`, etc.) with that page's title, description, canonical URL, social preview, and structured data, and writes `build/sitemap.xml` and `build/404.html`. Search engines, AI crawlers, and link previews get real content without running JavaScript; the browser then hydrates the page as usual.

`vercel.json` serves each route's HTML, sends unknown URLs to the not-found page, and permanently redirects old URLs (`/miners`, `/blog`, `/pos`).

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# c-54mining
