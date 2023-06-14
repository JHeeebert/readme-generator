// TODO: Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT), `
      break;
    case "GPL":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case "GPL 3.0":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case "Unlicense":
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
      break;
    case "None":
      return ``
      break;
    default:
      return ``
      break;
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `https://opensource.org/licenses/MIT`
      break;
    case "GPL":
      return `https://www.gnu.org/licenses/gpl-3.0`
      break;
    case "GPL 3.0":
      return `https://www.gnu.org/licenses/gpl-3.0`
      break;
    case "Unlicense":
      return `https://unlicense.org/`
      break;
    case "None":
      return ``
      break;
    default:
      return ``
      break;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `This project is licensed under the MIT license.`;
      break;
    case "GPL":
      return `This project is licensed under the GNU General Public License v3.0.`;
      break;
    case "GPL 3.0":
      return `This project is licensed under the GNU General Public License v3.0.`;
      break;
    case "Unlicense":
      return `This project is licensed under the Unlicense.`;
      break;
    case "None":
      return ``
      break;
    default:
      return ``
      break;
  }
  console.log(license);
  console.log(renderLicenseSection(license));
  console.log(renderLicenseLink(license));
  console.log(renderLicenseBadge(license));
}

// Generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `#  ${data.projectName} 📌
  ##  Description 📈
  ${data.description}
  ## Table of Contents 📓
  1️⃣ [Installation](#installation) 💻 <br>
  2️⃣ [Usage](#usage) 📎 <br>
  3️⃣ [License](#license)
      ${data.license} 📂 <br>
  4️⃣ [Contributions](#contributions) 🔍 <br>
  5️⃣ [Tests](#tests) ⌛ <br>
  6️⃣ [Questions](#questions) ☎️💻📱 <br>

  ## Installation 💻
  ${data.installation}
  ## Usage 📎
  ${data.usage}
  ## License 📂
  ${data.license}
  ## Contributions 🔍
  ${data.contributions}
  ## Tests ⌛
  ${data.tests}
  ## Questions ☎️💻📱
  If you have any questions about the repo, open an issue or contact me directly at 📧 ${data.email} 📧. You can find more of my work at 🔖 [${data.userName}](https://github.com/${data.userName}/) 🔖. 
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