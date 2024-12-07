# Cookts

Effortless live compiling as well as reloading for TypeScript.

## Description

CookTS is a simple setup for live reloading TypeScript and JavaScript files using `nodemon` and `ts-node`. It allows you to develop your TypeScript projects with ease, automatically recompiling and restarting the application when changes are detected.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Install the dependencies:
   ```sh
   npm install
   ```

### Usage

2.To start the application with live reloading,

If your file path is src/index.ts
run:

```sh
npx cookts
```

else:

```sh
npx cookts file_name.ts
```

or

```sh
npx cookts dir/file_name.ts
```
