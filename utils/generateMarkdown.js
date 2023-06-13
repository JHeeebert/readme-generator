// TODO: Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }
  else if (license === "APACHE 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  }
  else if (license === "GPL 3.0") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  }
  else if (license === "BSD 3") {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
  }
  else if (license === "None") {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`
  }
  else if (license === "APACHE 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  else if (license === "GPL 3.0") {
    return `https://www.gnu.org/licenses/gpl-3.0`
  }
  else if (license === "BSD 3") {
    return `https://opensource.org/licenses/BSD-3-Clause`
  }
  else if (license === "None") {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `This project is licensed under the MIT license.`
  }
  else if (license === "APACHE 2.0") {
    return `This project is licensed under the Apache 2.0 license.`
  }
  {
    if (license === "GPL 3.0") {
      return `This project is licensed under the GPL v3 license.`
    }
    else if (license === "BSD 3") {
      return `This project is licensed under the BSD 3 license.`
    }
    {
      if (license === "None") {
        return ``
      }
    }
  }
  console.log(license);
}
// Generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)

  ##Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions regarding to the repo, open an issue or contact me directly at [${data.email}}(mailto:$(data.email)). Find more of my work at [${data.github}](https://github.com/${data.username}).
  `;
}

module.exports = generateMarkdown;



// [![Generic badge](https://img.shields.io/badge/<SUBJECT>-<STATUS>-<COLOR>.svg)](https://shields.io/)
// [![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/)
// [![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)
// [![Visual Studio](https://badgen.net/badge/icon/visualstudio?icon=visualstudio&label)](https://visualstudio.microsoft.com)
// [![GitHub](https://badgen.net/badge/icon/github?icon=github&label)](https://github.com)
// [![GitLab issues open](https://badgen.net/gitlab/open-issues/gitlab-org/gitlab-runner)](https://gitlab.com/gitlab-org/gitlab-runner)
// [![GitLab latest release](https://badgen.net/gitlab/release/NickBusey/HomelabOS/)](https://gitlab.com/NickBusey/HomelabOS/-/releases)
// [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
// [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)