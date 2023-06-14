// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT), `
      break;
    case "GPL":
      return `[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)`
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
// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `https://opensource.org/licenses/MIT`
      break;
    case "GPL":
      return `https://www.gnu.org/licenses/gpl-2.0`
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
// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `This project is licensed under the MIT license.`;
      break;
    case "GPL":
      return `This project is licensed under the GNU General Public License v2.0.`;
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
}
const gifImage = (relativePath) =>
  relativePath ? `![Gif Image](${relativePath})` : '';

// Generate markdown for README.md
function generateMarkdown(data) {
  console.log(data);
  return `
  #  ${data.projectName} 📌
  ##  Description 📈
  [![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
  [![Visual Studio](https://badgen.net/badge/icon/visualstudio?icon=visualstudio&label)](https://visualstudio.microsoft.com)
  [![npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://npmjs.com/)
  [![JavaScript](https://badgen.net/badge/icon/javascript?icon=javascript&label)](https://www.javascript.com/)
  [![Node.js](https://badgen.net/badge/icon/nodejs?icon=nodejs&label)](https://nodejs.org/) <br>
  ${data.description} 
  ## Table of Contents 📓
  1️⃣ [Installation](#installation) 💻 <br>
  2️⃣ [Usage](#usage) 📎 <br>
  3️⃣ [License](#license) 📂 <br>
  4️⃣ [Contributing](#contributing) 🔍 <br>
  5️⃣ [Tests](#tests) ⌛ <br>
  6️⃣ [Questions](#questions) ☎️💻📱 <br>
  ## Installation 💻
  ${data.installation}
  ## Usage 📎
  ${data.usage}
  ${gifImage(data.gifImage)}
  ## License 📂
  ${renderLicenseSection(data.license)} <br> 
  ${renderLicenseLink(data.license)} <br> 
  ${renderLicenseBadge(data.license)} 
  ## Contributing 🔍
  [Contributors Covenant](https://www.contributor-covenant.org/) <br>
  [![Contributors over time](https://contributor-graph-api.apiseven.com/contributors-svg?chart=contributorOverTime&repo=Jheeebert/readme-generator)](https://www.apiseven.com/en/contributor-graph?chart=contributorOverTime&repo=Jheeebert/readme-generator)
  <br>
  ${data.contributing}
  ## Tests ⌛
  [![GitHub commits](https://badgen.net/github/commits/Jheeebert/readme-generator)](https://GitHub.com/Jheeebert/readme-generator/commit/)
  [![GitHub latest commit](https://badgen.net/github/last-commit/Jheeebert/readme-generator)](https://GitHub.com/Jheeebert/readme-generator/commit/)
  [![GitHub forks](https://img.shields.io/github/forks/Jheeebert/readme-generator.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/Jheeebert/readme-generator/network/)<br>
  ${data.tests}
  ## Questions ☎️💻📱
  If you have any questions about the repo, open an issue or contact me directly at 📧 ${data.email} 📧. <br>
  You can find more of my work at 🔖 [${data.userName}](https://github.com/${data.userName}/) 🔖. 
  `;
}
module.exports = generateMarkdown;