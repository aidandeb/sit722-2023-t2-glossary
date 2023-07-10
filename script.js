window.onload = function() {
    var table = document.getElementById("myTable");

    var terms = [
        "DevOps",
        "Continuous Integration (CI)",
        "Continuous Delivery (CD)",
        "Infrastructure as Code (IaC)",
        "Microservices",
        "Containerization",
        "DevSecOps",
        "Agile",
        "Configuration Management",
        "Cloud Computing"
    ];

    var descriptions = [
        "The combination of cultural philosophies, practices, and tools that enhance an organization's ability to deliver applications and services at a high velocity, improving software development and infrastructure management processes.",
        "The practice of frequently integrating code changes into a shared repository, allowing for early detection of integration issues.",
        "An approach that ensures software is always in a releasable state by automating build, test, and deployment processes.",
        "The practice of managing and provisioning infrastructure resources using machine-readable configuration files, enabling consistent and reproducible infrastructure setups.",
        "An architectural approach where applications are built as a collection of small, independently deployable services that work together.",
        "The technique of encapsulating an application and its dependencies into a lightweight, isolated container for consistent deployment across different environments.",
        "The integration of security practices into the DevOps workflow, ensuring security is considered throughout the software development and deployment process.",
        "An iterative and collaborative software development approach that emphasizes flexibility, customer collaboration, and responding to change.",
        "The process of managing and maintaining the configuration settings and parameters of software systems and infrastructure components.",
        "The use of remote servers and virtualization technologies to store, manage, and process data, providing on-demand access to computing resources."
    ];

    for (var i = 0; i < terms.length; i++) {
        var row = document.createElement("tr");
        
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        var cell3 = document.createElement("td");
        var cell4 = document.createElement("td");

        cell1.textContent = i + 1; // Display row number in column 1
        cell2.textContent = terms[i]; // Populate words/terms in column 2
        cell3.textContent = descriptions[i]; // Populate descriptions in column 3
        cell4.textContent = "Row " + (i + 1) + " Col 4";
        
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        
        table.appendChild(row);
    }
};