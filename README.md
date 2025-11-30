# TypeScript Build Step

This is a minimal TypeScript project setup with a build step designed for Node.js applications. It includes:

## Features

- TypeScript compilation (with tsc)
- Clean build step using rimraf
- Environment variable support via dotenv
- Example environment file (example.env)

## Project Structure
```
typescript-build-step/
├── dist/                   # Output directory for compiled TypeScript files
├── node_modules/           # Installed npm packages
├── src/                    # Source directory containing all TypeScript code
│ ├── types/                # Migration files for database changes
│ │ └── env.d.ts            # Configuration for NeonDB (serverless PostgreSQL)
│ └── app.ts/               # TypeScript type definitions (if needed)
├── .gitignore              # Files to exclude from Git tracking
├── example.env             # Example environment variables file
├── package-lock.json       # Locks the versions of installed npm packages
├── package.json            # Defines project dependencies and npm scripts
├── README.md               # Project documentation
└── tsconfig.json           # TypeScript configuration file

```

## Getting Started

### Prerequisites

- Node.js (v22.13.1 or higher)
- npm (11.1.0 or higher)

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/BradleyParkerDev/typescript-build-step.git
    cd typescript-build-step
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up your environment variables:**
    - Create a .env file in the root directory.

    - Add the following variables:

    ```env
    PORT=3000
    ```

4. **Build the application:**

    ```sh
    npm run build
    ```

5. **Run the application:**

    ```sh
    npm run start
    ```

## Available Scripts

| Script                      | Description                                |
|------------------------------|--------------------------------------------|
| `npm run build` | Compiles TypeScript (tsc) and removes old build files (rimraf). |
| `npm run start`        | Runs the output in the dist directory.|


## Dependencies

- **dotenv**: Loads environment variables from a `.env` file into `process.env`
- **rimraf**: A deep deletion module for node (like rm -rf)

## Dev Dependencies

- **@types/node**: TypeScript definitions for Node.js.
- **tsx**: Fast TypeScript execution for Node.js.
- **typescript**: TypeScript language

## Contributing

This project is not actively seeking contributions, but if you have ideas or improvements, feel free to open an issue or submit a pull request.

## License

This project is open for personal and educational use. No specific license applies.
