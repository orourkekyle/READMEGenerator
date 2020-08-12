// const index = require("./index");

// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}


  ## Table of Contents

  * [Description](#description)
  * [Installation](#install)
  * [Usage Information](#usage)
  * [Contribution](#contribution)
  * [Test Instructions](#testInstruc)
  * [License](#license)
  

  
  # Description:
  ## ${data.description}

  # Install Instructions:
  ## ${data.install}

  # Usage Information:
  ## ${data.usage}

  # Contributing:
  ## ${data.contribution}

  # Tests:
  ## ${data.testInstruc}

  # License:
  ## ${data.license}

  # Questions:
  ## ${data.#}
`;
};

module.exports = generateMarkdown;
