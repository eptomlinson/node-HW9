// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
Today was a great day, for today I did ${data.test}

Then at ${data.quiz} I went to the local fishing hole and caught a trout.
`;
}

module.exports = generateMarkdown;
