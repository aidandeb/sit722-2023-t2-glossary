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
        "Everything-as-Code (EaC)",
        "Orchestration",
        "Continuous Monitoring",
        "Immutable Infrastructure",
        "Serverless Computing",
        "Kubernetes",
        "Version Control",
        "Dependency Injection",
        "CICD Pipeline (Continuous Integration and Continuous Delivery Pipeline)",
        "Scalability",
        "Blue-Green Deployment",
        "Continuous Deployment",
        "Control Plane (Kubernetes)",
        "Pod (Kubernetes)",
        "Resource Group (Cloud)",
        "Container Registry",
        "Provider (Terraform)",
        "Variables (Terraform)",
        "Keys (Terraform)",
        "Resource (Terraform)",
        "HashiCorp Configuration Language (HCL)"
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
        "Configuration Drift occurs when the configuration of a system or environment deviates from its intended state, potentially leading to issues or vulnerabilities.",
        "Change Control is a process that manages and tracks changes to a system, ensuring that modifications are planned, documented, and tested to minimise risks.",
        "Acceptance Testing is a phase of software testing where the software's functionality is evaluated against predefined criteria to determine if it meets the requirements.",
        "Continuous Feedback is the practice of providing ongoing, timely feedback to individuals or teams to improve performance and achieve goals.",
        "Incident Management involves responding to and resolving unplanned disruptions or issues in IT services to minimise their impact on operations.",
        "Quality Analysis is the process of evaluating the quality of software or products to identify defects, areas for improvement, and ensure adherence to standards.",
        "Performance Testing is a non-functional testing approach that evaluates how a system performs under a given workload to ensure optimal performance.",
        "Behaviour-Driven Design (BDD) is a way for teams to define, develop, and test the desired behavior of software through collaborative scenarios and the flow of value.",
        "Infrastructure Provisioning is the process of setting up and configuring hardware, servers, cloud resources, edge devices, and more for application deployment.",
        "Everything-as-Code (EaC) is an approach that treats infrastructure, configurations, and processes as code, enabling automation and version control of all aspects of IT operations.",
        "Orchestration refers to the automated coordination and management of multiple tasks, services, or containers in a defined sequence to achieve a specific workflow or business process.",
        "Continuous Monitoring is the practice of real-time or periodic tracking and assessment of applications, systems, or networks to identify issues, security vulnerabilities, and performance bottlenecks.",
        "Immutable Infrastructure is an approach where infrastructure components, such as servers or containers, are never modified after their initial deployment. Updates are made by creating new, complete instances.",
        "Serverless Computing is a cloud computing model where developers can execute code without provisioning or managing servers. It abstracts server management tasks and allows developers to focus on code.",
        "Kubernetes, often abbreviated as K8s, is an open-source container orchestration platform for automating the deployment, scaling, and management of containerized applications.",
        "Version Control is the practice of tracking and managing changes to source code, documents, or any set of files. It helps developers collaborate, track history, and maintain code integrity.",
        "Dependency Injection is a design pattern in which components receive their dependencies from an external source rather than creating them. It enhances code modularity and testability.",
        "CICD Pipeline (Continuous Integration and Continuous Delivery Pipeline) is an automated workflow that facilitates the building, testing, and deployment of software changes. It ensures a reliable and efficient delivery process.",
        "Scalability is the ability of a system or application to handle an increasing amount of workload or users by adding resources, such as servers or containers, without compromising performance.",
        "Blue-Green Deployment is a deployment strategy where two identical environments (blue and green) are maintained. New versions of software are deployed to one environment while the other remains stable, enabling seamless rollbacks if issues arise."
        "Continuous Deployment is the practice of automatically and frequently releasing code changes to production, ensuring a streamlined and automated deployment process.",
        "Control Plane in Kubernetes is a set of components that manage the overall state of the cluster, including scheduling, orchestration, and communication among nodes.",
        "A Pod in Kubernetes is the smallest deployable unit that can contain one or more containers, along with shared storage and network resources.",
        "A Resource Group in a cloud environment is a logical container for managing related cloud resources, helping to organize and manage the resources effectively.",
        "Container Registry is a service that stores and manages container images, allowing developers to store, share, and deploy containers.",
        "Provider in Terraform refers to the cloud service provider (e.g., Azure, AWS) used to provision and manage cloud resources through Terraform scripts.",
        "Variables in Terraform are used to define values that can be reused across Terraform configuration files, enhancing modularity and flexibility.",
        "Keys in Terraform are used for authentication and communication with cloud providers. They often include secrets, tokens, or private keys.",
        "Resource in Terraform represents a single infrastructure object or cloud resource, and Terraform uses resource blocks to define and manage these objects.",
        "HashiCorp Configuration Language (HCL) is a configuration language used in Terraform to define and describe the desired infrastructure and resources."
    ];

    var references = [
        "https://www.techtarget.com/searchitoperations/definition/DevOps",
        "https://aws.amazon.com/devops/continuous-integration/",
        "https://www.thoughtworks.com/insights/blog/case-continuous-delivery",
        "https://powershellmagazine.com/2016/01/05/devops-infrastructure-as-code-and-powershell-dsc-the-introduction/",
        "https://www.ionos.com/digitalguide/websites/web-development/microservices/",
        "https://www.redhat.com/en/topics/containers/what-is-containerization",
        "https://www.veracode.com/security/devsecops",
        "https://agilemanifesto.org/",
        "https://www.atlassian.com/continuous-delivery/configuration-management",
        "https://aws.amazon.com/what-is-cloud-computing/",
        "https://en.wikipedia.org/wiki/Configuration_drift",
        "https://www.atlassian.com/continuous-delivery/change-control",
        "https://www.guru99.com/acceptance-testing-tutorial.html",
        "https://www.sealights.io/blog/continuous-feedback-in-software-development/",
        "https://en.wikipedia.org/wiki/Incident_management",
        "https://www.tutorialspoint.com/software_testing/software_testing_quality_analysis.htm",
        "https://smartbear.com/learn/performance-testing/what-is-performance-testing/",
        "https://cucumber.io/docs/bdd/",
        "https://www.gartner.com/en/information-technology/glossary/infrastructure-provisioning",
        "https://www.devopsgroup.com/blog/everything-as-code-what-you-need-to-know/",
        "https://en.wikipedia.org/wiki/Orchestration_(computing)",
        "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-137.pdf",
        "https://www.digitalocean.com/resources/immutable-infrastructure/",
        "https://aws.amazon.com/serverless/",
        "https://kubernetes.io/",
        "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control",
        "https://docs.microsoft.com/en-us/dotnet/architecture/dependency-injection/",
        "https://www.jenkins.io/doc/book/pipeline/",
        "https://aws.amazon.com/architecture/scalability/",
        "https://martinfowler.com/bliki/BlueGreenDeployment.html"
        "https://en.wikipedia.org/wiki/Continuous_deployment",
        "https://kubernetes.io/docs/concepts/architecture/control-plane-node/",
        "https://kubernetes.io/docs/concepts/workloads/pods/",
        "https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-are-resource-groups/",
        "https://azure.microsoft.com/en-us/services/container-registry/",
        "https://learn.hashicorp.com/tutorials/terraform/provider",
        "https://learn.hashicorp.com/tutorials/terraform/variables",
        "https://learn.hashicorp.com/tutorials/terraform/secrets",
        "https://learn.hashicorp.com/tutorials/terraform/state",
        "https://learn.hashicorp.com/tutorials/terraform/hcl"
    ];

    for (var i = 0; i < terms.length; i++) {
        var row = table.insertRow(i + 1);
        var idCell = row.insertCell(0);
        var termCell = row.insertCell(1);
        var descriptionCell = row.insertCell(2);
        var referencesCell = row.insertCell(3);

        idCell.innerHTML = i + 1;
        termCell.innerHTML = terms[i];
        descriptionCell.innerHTML = descriptions[i];
        referencesCell.innerHTML = references[i];
    }
};
