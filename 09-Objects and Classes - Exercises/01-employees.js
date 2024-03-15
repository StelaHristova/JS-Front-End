function solve(employeeNames) {
    //Define structure assotiative array
    const employees = {};

    //Read employee names
    for (const name of employeeNames) {
        employees[name] = name.length
    }

    //Print result
    for (const employee in employees) {
        console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`);
    }

}

//2
function fancySolve(employeeNames) {
    const employees = [];

    for (const name of employeeNames) {
        const employee = {
            name, 
            personalNumber: name.length,
        }

        employees.push(employee);
    }

    for (const employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }
}

//3
function fanciestSolve(employeeNames) {
    employeeNames
        .map(name => ({
                name,
                personalNumber: name.length,
            })
        )
        .forEach(employee => console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`));
}


solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);