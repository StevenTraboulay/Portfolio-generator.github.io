//this allows us to use the inquire module
const inquirer = require('inquirer');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (required)',
      //validating property ensures the field is filled out and NOT left blank
      validate: nameInput =>{
        if (nameInput) {
          return true;
        }
        else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (required)',
      validate: userNameInput =>{
        if (userNameInput) {
          return true;
        }
        else {
          console.log('Please enter your user name!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
      }
    }
  ]);
};

const promptProject = portfolioData => {
 
  console.log(`
=================
Add a New Project
=================
`);
if (!portfolioData.projects) {
  portfolioData.projects = [];
};

  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project? (required)',
      validate: projectNameInput =>{
        if (projectNameInput) {
          return true;
        }
        else {
          console.log('Please enter your project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: projectDescriptionInput =>{
        if (projectDescriptionInput) {
          return true;
        }
        else {
          console.log('Please enter a project description!');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)',
      validate: gitHubLinkInput =>{
        if (gitHubLinkInput) {
          return true;
        }
        else {
          console.log('Please enter a valid git hub link!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
    
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  });
  
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });




//this allows us access to the file system module 
//const fs = require('fs');
//to pull the page template from the src 
//const generatePage = require('./src/page-template.js');
//Holds the user command-line arguments
//const profileDataArgs = process.argv.slice(2, process.argv.length);
//distinct stored variables
//const [name, github] = profileDataArgs;

//const pageHTML = generatePage(name, github);



// fs lets us access the writefile from the core system, it creates an index.html file, and then it adds the info in the second part into the file
//(in this case its the generated index page)
//changed code here to page HTML so pageHTML holds the generatePage function, name and github
//fs.writeFile('index.html', pageHTML, err=>{
  //if (err) throw err;

  //console.log('Portfolio complete! Checkout index.html to see the output!')
//});

///////////////////LESSON CODE////////////
//const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

//const printProfileData = profileDataArr => {
// This...
//for (let i = 0; i < profileDataArr.length; i += 1) {
//console.log(profileDataArr[i]);
//}

//console.log('================');

// Is the same as this...
//profileDataArr.forEach(profileItem => console.log(profileItem));
//};
//printProfileData(profileDataArgs);

