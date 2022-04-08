const headHtml = () => {
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
    </head>`
}

const createManager = response => {

    return `
    <section class="my-3" id="manager">
      <h1 class="text-dark bg-primary p-2 display-inline-block">name: ${response.name}</h1>
        <h3 class="text-dark bg-primary p-2 display-inline-block">employee id: ${response.id}</h3>
        <h3 class="text-dark bg-primary p-2 display-inline-block">
          <a href="mailto:${email}">${email}</a></h3>
        <h3 class="text-dark bg-primary p-2 display-inline-block">office: ${response.office}</h3>
    </section>
    `
}


const employeeSection = employeeInfo => {
  const { name, id, email, office, github, school } = employeeInfo;
    return `<body>
        <header>
          <div class="container flex-flow justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">employee generator</h1>
            <h2 class="page-title text-secondary">use the cli to generate a full list of your employees.</h2>
          </div>
        </header>
        
        <main class="container">${createManager}</main>      
`}