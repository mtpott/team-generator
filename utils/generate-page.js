//html regarding the manager section. if no manager, return an empty string
const createManager = manager => {
    if (!manager) {
      return '';
    }
    const { name, id, email, role, office } = {...manager};
      return `
        <section class="my-3 d-flex" id="manager">
            <h1 class="text-dark bg-info display-inline-block">name: ${manager.name}</h1>
            <h2 class="text-dark bg-info display-inline-block">role: ${manager.role}</h2>
            <h3 class="text-dark bg-info display-inline-block">employee id: ${manager.id}</h3>
            <h3 class="text-dark bg-info display-inline-block">
                <a href="mailto:${manager.email}">${manager.email}</a></h3>
            <h3 class="text-dark bg-info display-inline-block">office: ${manager.office}</h3>
        </section>
       `
};

//html regarding the engineer section. if no engineer, return an empty string
const createEngineer = engineer => {
    if (!engineer) {
      return '';
    }
    const { name, id, email, role, github } = {...engineer};
      return `
        <section class="my-3 d-flex" id="engineer">
            <h1 class="text-dark bg-info display-inline-block">name: ${engineer.name}</h1>
            <h2 class="text-dark bg-info display-inline-block">role: ${engineer.role}</h2>
            <h3 class="text-dark bg-info display-inline-block">employee id: ${engineer.id}</h3>
            <h3 class="text-dark bg-info display-inline-block">
                <a href="mailto:${engineer.email}">${engineer.email}</a></h3>
            <h3 class="text-dark bg-info display-inline-block">office: ${engineer.github}</h3>
                <a href="${engineer.github}">${engineer.github}</a></h3>
        </section>
      `
  };

//html regarding the intern section. if no intern, return an empty string
const createIntern = intern => {
    if (!intern) {
      return '';
    }
    const { name, id, email, role, school } = {...intern};
      return `
        <section class="my-3 d-flex" id="intern">
            <h1 class="text-dark bg-primary display-inline-block">name: ${intern.name}</h1>
            <h2 class="text-dark bg-primary display-inline-block">role: ${intern.role}</h2>
            <h3 class="text-dark bg-primary display-inline-block">employee id: ${intern.id}</h3>
            <h3 class="text-dark bg-primary display-inline-block">
                <a href="mailto:${intern.email}">${intern.email}</a></h3>
            <h3 class="text-dark bg-primary display-inline-block">college or university: ${intern.school}</h3>
        </section>
      `
  };

module.exports = team => {
    const { manager, engineer, intern } = {...team};
    return `
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
              <h1 class="page-title text-secondary bg-dark py-2 px-3">employee generator</h1>
              <h2 class="page-title text-secondary">use the cli to generate a full list of your employees.</h2>
            </div>
          </header>
          
        <main class="container">
        <section class="my-3 d-flex" id="manager">
            <h1 class="text-dark bg-info display-inline-block">name: ${manager.name}</h1>
            <h2 class="text-dark bg-info display-inline-block">role: ${manager.role}</h2>
            <h3 class="text-dark bg-info display-inline-block">employee id: ${manager.id}</h3>
            <h3 class="text-dark bg-info display-inline-block">
                <a href="mailto:${manager.email}">${manager.email}</a></h3>
            <h3 class="text-dark bg-info display-inline-block">office: ${manager.office}</h3>
        </section>
        <section class="my-3 d-flex" id="engineer">
            <h1 class="text-dark bg-info display-inline-block">name: ${engineer.name}</h1>
            <h2 class="text-dark bg-info display-inline-block">role: ${engineer.role}</h2>
            <h3 class="text-dark bg-info display-inline-block">employee id: ${engineer.id}</h3>
            <h3 class="text-dark bg-info display-inline-block">
                <a href="mailto:${engineer.email}">${engineer.email}</a></h3>
            <h3 class="text-dark bg-info display-inline-block">office: ${engineer.github}</h3>
                <a href="${engineer.github}">${engineer.github}</a></h3>
        </section>
        <section class="my-3 d-flex" id="intern">
            <h1 class="text-dark bg-primary display-inline-block">name: ${intern.name}</h1>
            <h2 class="text-dark bg-primary display-inline-block">role: ${intern.role}</h2>
            <h3 class="text-dark bg-primary display-inline-block">employee id: ${intern.id}</h3>
            <h3 class="text-dark bg-primary display-inline-block">
                <a href="mailto:${intern.email}">${intern.email}</a></h3>
            <h3 class="text-dark bg-primary display-inline-block">college or university: ${intern.school}</h3>
        </section>

        </main>
  
        <footer>generated by node.js</footer>
  `};