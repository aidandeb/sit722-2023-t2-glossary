window.onload = function() {
    var table = document.getElementById("myTable");

    var terms = [
        "DevOps",
        "Continuous Integration (CI)",
        "Continuous Delivery (CD)",
        "Infrastructure as Code (IaC)",
        "Microservices",
        "Containerisation",
        "DevSecOps",
        "Agile",
        "Configuration Management",
        "Cloud Computing"
    ];

    var descriptions = [
        "DevOps is a combination of cultural beliefs, practices, and tools that boost an organisation's ability to deliver applications and services quickly. It improves the processes of software development and infrastructure management.",
        "Continuous Integration (CI) is the practice of frequently merging code changes into a shared repository. It helps detect integration issues early in the development process.",
        "Continuous Delivery (CD) ensures that software is always ready for release by automating build, testing, and deployment processes.",
        "Infrastructure as Code (IaC) involves managing and provisioning infrastructure resources using machine-readable configuration files. This ensures consistent and reproducible infrastructure setups.",
        "Microservices is an architectural approach where applications are constructed as a collection of small, independently deployable services that work together.",
        "Containerisation is a technique that isolates applications and their dependencies within lightweight containers. It ensures consistent deployment across various environments.",
        "DevSecOps integrates security practices into the DevOps workflow, ensuring that security is considered throughout the entire software development and deployment process.",
        "Agile is an iterative and collaborative software development approach that emphasises flexibility, customer collaboration, and adaptability to change.",
        "Configuration Management involves managing and maintaining the configuration settings and parameters of software systems and infrastructure components.",
        "Cloud Computing utilises remote servers and virtualization technologies to store, manage, and process data. It offers on-demand access to computing resources."
    ];

    var references = [
        "https://www.techtarget.com/searchitoperations/definition/DevOps",
        "https://aws.amazon.com/devops/continuous-integration/",
        "https://www.thoughtworks.com/insights/blog/case-continuous-delivery",
        "https://powershellmagazine.com/2016/01/05/devops-infrastructure-as-code-and-powershell-dsc-the-introduction/",
        "https://www.ionos.com/digitalguide/websites/web-development/microservice-architecture/",
        "https://www.redhat.com/en/topics/cloud-native-apps/what-is-containerization",
        "https://aws.amazon.com/what-is/devsecops/e",
        "https://www.agilealliance.org/agile101/",
        "https://www.atlassian.com/microservices/microservices-architecture/configuration-management",
        "https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing"
    ];

    for (var i = 0; i < terms.length; i++) {
        var row = document.createElement("tr");
        
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        var cell3 = document.createElement("td");
        var cell4 = document.createElement("td");

        cell1.textContent = i + 1; 
        cell2.textContent = terms[i]; 
        cell3.textContent = descriptions[i]; 
        cell4.textContent = references[i];
        
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        
        table.appendChild(row);
    }
};
