# Mongoose Setup

This is a TypeScript-based Mongoose setup for MongoDB. It includes a simple connection helper, example models, and a seed script to prove out connectivity.

## Overview

This project is built with TypeScript and Mongoose to provide a clean starting point for MongoDB-backed Node apps. It includes:

- Mongoose connection helper (Atlas-ready)
- Simple example models (Users, UserSessions, SessionCronJobs)
- Basic seed flow to create a test user
- TypeScript configuration for strict typing

## Features

- Mongoose ODM – Schema-based modeling for MongoDB.
- Atlas-friendly – Uses SRV URIs and `dbName` option.
- TypeScript Support – Strict typing for models and connection helpers.
- Seed example – Creates a fake user to verify the connection and collections.

## Project Structure

```
mongoose-setup/
├── dist/                    # Compiled TypeScript output
├── node_modules/            # Installed npm packages
├── src/                     # Source TypeScript
│   ├── app.ts               # Entry point / seed script
│   ├── database/
│   │   ├── mongoose.ts      # Mongoose connection helper
│   │   └── models/          # Mongoose models
│   │       ├── Users.ts
│   │       ├── UserSessions.ts
│   │       └── SessionCronJobs.ts
│   └── types/               # Custom type definitions
├── .gitignore               # Git ignores
├── examlple.env             # Example environment variables
├── package-lock.json        # Locked dependency versions
├── package.json             # Dependencies and scripts
├── README.md                # Project documentation
└── tsconfig.json            # TypeScript configuration

```

## Getting Started

### Prerequisites

- Node.js (v18 or higher for `crypto.randomUUID`)
- npm (latest recommended)
- MongoDB Atlas (or another reachable MongoDB instance)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/BradleyParkerDev/mongoose-setup.git
   cd mongoose-setup
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up your environment variables:**

   - Create a `.env` file in the root directory.
   - Add the following variables:

   ```env
   PORT=3000
   ATLAS_URI=mongodb+srv://<username>:<password>@cluster0.lsmpwqy.mongodb.net/?appName=Cluster0
   MONGO_DATABASE=mongoose_setup
   ```

4. **Build the project:**

   ```sh
   npm run build
   ```

5. **Run the seed script (connects and inserts a fake user):**

   ```sh
   npm start
   ```

   This connects to MongoDB, creates a test user (if not already inserted), and then exits.

## Available Scripts

| Script          | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| `npm run build` | Compiles TypeScript (tsc) and removes old build files (rimraf). |
| `npm start`     | Builds then runs `dist/app.js` (connects and seeds a test user).|

## Dependencies

- **dotenv**: Loads environment variables from `.env`.
- **mongoose**: MongoDB object modeling tool for Node.js.
- **rimraf**: Cleans the `dist` directory before builds.

## Dev Dependencies

- **@types/node**: TypeScript definitions for Node.js.
- **tsx**: Fast TypeScript runner (optional utility).
- **typescript**: TypeScript language tooling.

## Contributing

This project is not actively seeking contributions, but feel free to open an issue or submit a PR with improvements.

## License

This project is open for personal and educational use. No specific license applies.
