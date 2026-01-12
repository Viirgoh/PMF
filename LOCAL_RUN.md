# Local Run Commands

This document provides instructions for running the PMF project locally.

## Prerequisites

Make sure you have Node.js and npm installed on your system.

## Installation

First, install the project dependencies:

```bash
npm install
```

## Available Commands

### Development Mode (Frontend)

Run the development server with hot-reload:

```bash
npm run dev
```

This will start the Vite development server. The application will typically be available at `http://localhost:5173`

### Build for Production

Create a production build:

```bash
npm run build
```

The build output will be generated in the `dist` folder.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

This serves the production build from the `dist` folder for testing before deployment.

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## Quick Start

For first-time setup:

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open your browser to the URL shown in the terminal (usually `http://localhost:5173`)

## Notes

- This is a frontend-only React application built with Vite
- No backend server is included in this project
- The development server includes hot module replacement (HMR) for fast development
