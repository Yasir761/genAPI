#!/usr/bin/env node
import { Command } from "commander";
import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const program = new Command();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function scaffold(projectName, framework, apiType) {
  const frameworkMap = {
    "Express.js": "express",
    express: "express",
  };

  const apiMap = {
    REST: "rest",
    GraphQL: "graphql",
    rest: "rest",
    graphql: "graphql",
  };

  const templateDir = path.join(
    __dirname,
    "../templates",
    frameworkMap[framework],
    apiMap[apiType]
  );

  const targetDir = path.join(process.cwd(), projectName);

  try {
    await fs.copy(templateDir, targetDir);
    console.log(
      `✅ ${framework} ${apiType} API scaffolded successfully in "${projectName}"`
    );
  } catch (err) {
    console.error("❌ Error copying template:", err.message);
  }
}

async function runInteractive() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Project name:",
      default: "my-api",
    },
    {
      type: "list",
      name: "framework",
      message: "Which framework do you want to use?",
      choices: ["Express.js"],
    },
    {
      type: "list",
      name: "apiType",
      message: "Do you want REST API or GraphQL?",
      choices: ["REST", "GraphQL"],
    },
  ]);

  const { projectName, framework, apiType } = answers;
  await scaffold(projectName, framework, apiType);
}

program
  .name("genapi")
  .description("Generate REST or GraphQL API boilerplates")
  .argument("[project-name]", "Name of the project")
  .option("--framework <framework>", "Framework to use (express)")
  .option("--type <type>", "API type (rest, graphql)")
  .action(async (projectName, options) => {
    if (options.framework && options.type && projectName) {
      // Non-interactive (flags mode)
      await scaffold(projectName, options.framework, options.type);
    } else {
      // Interactive mode
      await runInteractive();
    }
  });

program.parse();
