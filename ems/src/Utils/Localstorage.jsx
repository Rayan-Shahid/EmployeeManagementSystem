const employee = [
    {
        "id": 1,
        "email": "emp1@gmail.com",
        "password": "123",
        "name": "Jahanzaib",
        "taskscount": {
            "accepted": 2,
            "completed": 1,
            "newTask": 2,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Prepare Monthly Report",
                "description": "Compile and analyze monthly sales data.",
                "date": "2024-11-10",
                "category": "Reports",
                "accepted": true,
                "completed": false,
                "newTask": true,
                "failed": false
            },
            {
                "title": "Team Meeting",
                "description": "Discuss project milestones and timelines.",
                "date": "2024-11-12",
                "category": "Meetings",
                "accepted": false,
                "completed": true,
                "newTask": false,
                "failed": false
            },
            {
                "title": "Inventory Check",
                "description": "Review and update stock levels.",
                "date": "2024-11-14",
                "category": "Inventory",
                "accepted": true,
                "completed": false,
                "newTask": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "emp2@gmail.com",
        "password": "123",
        "name": "Osama",
        "taskscount": {
            "accepted": 1,
            "completed": 1,
            "newTask": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Client Presentation",
                "description": "Present project overview to new clients.",
                "date": "2024-11-09",
                "category": "Presentations",
                "accepted": false,
                "completed": true,
                "newTask": false,
                "failed": false
            },
            {
                "title": "Market Research",
                "description": "Conduct research on industry trends.",
                "date": "2024-11-15",
                "category": "Research",
                "accepted": true,
                "completed": false,
                "newTask": true,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "email": "emp3@gmail.com",
        "password": "123",
        "name": "Rayan",
        "taskscount": {
            "accepted": 1,
            "completed": 1,
            "newTask": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Prepare Training Module",
                "description": "Create training materials for new hires.",
                "date": "2024-11-08",
                "category": "Training",
                "accepted": true,
                "completed": false,
                "newTask": true,
                "failed": false
            },
            {
                "title": "Compliance Review",
                "description": "Review compliance standards for current project.",
                "date": "2024-11-13",
                "category": "Compliance",
                "accepted": false,
                "completed": true,
                "newTask": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "emp4@gmail.com",
        "password": "123",
        "name": "Saad",
        "taskscount": {
            "accepted": 2,
            "completed": 1,
            "newTask": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Website Update",
                "description": "Update website with new product details.",
                "date": "2024-11-09",
                "category": "Development",
                "accepted": true,
                "completed": false,
                "newTask": true,
                "failed": false
            },
            {
                "title": "Budget Analysis",
                "description": "Analyze monthly expenses and update budget.",
                "date": "2024-11-11",
                "category": "Finance",
                "accepted": false,
                "completed": true,
                "newTask": false,
                "failed": false
            },
            {
                "title": "Client Feedback",
                "description": "Gather feedback from clients.",
                "date": "2024-11-15",
                "category": "Customer Relations",
                "accepted": true,
                "completed": false,
                "newTask": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "emp5@gmail.com",
        "password": "123",
        "name": "Qadeer",
        "taskscount": {
            "accepted": 3,
            "completed": 0,
            "newTask": 3,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Social Media Campaign",
                "description": "Launch new campaign on social media channels.",
                "date": "2024-11-10",
                "category": "Marketing",
                "accepted": true,
                "completed": false,
                "newTask": true,
                "failed": false
            },
            {
                "title": "Internal Audit",
                "description": "Perform audit for the previous quarter.",
                "date": "2024-11-16",
                "category": "Audit",
                "accepted": true,
                "completed": false,
                "newTask": true,
                "failed": false
            },
            {
                "title": "Team Training",
                "description": "Conduct team training on new software.",
                "date": "2024-11-18",
                "category": "Training",
                "accepted": true,
                "completed": false,
                "newTask": true,
                "failed": false
            }
        ]
    },
    {
        "id": 6,
        "email": "emp6@gmail.com",
        "password": "123",
        "name": "Faizan",
        "taskscount": {
            "accepted": 2,
            "completed": 1,
            "newTask": 2,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Weekly Report",
                "description": "Prepare weekly progress report.",
                "date": "2024-11-07",
                "category": "Reports",
                "accepted": false,
                "completed": true,
                "newTask": false,
                "failed": false
            },
            {
                "title": "Bug Fixes",
                "description": "Resolve reported issues in the system.",
                "date": "2024-11-14",
                "category": "Development",
                "accepted": true,
                "completed": false,
                "newTask": true,
                "failed": false
            },
            {
                "title": "Customer Survey",
                "description": "Conduct survey to gauge customer satisfaction.",
                "date": "2024-11-19",
                "category": "Customer Relations",
                "accepted": true,
                "completed": false,
                "newTask": true,
                "failed": false
            }
        ]
    },
    {
        "id": 7,
        "email": "emp7@gmail.com",
        "password": "123",
        "name": "Anas",
        "taskscount": {
            "accepted": 2,
            "completed": 0,
            "newTask": 3,
            "failed": 1
        },
        "tasks": [
            {
                "title": "Annual Strategy Meeting",
                "description": "Discuss and plan yearly goals with team.",
                "date": "2024-11-20",
                "category": "Meetings",
                "accepted": true,
                "completed": false,
                "newTask": true,
                "failed": false
            },
            {
                "title": "Product Testing",
                "description": "Test the new product features and log issues.",
                "date": "2024-11-22",
                "category": "Quality Assurance",
                "accepted": true,
                "completed": false,
                "newTask": true,
                "failed": false
            },
            {
                "title": "Market Analysis Report",
                "description": "Analyze market data and create a report.",
                "date": "2024-11-25",
                "category": "Research",
                "accepted": false,
                "completed": false,
                "newTask": true,
                "failed": true
            }
        ]
    }
];





const admin = [
    {
        "id": 1,
        "name": "Muneeb",
        "email": "admin@ceo.com",
        "password": "123"
    }
];

export const setLocalstorage = () => {
    localStorage.setItem('employee', JSON.stringify(employee))
    localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalstorage = () => {
    const employee = JSON.parse(localStorage.getItem("employee"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    return { employee, admin }
}




