let person = {
    firstName: "ankit",
    lastName: "pativala",
    age: 24,
    number: 1234567890,
    email: "ankit@gmail.com",
    hobbies: ["reading", "painting", "hiking"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: 12345
    },

    branches: [
        {
            name: "Marketing",
            employees: [
                {
                    name: "John Doe",
                    position: "Marketing Manager",
                    salary: 50000,
                },
                {
                    name: "Jane Smith",
                    position: "Marketing Specialist",
                    salary: 40000,
                }
            ]
        },
        {
            name: "Sales",
            employees: [
                {
                    name: "Alice Johnson",
                    position: "Sales Manager",
                    salary: 60000,
                },
                {
                    name: "Bob Wilson",
                    position: "Sales Associate",
                    salary: 50000,
                }
            ]
        }
    ]
    // Sum()=>{
    //     console.log(person.hobbie[2]);

    // }
}

// Output: hiking
// console.log(person.hobbie[2]);

console.log(person.branches[0].employees[0].name);


