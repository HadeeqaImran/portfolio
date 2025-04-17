#!/bin/bash

# Move into the server directory
cd apps/server

# Init node project
npm init -y

# Install dependencies
npm install express mongoose cors dotenv
npm install --save-dev nodemon eslint prettier

# Create folder structure
mkdir -p src/{config,constants,middlewares,models,routes}

# Create entry files
touch src/index.js src/server.js

# Environment files
touch .env .env.development .env.production

# Prettier config
cat <<EOL > .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "es5"
}
EOL

echo "node_modules" > .prettierignore

# ESLint config (minimal for Node)
cat <<EOL > eslint.config.mjs
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      semi: "error",
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
EOL

# Git ignore
cat <<EOL > .gitignore
node_modules
.env
EOL

# Basic Express server.js
cat <<EOL > src/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/index.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

export default app;
EOL

# Entry point to start server
cat <<EOL > src/index.js
import app from './server.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});
EOL

# Routes index
cat <<EOL > src/routes/index.js
import { Router } from 'express';

const router = Router();

// Example: router.use('/projects', projectsRoutes);

router.get('/', (req, res) => {
  res.json({ message: 'API is working!' });
});

export default router;
EOL

# Add nodemon dev script
npm pkg set scripts.dev="nodemon src/index.js"

echo "✅ Backend structure created successfully!"
