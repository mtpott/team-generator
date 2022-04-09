//html regarding the manager section. if no manager, return an empty string
const createManager = managerData => {
  if (!managerData) {
    return '';
  }
  const { name, id, email, role, office } = managerData;
    return `
    <section class="my-3" id="manager">
      <h1 class="text-dark bg-primary p-2 display-inline-block">name: ${managerData.name}</h1>
        <h2 class="text-dark bg-primary p-2 display-inline-block">role: ${managerData.role}</h2>
        <h3 class="text-dark bg-primary p-2 display-inline-block">employee id: ${managerData.id}</h3>
        <h3 class="text-dark bg-primary p-2 display-inline-block">
          <a href="mailto:${managerData.email}">${managerData.email}</a></h3>
        <h3 class="text-dark bg-primary p-2 display-inline-block">office: ${managerData.office}</h3>
    </section>
    `
};

//html regarding the engineer section. if no engineer, return an empty string
const createEngineer = engineerData => {
  if (!engineerData) {
    return '';
  }
  const { name, id, email, role, github } = engineerData;
    return `
    <section class="my-3" id="engineer">
      <h1 class="text-dark bg-primary p-2 display-inline-block">name: ${name}</h1>
        <h2 class="text-dark bg-primary p-2 display-inline-block">role: ${role}</h2>
        <h3 class="text-dark bg-primary p-2 display-inline-block">employee id: ${id}</h3>
        <h3 class="text-dark bg-primary p-2 display-inline-block">
          <a href="mailto:${email}">${email}</a></h3>
        <h3 class="text-dark bg-primary p-2 display-inline-block">office: ${github}</h3>
        <a href="mailto:${github}">${github}</a></h3>
    </section>
    `
};

//html regarding the intern section. if no intern, return an empty string
const createIntern = internData => {
  if (!internData) {
    return '';
  }
  const { name, id, email, role, school } = internData;
    return `
    <section class="my-3" id="intern">
      <h1 class="text-dark bg-primary p-2 display-inline-block">name: ${name}</h1>
        <h2 class="text-dark bg-primary p-2 display-inline-block">role: ${role}</h2>
        <h3 class="text-dark bg-primary p-2 display-inline-block">employee id: ${id}</h3>
        <h3 class="text-dark bg-primary p-2 display-inline-block">
          <a href="mailto:${email}">${email}</a></h3>
        <h3 class="text-dark bg-primary p-2 display-inline-block">college or university: ${school}</h3>
    </section>
    `
};

module.exports = employee => {
  const { name, id, email, office, github, school } = {...employee};
  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>employee generator!</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
    </head>
      <body>
        <header>
          <div class="container flex-flow justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">employee generator</h1>
            <h2 class="page-title text-secondary">use the cli to generate a full list of your employees.</h2>
          </div>
        </header>
        
        <main class="container">
        ${createManager}
        ${createEngineer}
        ${createIntern}
        </main>

        <footer>
        </footer>
`}

function writeFile(data) {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', employeeSection(data), err => {
          if(err) {
              reject(err);
              return;
          }
          resolve({
              ok: true,
              message: 'file created.'
          });
      });
  }
)};

function copyFile() {
  return new Promise((resolve, reject) => {
      fs.copyFile('./src/style.css', './dist/style.css', err => {
          if (err) {
              reject(err);
          }
          resolve({
              ok: true,
              message: 'style sheet created.'
          });
      });
  }
)};
