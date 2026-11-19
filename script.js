const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  themeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
});


const aboutBtn = document.getElementById("aboutBtn");
const extraAbout = document.getElementById("extraAbout");

aboutBtn.addEventListener("click", function () {
  extraAbout.hidden = !extraAbout.hidden;

  aboutBtn.textContent = extraAbout.hidden
    ? "Show More"
    : "Show Less";
});


const projects = [
  {
    title: "Order Management and Tracking System",
    description: "Developed a Java-based system for managing service orders, statuses, notifications, and customer feedback.",
    category: "Programming",
    technologies: "UML and ER diagram design, Java programming, unit testing, Agile software development using Extreme Programming (XP)"
  },
  {
    title: "Recommendation and Booking System",
    description: "Developed a Java-based backend system that provides users with relevant recommendations and supports a smooth booking process.",
    category: "Web",
    technologies: "Object-Oriented Programming, database connection, multithreading, API integration, exception handling, Git version control"
  }
];


const projectsContainer = document.getElementById("projectsContainer");

function renderProjects(category) {
  projectsContainer.replaceChildren();

  const filteredProjects = projects.filter(function (project) {
    return category === "All" || project.category === category;
  });

  filteredProjects.forEach(function (project) {
    const card = document.createElement("article");
    card.classList.add("project-card");

    const title = document.createElement("h3");
    title.textContent = project.title;

    const type = document.createElement("p");
    type.classList.add("project-category");
    type.textContent = project.category;

    const description = document.createElement("p");
    description.textContent = project.description;

    const technologies = document.createElement("p");
    const label = document.createElement("strong");
    label.textContent = "Applied: ";
    technologies.appendChild(label);
    technologies.appendChild(document.createTextNode(project.technologies));

    card.appendChild(title);
    card.appendChild(type);
    card.appendChild(description);
    card.appendChild(technologies);

    projectsContainer.appendChild(card);
  });
}


const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedCategory = button.dataset.category;

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    renderProjects(selectedCategory);
  });
});

renderProjects("All");


const printBtn = document.getElementById("printBtn");

printBtn.addEventListener("click", function () {
  window.print();
});
