
//this allows us access to the file system module 
const fs = require('fs');
//to pull the page template from the src 
const generatePage = require('./src/page-template.js');
//Holds the user command-line arguments
const profileDataArgs = process.argv.slice(2, process.argv.length);
//distinct stored variables
const [name, github] = profileDataArgs;



// fs lets us access the writefile from the core system, it creates an index.html file, and then it adds the info in the second part into the file
//(in this case its the generated index page)
fs.writeFile('index.html', generatePage(name, github), err=>{
  if (err) throw err;

  console.log('Portfolio complete! Checkout index.html to see the output!')
});

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
