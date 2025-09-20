# sporty-group-sports-leagues

Sport Group Sport League Assignment by Mohammadreza Yousefzadeh

## Video Reacording

A screen recording of myself building this project in 90+7 minutes.

## Approach

The approach chosen here is:

- Make it work
- Then make it work properly (Standardize)
- Improve code quality (Refactor)

## Tech stack used

- Vue: As the main framework I have worked with.
- Tailwind: To speed up the development for styling.
- Pinia: Default state management tool for Vue 3
- TypeScript: More reliable code and to avoid any runtime errors and surprizes
- Unit tests (Vitest + Vue Test Utils): Ensuring proper code functionality

## Areas of AI usage

- Asked Claude AI when response data was not rendering in the component
- Asked Claude AI when needed a unique list of sports

## Further enhancements and plans

- API calls caching implementation
- Perfomrance optimization like lazy loading, infinite scroll, debounce in search, save search parameters in URL
- Code refactoring
- Create a dedicated route (page) for each leage to display image with possibility going back to the search.
- UI improvement, Skeleton loders, Better informative message
- Write Unit tests

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
