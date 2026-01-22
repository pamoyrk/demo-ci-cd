# Demo CI/CD Project

This is a sample project demonstrating GitHub Actions CI/CD pipeline.

## Features

- ✅ Automated Testing on Pull Requests
- ✅ Automated Linting & Building
- ✅ Automatic Deployment to Production
- ✅ Build Artifacts Management

## Local Setup

```bash
# Install dependencies
npm install

# Run the application
npm start

# Run tests
npm test

# Run linter
npm run lint

# Build project
npm run build
```

## GitHub Actions Workflow

The project includes a complete CI/CD pipeline that:

1. **Triggers on**: Push to main branch, Pull Requests, and Manual runs
2. **CI Stage**:
   - Checks out code
   - Sets up Node.js environment
   - Installs dependencies
   - Runs linting
   - Runs tests
   - Builds the project

3. **CD Stage** (Production Deployment):
   - Only runs on pushes to main branch
   - Waits for CI to complete
   - Downloads build artifacts
   - Deploys to GitHub Pages

## How to Use

### Step 1: Push to GitHub

```bash
cd demo-ci-cd
git init
git add .
git commit -m "Initial commit: Demo CI/CD project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/demo-ci-cd.git
git push -u origin main
```

### Step 2: Monitor GitHub Actions

1. Go to your GitHub repository
2. Click on the **Actions** tab
3. Watch your workflow run in real-time

### Step 3: Create a Pull Request

1. Create a new branch: `git checkout -b feature/test`
2. Make changes to the code
3. Push and create a PR
4. See CI pipeline run automatically

### Step 4: Deploy

1. Merge the PR to main
2. Watch the deployment job automatically run
3. Your app is deployed to GitHub Pages!

## Environment Variables

To add secrets (API keys, tokens) to your workflow:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add your secrets (e.g., `GITHUB_TOKEN` is auto-provided)
4. Use in workflow: `${{ secrets.SECRET_NAME }}`

## Customization

- Edit `.github/workflows/ci.yaml` to change CI/CD behavior
- Modify `package.json` scripts for your project needs
- Add more test files in `src/tests/`
