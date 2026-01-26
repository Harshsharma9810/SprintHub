# Step-1: Create Next app

# Step-2: # connect the repository to github
Step 1: Initialize Git : git init
Step 2: optional: git status
Step 3: git add . or  git add filename.js
Step 4: git commit -m "Initial commit"
Step 5: Create New Repository on GitHub
Step 6: Connect Local Repo to GitHub Remote:  Run:git remote add origin "https Remote url"
Verify: git remote -v
git branch -M main 
git push -u origin main

# step-3 : 
Step 1 — Install : npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier

What these do:
eslint → code linting

prettier → formatting

eslint-config-prettier → disables conflicting ESLint rules

eslint-plugin-prettier → runs prettier inside eslint

✅ Step 2 — Create .eslintrc.json

In root:

📁 .eslintrc.json

{
  "extends": [
    "next/core-web-vitals",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "no-unused-vars": "warn",
    "prefer-const": "error",
    "no-console": "warn",
    "eqeqeq": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}

Why This Setup Is Interview-Grade

You're using:

✅ Next.js performance rules

✅ Prettier integration

✅ Custom quality rules

Interview answer:

"I extended Next core web vitals rules and added Prettier integration to maintain formatting consistency and prevent performance anti-patterns."

✅ Step 3 — Create Prettier Config

📁 .prettierrc

{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}

✅ Step 4 — Ignore Files You Don’t Want Formatted

📁 .eslintignore

node_modules
.next
dist
build


📁 .prettierignore

.next
node_modules
dist
build

✅ Step 5 — Add Scripts To package.json

Open package.json and update scripts:

"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "format": "eslint . --fix && prettier --write ."
}


Now:

Run formatter:
npm run format


