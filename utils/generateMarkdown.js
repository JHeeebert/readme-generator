// //Function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT), `
    case "GPL":
      return `[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)`
    case "GPL 3.0":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case "Unlicense":
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    case "None":
      return `NO LICENSE BADGE PROVIDED`
    default:
      return `NO LICENSE BADGE FOUND`
  }
}
// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `https://opensource.org/licenses/MIT`
    case "GPL":
      return `https://www.gnu.org/licenses/gpl-2.0`
    case "GPL 3.0":
      return `https://www.gnu.org/licenses/gpl-3.0`
    case "Unlicense":
      return `https://unlicense.org/`
    case "None":
      return `NO LICENSE LINK PROVIDED`
    default:
      return `NO LICENSE LINK FOUND`
  }
}
// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `This project is licensed under the MIT license.`
    case "GPL":
      return `This project is licensed under the GNU General Public License v2.0.`
    case "GPL 3.0":
      return `This project is licensed under the GNU General Public License v3.0.`
    case "Unlicense":
      return `This project is licensed under the Unlicense.`
    case "None":
      return `NO LICENSE PROVIDED`
    default:
      return `NO LICENSE FOUND`
  }
}
// Function that returns additional badges
// If there are no badges, return an empty string
function renderAdditionalBadges(Badges) {
  switch (Badges) {
    case "JavaScript":
      return `[![Generic badge](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](https://shields.io/)`
    case "Node.js":
      return `[![Generic badge](https://img.shields.io/badge/Node.js-ES6-green.svg)](https://shields.io/)`
    case "HTML":
      return `[![Generic badge](https://img.shields.io/badge/HTML-5-orange.svg)](https://shields.io/)`
    case "CSS":
      return `[![Generic badge](https://img.shields.io/badge/CSS-3-blue.svg)](https://shields.io/)`
    case "jQuery":
      return `[![Generic badge](https://img.shields.io/badge/jQuery-3.5.1-blue.svg)](https://shields.io/)`
    case "Bootstrap":
      return `[![Generic badge](https://img.shields.io/badge/Bootstrap-4.5.0-purple.svg)](https://shields.io/)`
    case "React":
      return `[![Generic badge](https://img.shields.io/badge/React-16.13.1-blue.svg)](https://shields.io/)`
    case "GitHub":
      return `[![Generic badge](https://img.shields.io/badge/GitHub-16.13.1-black.svg)](https://shields.io/)`
    case "npm":
      return `[![Generic badge](https://img.shields.io/badge/npm-6.14.5-red.svg)](https://shields.io/)`
    case "Express.js":
      return `[![Generic badge](https://img.shields.io/badge/Express.js-4.17.1-blue.svg)](https://shields.io/)`
    case "None":
      return `NO ADDITIONAL BADGES PROVIDED`
    default:
      return `NO ADDITIONAL BADGES FOUND`
  }
}
// Function to generate gif image for README.md
function usagePreview(relativePath) {
  return relativePath ? `![Usage Preview](${relativePath})` : ''
}

// Generate markdown for README.md
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.projectName} 📌
  ## Description 📈
  ${data.description} 
  ## Table of Contents 📓
  1️⃣ [Installation](#installation) 💻 <br>
  2️⃣ [Usage](#usage) 📎 <br>
  3️⃣ [License](#license) 📂 <br>
  4️⃣ [Badges](#badges) 🛡️ <br>
  5️⃣ [Contributing](#contributing) 🔍 <br>
  6️⃣ [Tests](#tests) ⌛ <br>
  7️⃣ [Questions](#questions) ☎️💻📱 <br>

  ## Installation 💻
  ${data.installation}

  ## Usage 📎
  ${data.usage} <br>
  ${usagePreview(data.gifImage)}

  ## License 📂
  ${renderLicenseSection(data.license)} <br> 
  ${renderLicenseLink(data.license)} <br> 
  ${renderLicenseBadge(data.license)} 

  ## Badges 🛡️

  ## Contributing 🔍
  [Contributors Covenant](https://www.contributor-covenant.org/) <br>
  <br>
  ${data.contributing}

  ## Tests ⌛
  <br>
  ${data.tests}

  ## Questions ☎️💻📱
  If you have any questions about the repo, open an issue or contact me directly at 📧 ${data.email} 📧. <br>
  You can find more of my work at 🔖 [${data.userName}](https://github.com/${data.userName}/) 🔖. 
  `;
}
module.exports = generateMarkdown;