# Yarn Web Application

Welcome to the Yarn Web Application - a magical place where children's voices
bring stories to life!

## Overview

This application allows young users to record their voice, which is then sent to
an AI that generates a short, magical story based on their words. It's a fun and
interactive way for kids to engage with technology and unleash their creativity.

## Features

- Voice recording on the browser.
- Integration with OpenAI to transcribe voice to text and generate stories.
- Stylish and responsive UI built with Styled Components.
- ~~Server-side handling of OpenAI API calls for enhanced security.~~

## Getting Started

To get the application running locally:

1. Clone the repository.
2. Install the dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

Navigate to `http://localhost:3000` to view the application.

## Scripts

- `yarn dev`: Runs the application in development mode.
- `yarn build`: Builds the application for production.
- `yarn start`: Starts a production server.
- `yarn lint`: Runs the linter to check for issues.

## Dependencies

- `next`: The React framework for production.
- `react` & `react-dom`: For building the user interface.
- `styled-components`: For styling components.
- `styled-normalize`: For normalizing default browser styling.
- `openai`: Official OpenAI client for JavaScript.
- `@vercel/analytics`: Vercel's analytics library for Next.js.

## Dev Dependencies

- `typescript`: Adds static type checking to JavaScript.
- `eslint`: Statically analyzes your code to quickly find problems.
- `@types/node`, `@types/react`, `@types/react-dom`: Type definitions for
  Node.js and React.
- `babel-plugin-styled-components`: A plugin for Babel that improves the
  development experience with Styled Components.

## Contributing

We welcome contributions to make this application even more magical! If you're
interested in helping, feel free to open an issue or create a pull request.

## License

This project is open-sourced software licensed under the MIT license.
