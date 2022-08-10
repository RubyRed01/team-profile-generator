function generateHtml(team){
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
}

function generateManager(m){
    return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${m.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${m.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${m.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${m.getEmail()}">${m.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${m.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
}

function generateEngineer(en){
    return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${en.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${en.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${en.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${en.getEmail()}">${en.getEmail()}</a></li>
                <li class="list-group-item">Github: <a href="${en.getGithub()}">${en.getGithub()}</a></li>
            </ul>
        </div>
    </div>
        `;
}

function generateIntern(intern){
    return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `;
}

function generateTeam(team){
    // empty array to join later
    let teamHtml = [];
    // pushing teamHtml elements to team
    teamHtml.push(team
        // filter will filter out 'Manager' from .getRole elements
        .filter(e  => e.getRole() === 'Manager')
        // map will take filtered out manager elements and pass them into generate manager
        .map(m => generateManager(m)));
    teamHtml.push(team
        .filter(e => e.getRole() === 'Engineer')
        .map(en => generateEngineer(en)));

    teamHtml.push(team
        .filter(e => e.getRole() === 'Intern')
        .map(intern => generateIntern(intern)));

    // returns the previous code into the teamHtml, joining it so it becomes a string (instead of an array so it can actually be displayed)
    return teamHtml.join('')
    }


module.exports = generateHtml;