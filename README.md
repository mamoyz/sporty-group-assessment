# sporty-group-sports-leagues

Sport Group Sport League Assignment by Mohammadreza Yousefzadeh

## Video Recording

A screen recording of me building this project in 90+7 minutes.

[https://www.youtube.com/watch?v=E1gX8VdHFUY](https://www.youtube.com/watch?v=E1gX8VdHFUY)

[![Everything Is AWESOME](https://gcdnb.pbrd.co/images/FBsEAcSDqFnL.png)](https://youtu.be/E1gX8VdHFUY 'Sporty Group - Vue Assessment')

## Working Demo on Vercel

[https://sporty-group-assessment.vercel.app/](https://sporty-group-assessment.vercel.app/)

## Approach

The approach chosen here is:

- Make it work
- Then make it work properly (Standardize)
- Improve code quality (Refactor)

## Tech stack used

- Vue: As the main framework I have worked with.
- Tailwind: To speed up the development for styling.
- Pinia: Default state management tool for Vue 3
- TypeScript: More reliable code and to avoid any runtime errors and surprises
- Unit tests (Vitest + Vue Test Utils): Ensuring proper code functionality

## Areas of AI usage

- Asked Claude AI when response data was not rendering in the component
- Asked Claude AI when a unique list of sports

## Design Decision

- Completely made up by myself. I have prior UI-UX experience.

## Further enhancements and plans

- API calls caching implementation
- Better UX, debounce in search, save search parameters in URL, Option to clear (reset) search filters.
- Performance optimization like lazy loading, infinite scroll,
- Code refactoring, fix lint and TypeScript errors, implement strict typing
- Create a dedicated route (page) for each league to display an  image with the possibility of going back to the search.
- UI improvement, Skeleton loaders, Better informative message
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
