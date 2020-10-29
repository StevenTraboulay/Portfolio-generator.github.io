// this function creates the ability to pass through a name where username and github name are, because we're calling the generate page seperated
//by a comma
const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> n
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
  };

  module.exports = generatePage;