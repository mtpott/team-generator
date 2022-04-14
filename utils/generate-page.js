//html regarding the manager section. if no manager, return an empty string
const createManager = manager => {
    if (!manager) {
      return '';
    }
    const { name, id, email, office } = {...manager};
      return `
        <section class="container flex-flow justify-space-between align-center py-5 col-xl-3" id="manager">
            <h1 class="text-dark bg-light">${name}</h1>
            <h2 class="text-dark">Manager</h2>
            <h3 class="text-dark">employee id: ${id}</h3>
            <h3 class="text-dark">office: ${office}</h3>
            <h3 class="btn btn-info text-dark">
                <a href="mailto:${email}">${email}</a></h3>
        </section>
       `
};

//html regarding the engineer section. if no engineer, return an empty string
const createEngineer = engineer => {
  if (!engineer) {
    return '';
  }
    const { name, id, email, github } = {...engineer};
      return `
        <section class="container flex-flow justify-space-between align-center py-5 col-xl-3" id="engineer">
            <h1 class="text-dark bg-light">name: ${name}</h1>
            <h2 class="text-dark">Engineer</h2>
            <h3 class="text-dark">employee id: ${id}</h3>
            <h3 class="text-dark">github:
              <a href="https://github.com/${github}">${github}</a></h3>
            <h3 class="btn btn-info text-dark">
                <a href="mailto:${email}">${email}</a></h3>
        </section>
      `
  };

//html regarding the intern section. if no intern, return an empty string
const createIntern = intern => {
    if (!intern) {
      return '';
    }
    const { name, id, email, school } = {...intern};
      return `
        <section class="container flex-flow justify-space-between align-center py-5 col-xl-3" id="intern">
            <h1 class="text-dark bg-light">name: ${name}</h1>
            <h2 class="text-dark">Intern</h2>
            <h3 class="text-dark">employee id: ${id}</h3>
            <h3 class="text-dark">university: ${school}</h3>
            <h3 class="btn btn-info text-dark">
                <a href="mailto:${email}">${email}</a></h3>
        </section>
      `
  };

  const renderHTML = (team) => {
    let htmlFile = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>employee generator!</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@200&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
      <body>
        <header>
          <div class="container flex-flow justify-space-between align-center py-3">
            <h1 class="page-title text-center text-dark bg-info py-2 px-3">employee generator</h1>
              <h2 class="page-title text-secondary text-center">
                generate a full list of your employees with the command line interface.
              </h2>
          </div>
        </header>
        <main class="row justify-space-between ml-2">`;

        for (let i = 0; i < team.length; i++) {
          if(team[i].getRole === 'Manager') {
            htmlFile += createManager(team[i]);
          }
          if(team[i].getRole === 'Engineer') {
            htmlFile += createEngineer(team[i]);
          }
          if(team[i].getRole === 'Intern') {
            htmlFile += createIntern(team[i]);
          }
        }

      htmlFile += 
        `</main>
          <footer class="footer text-center">
              generated by node.js
          </footer>
        </body>
    </html>`
      return htmlFile;
    
  }

module.exports = { renderHTML }