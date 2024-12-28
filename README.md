# Next.js 15:  Mixing Legacy and App Directory Features

This repository demonstrates a potential issue in Next.js 15 when combining features from the legacy `pages` directory (like `getStaticProps`) with the new `app` directory's routing system.  Attempting to use functions designed for the pages directory within a structure that also uses the app directory can lead to unexpected results or errors.

## Reproducing the Bug

The `bug.js` file shows how using `getStaticProps` in a page route in the `pages` directory can cause conflicts or unexpected behavior when the same route is also handled (or shadowed) by a route within the `app` directory.  Run the application to observe this.

## Solution

The `bugSolution.js` file demonstrates a potential workaround which involves careful separation of concerns. This means completely separating the routes from the two approaches.  Either migrate all relevant pages to the `app` directory, utilizing its data fetching mechanisms, or fully isolate the `pages` directory routes to avoid conflicts. 