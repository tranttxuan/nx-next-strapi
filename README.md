

# NextStrapi

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Create a new workspace:
`npx create-nx-workspace@latest`
next-strapi/
├── apps/
    ├── frontend/
    ├── strapi/


## Generate an application

Run `nx g @nrwl/next:app frontend` to generate an application next.


## Generate an application Strapi

`npm install -D @nx-extend/strapi`
`nx g @nx-extend/strapi:init`

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@next-strapi/mylib`.

## Development server

Run `nx serve frontend` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=frontend` to generate a new component.

## Build

Run `nx build frontend` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test frontend` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e frontend` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## Setup Tailwind with Next.js

[TailwindCSS docs page already has a guide](https://tailwindcss.com/docs/guides/nextjs)
`yarn add tailwindcss@latest postcss@latest autoprefixer@latest`
`cd apps/frontend`
`npx tailwindcss init -p`


# Domain-Driven Hexagon

Mainly based on repository [Domain-Driven Design (DDD)](https://github.com/Sairyss/domain-driven-hexagon#repositories)