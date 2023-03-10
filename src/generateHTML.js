let employeeCards= [];

const createManagerCard = (manager) => {

    return `<div class="col-6">
                <div class="card mx-auto mb-4 shadow-sm">
                    <div class="card-header">
                        <h3>${manager.name}<br/><br/>${manager.getRole()}</h3>
                    </div>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>ID: ${manager.id}</li>
                        <li>Email: ${manager.email}</li>
                        <li>Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>`
}

const createEngineerCard = (engineer) => {

    return `<div class="col-6">
                <div class="card mx-auto mb-4 shadow-sm">
                    <div class="card-header">
                        <h3>${engineer.name}<br/><br/>${engineer.getRole()}</h3>
                    </div>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>ID: ${engineer.id}</li>
                        <li>Email: ${engineer.email}</li>
                        <li>Github: ${engineer.getGithub()}</li>
                    </ul>
                </div>
            </div>`
}

const createInternCard = (intern) => {

    return `<div class="col-6">
                <div class="card mx-auto mb-4 shadow-sm">
                    <div class="card-header">
                        <h3>${intern.name}<br/><br/>${intern.getRole()}</h3>
                    </div>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>ID: ${intern.id}</li>
                        <li>Email: ${intern.email}</li>
                        <li>School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>`
}

const createPage = function(employeeCards) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Employee Information</title>
    </head>
    
    <body>
        <nav class="navbar navbar-light bg-dark mb-4">
            <span class="h1 w-100 text-white text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">
                <div class="card-deck mb-3 text-center">
                    ${employeeCards.join('')}
                </div>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"
            integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`
}

const generateHTML = function (team) {

    for (let i = 0; i < team.length; i++) {
        const employee = team[i];
        const role = team[i].getRole();

        if (role === 'Manager') {
            const manProfile = createManagerCard(employee);
            employeeCards.push(manProfile); 
        } else if (role === 'Engineer') {
            const engProfile = createEngineerCard(employee);
            employeeCards.push(engProfile)
        } else if (role === 'Intern') {
            const intProfile = createInternCard(employee);
            employeeCards.push(intProfile)
        }
    }

    return createPage(employeeCards);
}

module.exports = generateHTML;


