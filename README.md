# Advanced React for Enterprise

This monorepo contains multiple packages and playgrounds for building and testing advanced React components and styles. It is designed for enterprise-level applications with a focus on modularity, scalability, and best practices.

## Packages

- [@akashalmujahidaljabali/foundation](packages/foundation/README.md): Foundational utilities and shared code.
- [@akashalmujahidaljabali/react](packages/react/README.md): React components and widgets.
- [@akashalmujahidaljabali/scss](packages/scss/README.md): SCSS utilities and styles.

## Playgrounds

- [React Playground](playgrounds/react): A testing ground for React components.

## Scripts

- `yarn bootstrap`: Bootstraps the monorepo using Lerna.
- `yarn build`: Builds all packages.
- `yarn dev`: Runs development mode for all packages.
- `yarn lint`: Lints all packages.
- `yarn test`: Runs tests for all packages.

## Tools and Features

- **Lerna**: For managing monorepo packages.
- **Husky**: For Git hooks.
- **Commitlint**: For enforcing commit message conventions.
- **Storybook**: For developing and testing UI components.
- **Chromatic**: For visual regression testing.

## License

This project is licensed under the MIT License.
