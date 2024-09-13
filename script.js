const employeesData = [
    {
        fullName: { firstName: "Ahmed", lastName: "Khalid" },
        department: "Human Resources (HR)",
        baseSalary: 2000,
        entryDate: "01/01/2022",
        exitDate: "01/03/2023",
        age: 30,
        hoursWorked: 8,
        experience: ["Recruitment", "Employee Training", "HR Policy"],
        photo: "person1.png"
    },
    {
        fullName: { firstName: "Mohamed", lastName: "Ali" },
        department: "Human Resources (HR)",
        baseSalary: 2500,
        entryDate: "01/01/2022",
        exitDate: "01/03/2023",
        age: 28,
        hoursWorked: 8,
        experience: ["Compensation & Benefits", "Performance Appraisals", "Onboarding"],
        photo: "person2.png"
    },
    {
        fullName: { firstName: "Sara", lastName: "Noor" },
        department: "Human Resources (HR)",
        baseSalary: 1800,
        entryDate: "01/01/2021",
        exitDate: "01/03/2023",
        age: 32,
        hoursWorked: 7,
        experience: ["Employee Relations", "HR Compliance", "Benefits Administration"],
        photo: "person1.png"
    },
    // Add 10 more employees with experience
    {
        fullName: { firstName: "John", lastName: "Doe" },
        department: "Management",
        baseSalary: 3000,
        entryDate: "01/02/2022",
        exitDate: "01/04/2023",
        age: 35,
        hoursWorked: 8,
        experience: ["Strategic Planning", "Team Leadership", "Budget Management"],
    },
    {
        fullName: { firstName: "Alice", lastName: "Johnson" },
        department: "Contractors",
        baseSalary: 2200,
        entryDate: "01/03/2021",
        exitDate: "01/05/2023",
        age: 28,
        hoursWorked: 6,
        experience: ["Construction", "Project Management", "Supplier Relations"],
    },
    {
        fullName: { firstName: "Bob", lastName: "Smith" },
        department: "Management",
        baseSalary: 3200,
        entryDate: "01/04/2022",
        exitDate: "01/06/2023",
        age: 40,
        hoursWorked: 7,
        experience: ["Business Strategy", "Operations Management", "Staff Development"],
    },
    {
        fullName: { firstName: "Emily", lastName: "Davis" },
        department: "Contractors",
        baseSalary: 2400,
        entryDate: "01/05/2021",
        exitDate: "01/07/2023",
        age: 30,
        hoursWorked: 8,
        experience: ["Construction Projects", "Site Supervision", "Quality Control"],
    },
    {
        fullName: { firstName: "Daniel", lastName: "Wilson" },
        department: "Management",
        baseSalary: 3100,
        entryDate: "01/06/2022",
        exitDate: "01/08/2023",
        age: 38,
        hoursWorked: 8,
        experience: ["Strategic Planning", "Leadership Development", "Project Management"],
    },
    {
        fullName: { firstName: "Linda", lastName: "Brown" },
        department: "Contractors",
        baseSalary: 2300,
        entryDate: "01/07/2021",
        exitDate: "01/09/2023",
        age: 29,
        hoursWorked: 7,
        experience: ["Construction", "Subcontractor Management", "Safety Regulations"],
    },
    {
        fullName: { firstName: "Chris", lastName: "Anderson" },
        department: "Management",
        baseSalary: 3300,
        entryDate: "01/08/2022",
        exitDate: "01/10/2023",
        age: 42,
        hoursWorked: 8,
        experience: ["Business Strategy", "Financial Analysis", "Team Leadership"],
    },
    {
        fullName: { firstName: "Megan", lastName: "Evans" },
        department: "Contractors",
        baseSalary: 2500,
        entryDate: "01/09/2021",
        exitDate: "01/11/2023",
        age: 31,
        hoursWorked: 8,
        experience: ["Construction Projects", "Project Scheduling", "Quality Assurance"],
    },
    {
        fullName: { firstName: "William", lastName: "Clark" },
        department: "Management",
        baseSalary: 3400,
        entryDate: "01/10/2022",
        exitDate: "01/12/2023",
        age: 45,
        hoursWorked: 8,
        experience: ["Business Development", "Team Building", "Budget Management"],
    },
    {
        fullName: { firstName: "Olivia", lastName: "Moore" },
        department: "Contractors",
        baseSalary: 2600,
        entryDate: "01/11/2021",
        exitDate: "01/01/2024",
        age: 32,
        hoursWorked: 8,
        experience: ["Construction Planning", "Supplier Relations", "Cost Control"],
    },
    {
        fullName: { firstName: "Matthew", lastName: "Lee" },
        department: "Management",
        baseSalary: 3500,
        entryDate: "01/12/2022",
        exitDate: "01/02/2024",
        age: 47,
        hoursWorked: 8,
        experience: ["Strategic Planning", "Financial Analysis", "Team Leadership"],
    },
];


let card_style = "card worker-card p-4 rounded border-blue drop-shadow-far".split(" ")
let card_img_style = "card-img-top mt-3 drop-shadow-close".split(" ")
let card_body_style = "card-body"
let card_name_style = "card-title"
let list_style = "list-group-flush"
let list_group_item = "list-group-item"
let text_info_span = "text-info"

let HR_button = document.getElementById("show-HR");
let employee_container = document.getElementById("employees-container")


function createCard() {

}

HR_button.addEventListener("click", (e) => {
    employee_container.innerHTML = ""
    e.preventDefault()
    let HR_employees = getHREmployees(employeesData)

    HR_employees.map(employee => {
        let { experience_list, list } = createCard(employee);
        createdExperienceList(employee, experience_list, list);

    })

})

function createCard(employee) {
    let card = document.createElement("div");
    let img = document.createElement("img");
    let card_body1 = document.createElement("div");
    let name = document.createElement("h5");
    let list = document.createElement("ul");
    let experience_list = document.createElement("ul");


    card.appendChild(img);
    card_body1.appendChild(name);
    card.appendChild(card_body1);
    employee_container.appendChild(card);
    card.appendChild(list);



    card.classList.add(...card_style);
    img.classList.add(...card_img_style);
    name.classList.add(card_name_style);
    card_body1.classList.add(card_body_style);
    list.classList.add(list_style);

    img.setAttribute("src", employee.photo);
    name.innerText = employee.fullName.firstName + " " + employee.fullName.lastName;
    return { experience_list, list };
}

function createdExperienceList(employee, experience_list, list) {
    for (key in employee) {
        if (key === "fullName" || key === "photo")
            continue;
        if (key === "experience") {

            employee[key].map(exp => {
                let exp_item = document.createElement("li");

                exp_item.innerText = exp;
                experience_list.appendChild(exp_item);


            });
            let subtitle = document.createElement("span");

            let item = createItem(subtitle, experience_list);

            subtitle.classList.add(text_info_span);
            subtitle.innerText = key + ": ";


            list.appendChild(item);
            continue;
        }


        let subtitle = document.createElement("span");
        let itemInfo = document.createElement("span");
        let item = createItem(subtitle, experience_list);

        item.classList.add(list_group_item);

        subtitle.classList.add(text_info_span);
        subtitle.innerText = key + ": ";
        itemInfo.innerText = employee[key];

        item.appendChild(subtitle);
        item.appendChild(itemInfo);
        list.appendChild(item);

    }
}

function createItem(subtitle, experience_list) {
    let item = document.createElement("li");
    item.classList.add(list_group_item);
    item.appendChild(subtitle);
    item.appendChild(experience_list);
    return item;
}

// Question 1 ---------------------------------------------------------

function getHREmployees(employeesData) {
    let HR = employeesData.filter(employee => employee.department === "Human Resources (HR)");
    console.log("HR Department Employees:")
    console.log(HR)
    return HR
}


// Question 2----------------------------------------------------------

function getSalariesByDepartment(employees) {
    let salaries_table = {}
    employees.forEach(employee => {
        let department = employee.department
        let salary = employee.baseSalary

        if (department in salaries_table)
            salaries_table[department] += salary

        else
            salaries_table[department] = salary

    });
    console.log("Total Salaries By Department: ")
    for (department in salaries_table)
        console.log(department + ": $" + salaries_table[department])
    return salaries_table
}


//  Question 3 ------------------------------------------------------
function getAverageSalary(employeesData) {
    let salaries = employeesData.map(employee => employee.baseSalary)
    let total = salaries.reduce((prev_salary, salary) => prev_salary + salary)
    let avg = total / salaries.length

    console.log("Average Salary for All Departments: $" + avg)

    return avg

}


//  Question 4 ------------------------------------------------------
function getAverageAge(employeesData) {
    let ages = employeesData.map(employee => employee.age)
    let total = ages.reduce((prev_age, age) => prev_age + age)
    let avg = (total / ages.length).toPrecision(4)

    console.log("Average Age of Employees: " + avg)

    return avg

}


//  Question 5 --------------------------------------------------------------
function calcBonus(employees, extraHours) {
    let ahmed = employees.filter(emp => emp.fullName.firstName === "Ahmed" && emp.fullName.lastName === "Khalid")[0]
    let bonus_modifier = 0.0025
    let bonus = bonus_modifier * ahmed.baseSalary
    bonus = bonus * extraHours

    console.log("Ahmed's Bonus: " + (bonus_modifier * 3) * 100 + "%")

    ahmed.baseSalary = bonus + ahmed.baseSalary

    console.log("Ahmed's Salary after Bonus: $" + ahmed.baseSalary)
    console.log(ahmed)



}


// Question 6 -------------
function millisToDays(date) {
    // date returns milliseconds from string date
    // these divisions are just transformations from milis to sec to minutes to hours to days to years
    //1970 is the base in which the time stamp started.

    return Math.floor(Date.parse(date) / 1000 / 60 / 60 / 24 + 1970)
}
function getContEmployment(employeesData, year) {

    let employeeByYear = employeesData.filter(e => {
        let sameYear = parseInt(e.entryDate.split("/")[2]) === year
        let isAYear = (millisToDays(e.exitDate) - millisToDays(e.entryDate) > 365)
        return sameYear && isAYear
    })
    console.log("Number of Continuous Employees: " + employeeByYear.length)
    return employeeByYear.length
}

// Question 7 --------------------------------------------------



function dealBonus(dealAmount, bonusRate) {
    let share = ((dealAmount * bonusRate) / employeesData.length).toFixed(2)
    console.log("Increase in Ahmed's Salary: $" + share)
    return parseFloat(share)
}

function addSalaryBonus(firstName, lastName, employeesData, dealAmount, bonusRate) {
    let employee = employeesData.find(e => e.fullName.firstName === firstName && e.fullName.lastName === lastName)
    employee.baseSalary += dealBonus(dealAmount, bonusRate)

    console.log(employee)
    return employee
}

//  Qustion 8 --------------------------------------------------------
function getNameByExperience(employeesData, exp) {
    let names = []

    employeesData.forEach(e => {
        if (e.experience.includes(exp))
            names.push(e.fullName.firstName + " " + e.fullName.lastName)
    })
    console.log(`Employees with "Construction Projects" Experience: ${names.join(", ")}`)
    return names


}


//  Question 9 -----------------------------------------------------
function getTotalHours(employeesData) {
    let totalHours = employeesData.reduce((prev_emp, emp) => prev_emp + emp.hoursWorked, 0)
    console.log(`Total Hours Worked by All Employees: ${totalHours} hours`)
    return totalHours

}


// Question 10 --------------------------------------------------------
function getUniqueExperiences(employeesData) {
    let experiences = {}
    employeesData.forEach(e => {
        e.experience.map(experience => experiences[experience] = "")
    })

    for (key in experiences) { console.log(key) }

}

getHREmployees(employeesData)
getSalariesByDepartment(employeesData)
getAverageSalary(employeesData)
getAverageAge(employeesData)


calcBonus(employeesData, 3)


addSalaryBonus("Ahmed", "Khalid", employeesData, 3000000.0, 0.005)

getNameByExperience(employeesData, "Construction Projects")

getTotalHours(employeesData)
getUniqueExperiences(employeesData)
