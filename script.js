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
        "Cloud Computing",
        "Configuration Drift",
        "Change Control",
        "Acceptance Testing",
        "Continuous Feedback",
        "Incident Management",
        "Quality Analysis",
        "Performance Testing",
        "Behaviour-Driven Design (BDD)",
        "Infrastructure Provisioning",
        "Everything-as-Code (EaC)"
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
        "Cloud Computing utilises remote servers and virtualization technologies to store, manage, and process data. It offers on-demand access to computing resources.",
        "Configuration Drift refers to the unintentional and gradual deviation of a system's configuration from its intended state, potentially leading to security and performance issues.",
        "Change Control is a systematic process for managing changes to a system, ensuring that they are planned, tested, and approved to minimize risks and disruptions.",
        "Acceptance Testing is a phase of software testing where a system is evaluated to determine whether it meets specified requirements and is ready for deployment.",
        "Continuous Feedback is the practice of providing ongoing feedback to improve performance and collaboration, particularly between managers and employees.",
        "Incident Management involves processes for identifying, responding to, and resolving incidents in an organization's IT systems and services.",
        "Quality Analysis focuses on evaluating and improving the quality of software through systematic testing, analysis, and optimization.",
        "Performance Testing is a non-functional testing process that assesses how a system performs under a given workload to identify bottlenecks and ensure optimal performance.",
        "Behaviour-Driven Design (BDD) is an approach to software development that emphasizes collaboration among developers, testers, and domain experts to define and test behavior.",
        "Infrastructure Provisioning is the process of defining and deploying infrastructure resources, including servers, storage, network, and more, using automated methods.",
        "Everything-as-Code (EaC) is a practice that treats all aspects of software development, including infrastructure and configurations, as code that can be versioned and automated."
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
        "https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing",
        "https://www.tripwire.com/state-of-security/what-is-configuration-drift",
        "https://www.apm.org.uk/resources/what-is-project-management/what-is-change-control/",
        "https://www.softwaretestinghelp.com/what-is-acceptance-testing/",
        "https://www.betterworks.com/magazine/continuous-feedback/#:~:text=Continuous%20feedback%20is%20the%20practice,between%20managers%20and%20their%20employees.",
        "https://www.atlassian.com/incident-management#types-of-incident-management-processes",
        "https://www.sciencedirect.com/topics/computer-science/quality-analysis",
        "https://www.microfocus.com/en-us/what-is/performance-testing#:~:text=Performance%20testing%20is%20a%20non,up%20under%20a%20given%20workload.",
        "https://cucumber.io/docs/bdd/#:~:text=BDD%20is%20a%20way%20for,and%20the%20flow%20of%20value",
        "https://www.redhat.com/en/topics/automation/what-is-provisioning#:~:text=Provisioning%20is%20the%20process%20of,%2C%20edge%20devices%2C%20and%20more.",
        "https://octopus.com/blog/what-is-everything-as-code#:~:text=Everything%20as%20Code%20(EaC)%20is,seen%20benefits%20of%20EaC%20firsthand."
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
        cell4.innerHTML = `<a href="${references[i]}" target="_blank" rel="noopener noreferrer">${references[i]}</a>`;

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);

        table.appendChild(row);
    }
};
