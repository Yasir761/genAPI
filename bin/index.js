#!/usr/bin/env node
import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
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
      choices: ["Express.js"], //  Express.js for now
    },
  ]);

  const { projectName, framework } = answers;

  // Map framework names to folder names
  const frameworkMap = {
    "Express.js": "express", // ✅ only one template
  };

  const templateDir = path.join(__dirname, "../templates", frameworkMap[framework]);
  const targetDir = path.join(process.cwd(), projectName);

  try {
    await fs.copy(templateDir, targetDir);
    console.log(`✅ ${framework} API scaffolded successfully in "${projectName}"`);
  } catch (err) {
    console.error("❌ Error copying template:", err.message);
  }
}

main();
