// renders the license badge for the user
function renderLicenseBadge(license) {
  return license ? `[![License](https://img.shields.io/badge/license-${license}-blueviolet.svg)]` : "";
}

// renders the license link for the user
function renderLicenseLink(license) {
  return license ?  `[license](https://img.shields.io/badge/license-${license}-blueviolet.svg)` : "";
}

// renders the license section that is then added to generateMarkdown()
function renderLicenseSection(license) {
  return license ? ((renderLicenseBadge(license)) + (renderLicenseLink(license)))  : "";
}

// generates the markdown for the README with data from the questions
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

  ${data.installation}
  
  ## Usage
  
  ${data.usage}

  ## License

  This project is licensed under the ${renderLicenseSection(data.license)}.

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run the following command:

  ${data.test}
  
  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.Github} or (https://github.com/${data.Github}/).

---`
}

module.exports = generateMarkdown;