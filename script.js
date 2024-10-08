

// QUESTION ANSWERS LINE 508 -----------------------------------------------------------------------------------
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
        photo: "person3.png"
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
        photo: "person20.png"
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
        photo: "person19.png"
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
        photo: "person6.png"
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
        photo: "person5.png"
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
        photo:"person10.png"
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
        photo:"person18.png"
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
        photo:"person11.png"
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
        photo:"person9.png"
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
        photo:"person14.png"
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
        photo:"person16.png"
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
         photo:"person13.png"
        
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
        photo:"person17.png"
    },
];
// QUESTION ANSWERS LINE 508 -----------------------------------------------------------------------------------

let card_style = "card worker-card p-4 rounded border-blue drop-shadow-far".split(" ")
let card_img_style = "card-img-top mt-3 drop-shadow-close".split(" ")
let card_body_style = "card-body"
let card_name_style = "card-title"
let list_style = "list-group-flush"
let list_group_item = "list-group-item"
let text_info_span = "text-info"





if (typeof document !== 'undefined') {

    addExpMenu()


    var HR_button = document.getElementById("show-HR");
    var employee_container = document.getElementById("employees-container")
    var department_salaries_button = document.getElementById("show-total-salaries")
    var general_stats_button = document.getElementById("show-stats")
    var unique_exp_button = document.getElementById("show-unique-exp")
    var show_all_button = document.getElementById("show-all")
    var show_construction_employees = document.getElementById("show-construction-emp")
    var show_managment_employees = document.getElementById("show-managment")
    var show_contractor_employees = document.getElementById("show-contractors")
    
    

    HR_button.addEventListener("click", (e) => {
        employee_container.innerHTML = ""
        e.preventDefault()
        let style = "mt-5 mb-5 ml-5 text-center text-main-title drop-shadow-info".split(" ")
        createTitle("Our HR Employees",style)
        let HR_employees = getEmployeesByDepartment(employeesData, "Human Resources (HR)")

        HR_employees.map(employee => {
            let { experience_list, list } = createCard(employee);
            createdExperienceList(employee, experience_list, list);

        })

    })

    department_salaries_button.addEventListener("click", (e) => {
        employee_container.innerHTML = ""
        e.preventDefault()

        let salaries_table = getSalariesByDepartment(employeesData)
        let keys = []
        let vals = []
        for (k in salaries_table) {
            keys.push(k)
            vals.push(salaries_table[k])
        }

        let chart_canvas = createChart("pie", keys, vals, "Total Salary By Department")

        createSalariesCard(chart_canvas, salaries_table)
    })


    general_stats_button.addEventListener("click", (e) => {
        employee_container.innerHTML = ""
        e.preventDefault()
        let avgSalary = getAverageSalary(employeesData)
        let avgAge = getAverageAge(employeesData)
        let contEmployees = getContEmployment(employeesData, 2024)
        let totalHours = getTotalHours(employeesData)

        let card = document.createElement("div")
        let row = document.createElement("div")
        let card_body = document.createElement("div")
        let mainTitle = document.createElement("h3")
        let title = document.createElement("h3")


        employee_container.appendChild(card)

        card.classList.add(..."card p-4 rounded border-blue drop-shadow-far col-10".split(" "))
        row.classList.add("row")

        card_body.classList.add(..."card-body col-4".split(" "))

        title.innerText = "General Statistics"
        card.appendChild(title)
        card.appendChild(row)
        row.appendChild(card_body)


        let data = [
            { value: avgSalary, text: "Average Salary: " },
            { value: avgAge, text: "Average Age: " },
            { value: contEmployees, text: "Number of Continus Employees ending in 2024: " },
            { value: totalHours, text: "Total hours worked: " },
        ]

        data.forEach(obj => {
            let span1 = document.createElement("span")
            let span2 = document.createElement("span")
            let h5 = document.createElement("h5")
            h5.classList.add("card-title")

            span1.innerText = obj.text
            span1.classList.add("text-info")

            span2.innerText = obj.value



            card_body.appendChild(h5)
            h5.appendChild(span1)
            h5.appendChild(span2)
            card_body.appendChild(document.createElement("hr"))


        }


        )
    })

    unique_exp_button.addEventListener("click",(e)=>{
        e.preventDefault()
        employee_container.innerHTML=""
        createUniqueCard()
    })

    show_contractor_employees.addEventListener("click",(e)=>{
        e.preventDefault()
        employee_container.innerHTML=""
        let style = "mt-5 mb-5 ml-5 text-center drop-shadow-info text-main-title".split(" ")
        
        createTitle("Our Contractor Employees",style)
        createEmployeeByDepartment(employeesData, "Contractors")
       
    })

    show_managment_employees.addEventListener("click",(e)=>{
        e.preventDefault()
        employee_container.innerHTML=""
        let style = "mt-5 mb-5 ml-5 text-center drop-shadow-info text-main-title".split(" ")
        
        createTitle("Our Managment Employees",style)
        createEmployeeByDepartment(employeesData, "Management")
    })



    show_all_button.addEventListener("click",e=>{
        e.preventDefault()
        
        createAllEmployees(employeesData)
    })

    createAllEmployees(employeesData)
}







function createSalariesCard(canvas, salaries_table) {
    let card = document.createElement("div")
    let row = document.createElement("div")
    let card_body = document.createElement("div")
    let mainTitle = document.createElement("h3")

    mainTitle.innerHTML = "Total salaries by Department: "
    row.appendChild(mainTitle)
    card.classList.add(..."card p-4 rounded border-blue drop-shadow-far col-10".split(" "))
    row.classList.add("row")

    card_body.classList.add(..."card-body col-4".split(" "))
    canvas.classList.add(..."card-body col-4 d-flex justify-content-center align-items-center".split(" "))
    employee_container.appendChild(card)
    card.appendChild(row)
    row.appendChild(card_body)
    row.appendChild(canvas)



    for (key in salaries_table) {
        let department = document.createElement("h5")
        department.classList.add("card-title")
        let span1 = document.createElement("span")
        span1.innerText = key + ": "
        span1.classList.add("text-info")

        let span2 = document.createElement("span")
        span2.innerText = "$" + salaries_table[key]

        card_body.appendChild(department)
        department.appendChild(span1)
        department.appendChild(span2)
        card_body.appendChild(document.createElement("hr"))

    }



}
function createChart(type, labels, data, mainLabel) {


    const ctx = document.createElement('canvas');
    ctx.setAttribute("id", "myChart")
    new Chart(ctx, {
        type: type,

        data: {
            labels: labels,
            datasets: [{
                label: mainLabel,
                data: data,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,

            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    return ctx
}

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


function addExpMenu (){
    let menu = document.getElementById("exp-menu")
    let experiences = getUniqueExperiences(employeesData)

    for (exp in experiences){
        let exp_button = document.createElement("a")
        menu.appendChild(exp_button)
        exp_button.setAttribute("class" ,"dropdown-item")
        exp_button.setAttribute("href" ,"")
        exp_button.setAttribute("id",exp)
        exp_button.textContent = exp
        exp_button.addEventListener("click",(event)=>{
            event.preventDefault()
           
            employee_container.innerHTML=""
            let style = "mt-5 mb-5 ml-5 text-center drop-shadow-info text-main-title".split(" ")
            
            createTitle(`Staff with ${event.target.id} Experience`,style)
            createEmployeeByEXP(employeesData, event.target.id)       

        })
    }


    
}



// Question 1 ---------------------------------------------------------

function getEmployeesByDepartment(employeesData, department) {
    let employees = employeesData.filter(employee => employee.department === department);
    console.log(department+ " Employees:")
    console.log(employees)
    return employees
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
        let sameYear = parseInt(e.exitDate.split("/")[2]) === year
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
function getEmployeeByExperience(employeesData, exp) {
    let names = []
    let employees =[]
    employeesData.forEach(e => {
        if (e.experience.includes(exp)){
            names.push(e.fullName.firstName + " " + e.fullName.lastName)
            employees .push(e)
        }
    })
    console.log(`Employees with ${exp} Experience: ${names.join(", ")}`)
    return employees


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
    let count = 1;
    for (key in experiences) { console.log(`${count++}. ${key}`) }
    return experiences
}



//  Function Calls -----------------------------------------------------
getEmployeesByDepartment(employeesData, "Human Resources (HR)")
getSalariesByDepartment(employeesData)
getAverageSalary(employeesData)
getAverageAge(employeesData)


calcBonus(employeesData, 3)
getContEmployment(employeesData, 2024)

addSalaryBonus("Ahmed", "Khalid", employeesData, 3000000.0, 0.005)

getEmployeeByExperience(employeesData, "Construction Projects")

getTotalHours(employeesData)
getUniqueExperiences(employeesData)


// Extra . 






function createTitle(text ,style){
    let mainTitle = document.createElement("h1")
    mainTitle.classList.add(...style)
    employee_container.appendChild(mainTitle)
    mainTitle.textContent =text
}

function createUniqueCard(){
    let exps = getUniqueExperiences(employeesData)
    let card = document.createElement("div")
    let row = document.createElement("div")
    let card_body = document.createElement("div")
    let maintitle= document.createElement("h2")
    maintitle.classList.add("text-info")
    employee_container.appendChild(row)
    row.appendChild(card)
    maintitle.innerText=" Unique Experiences: "
    card.appendChild(maintitle)
    card.appendChild(card_body)

    for (key in exps){
        let h3 = document.createElement("h3")
        let hr = document.createElement("hr")

        
        card.classList.add(..."card p-4 rounded border-blue drop-shadow-far col-10".split(" "))
        row.classList.add(..."row d-flex justify-content-center".split(" "))
        card_body.classList.add(..."card-body col-12 text-center".split(" "))

        h3.innerText = key
        card_body.appendChild(h3)
        card_body.appendChild(hr)


    }
}




function createAllEmployees(employeesData){
    employee_container.innerHTML=""
    let style  = "mt-5 mb-5 ml-5 text-center text-main-title drop-shadow-info".split(" ")
    createTitle("Our Amazing Staff",style)

    employeesData.map(e=>{
        let { experience_list, list } = createCard(e);
        createdExperienceList(e, experience_list, list);
    })

}

function createEmployeeByEXP(employeesData,exp){

    let employees  = getEmployeeByExperience(employeesData,exp)
    employees.map(e=>{
        let { experience_list, list } = createCard(e);
        createdExperienceList(e, experience_list, list);
    })

}

function createEmployeeByDepartment(employeesData,department){

    let employees  = getEmployeesByDepartment(employeesData,department)
    employees.map(e=>{
        let { experience_list, list } = createCard(e);
        createdExperienceList(e, experience_list, list);
    })

}
