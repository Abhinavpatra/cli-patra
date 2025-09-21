#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const figlet = require("figlet");
const gradient = require("gradient-string");

// Clear terminal
console.clear();

// Loading Message
console.log(chalk.green.bold("  ✔ Loading Abhinav's details\n"));

// ASCII Art Banner using figlet and gradient
console.log(
  gradient.cristal(
    figlet.textSync("Welcome", { horizontalLayout: "default" })
  )
);

// Title
console.log(
  gradient.rainbow(
    figlet.textSync("Abhinav Patra", { horizontalLayout: "full" })
  )
);

// Main Profile Box
const mainBox = boxen(
  `
${chalk.bold("Name")}          - Abhinav Patra
${chalk.bold("Role")}          - Software Developer
${chalk.bold("Website")}       - https://abhinavpatra.is-a.dev
${chalk.bold("GitHub")}        - https://github.com/abhinavpatra
${chalk.bold("LinkedIn")}      - https://linkedin.com/in/abhinavpatra1st
${chalk.bold("X (Twitter)")}   - @PatraBuilds
${chalk.bold("npm")}           - https://npmjs.com/~abhinavpatra
${chalk.bold("Email")}         - patraabhinav12@gmail.com
`,
  {
    padding: 1,
    borderStyle: "round",
    borderColor: "cyan",
    margin: 1,
  }
);
console.log(mainBox);

// Outro
const outro = boxen(
  chalk.green.bold(
    "🚀 Open for internships and freelance work.\nThanks for checking out my CLI!"
  ),
  {
    padding: 1,
    borderStyle: "double",
    borderColor: "green",
    margin: 1,
  }
);
console.log(outro);

// Skills Header using figlet and gradient
console.log(
  gradient.pastel(
    figlet.textSync("Skills", { horizontalLayout: "default" })
  )
);

// Skills Box
const skillsBox = boxen(
  `
${chalk.bold("Languages")}        - Java, C, C++, Python, JavaScript, TypeScript
${chalk.bold("Frameworks")}       - React, Flask
${chalk.bold("Technologies")}     - Express, Node.js, WebSocket, Prisma
${chalk.bold("Databases")}        - MongoDB, PostgreSQL, MySQL
${chalk.bold("Others")}           - Docker, Linux, Git
`,
  {
    padding: 1,
    borderStyle: "round",
    borderColor: "magenta",
    margin: 1,
  }
);
console.log(skillsBox);
