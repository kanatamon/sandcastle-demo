# Sandcastle Demo

A demonstration project showcasing the **Sandcastle** workflow for autonomous software development. This project uses [Elysia.js](https://elysiajs.com/) as a simple demo application to illustrate how Sandcastle automates issue resolution, testing, and code reviews.

## What is Sandcastle?

**Sandcastle** is an AI-powered development workflow tool that enables "AFK" (away from keyboard) development. It orchestrates Claude AI agents to:

- **Plan**: Analyze open GitHub issues and create a dependency graph
- **Execute**: Implement fixes and features in isolated branches
- **Review**: Automatically review code changes
- **Merge**: Integrate completed work back into the main branch

Instead of manually writing code, you create GitHub Issues describing what needs to be done, and Sandcastle uses AI agents to implement the solutions autonomously.

## Running the Elysia Application

The core application is a simple RESTful API built with Elysia.js.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Development

Start the development server with hot reloading:

```bash
npm run dev
```

### Production

Run the application in production mode:

```bash
npm start
```

The server will start on `http://localhost:3000`.

### Testing

Run the test suite:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

### Type Checking

Verify TypeScript types:

```bash
npm run typecheck
```

### Full CI Check

Run both type checking and tests (same as CI):

```bash
npm run ci
```

## Using Sandcastle

### Prerequisites

- Docker (required for isolated sandboxes)
- GitHub CLI (`gh`) authenticated with your repository
- Claude API key set in `.sandcastle/.env` (copy from `.sandcastle/.env.example`)

### Running Sandcastle

Execute the Sandcastle workflow:

```bash
npm run sandcastle
```

This command will:
1. Scan all open GitHub issues
2. Build a dependency graph to determine which issues can be worked on
3. For each unblocked issue:
   - Create an isolated Docker sandbox
   - Spin up a Claude agent to implement the solution
   - Run another agent to review the code
4. Merge all completed branches into your current branch

### How It Works

Sandcastle uses a **Parallel Planner with Review** template that runs a four-phase loop:

1. **Plan Phase**: An Opus agent analyzes open issues and outputs a plan with unblocked issues
2. **Execute + Review Phase**: For each issue, creates a sandbox where:
   - An implementer agent writes code and makes commits
   - A reviewer agent performs code review on the same branch
   - All issue pipelines run concurrently
3. **Merge Phase**: A single agent merges all completed branches into the current branch
4. **Repeat**: The loop continues until no more issues can be resolved

## Development Workflow (AFK Mode)

This repository demonstrates an "away from keyboard" (AFK) development workflow:

### 1. Create Issues

Define work as GitHub Issues. Be specific about:
- What needs to be implemented
- Any requirements or constraints
- Expected behavior

### 2. Run Sandcastle

Execute `npm run sandcastle` and let the AI agents work autonomously.

### 3. Review Results

After Sandcastle completes:
- Check the merged code changes
- Review the commits (prefixed with `RALPH:`)
- Run tests to verify everything works
- Close completed issues or provide feedback

### 4. Iterate

- Create new issues for follow-up work
- Add comments to issues if AI agents need clarification
- Run Sandcastle again to continue the cycle

## Project Structure

```
.
├── .github/workflows/    # CI/CD configuration
├── .sandcastle/          # Sandcastle configuration and prompts
│   ├── main.mts         # Orchestration script
│   ├── plan-prompt.md   # Planning phase instructions
│   ├── implement-prompt.md  # Implementation instructions
│   ├── review-prompt.md     # Review phase instructions
│   └── merge-prompt.md      # Merge phase instructions
├── src/
│   ├── index.ts         # Main Elysia application
│   └── index.test.ts    # Test suite
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Key Features

- **TypeScript**: Full type safety with strict mode enabled
- **Elysia.js**: Fast and ergonomic web framework
- **Vitest**: Modern testing framework
- **GitHub Actions**: Automated CI pipeline
- **Sandcastle**: AI-powered autonomous development

## Contributing

This project uses the AFK workflow - create a GitHub Issue describing the work, then run Sandcastle to have AI agents implement it!

## License

ISC
