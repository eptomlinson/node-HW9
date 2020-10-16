// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

Your github account name is ${data.git}

We will contact you at ${data.email} regarding our business at the business store.

Product description: ${data.description}

Installation instructions: ${data.install}

Usage information: ${data.use}

Contribution guidelines: ${data.contrib}

Test instructions: ${data.test}
`;
}

module.exports = generateMarkdown;
