#!/usr/bin/env node

const { spawn } = require("child_process");

const runts = (cmd, args) => {
  return new Promise((resolve, reject) => {
    const ts = spawn(cmd, args, {
      stdio: "inherit",
      shell: true,
    });

    ts.on("close", (code) => {
      if (code !== 0) {
        reject(new Error(`Command failed with code ${code}`));
      }

      resolve();
    });
  });
};
const run_path = process.argv[2] || "src/index.ts";
runts("npx", ["tsc", "-b"])
  .then(() => {
    runts("npx", ["nodemon", "--exec", "npx tsc -b "]);
    runts("npx", ["nodemon", "--exec", "npx ts-node " + run_path]);
  })
  .catch((err) => {
    console.log(err);
  });
