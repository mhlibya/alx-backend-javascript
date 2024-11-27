//asking the user and answering
process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("data", (data) => {
  const name = data.toString().trim(); // Trim whitespace and newline characters
  process.stdout.write(`Your name is: ${name}\n`);
  process.exit();
});

process.on("exit", () => {
  console.log("This important software is now closing");
});
