const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
window.onload = function () {
  const divMenu = document.querySelector('.mobile-menu');
  const crossButton = document.querySelector('.cross-button');
  const hamburgerButton = document.querySelector('.hamb-bu');

  const myFunction = () => {
    divMenu.classList.toggle('display');
  };

  crossButton.addEventListener('click', () => {
    myFunction();
  });

  hamburgerButton.addEventListener('click', () => {
    myFunction();
  });

  $('.mobile-menu li a').on('click', () => {
    $('#cross-button').click();
  });
};

function showDetail(project) {
  console.log("Project:", project)
}

/* Update list of project dynamicaly */
var listProject = [
  {name:"Tonic", description:"A daily section of privately personalized reads; no accounts or sign-ups required.", image:"images/portfolio-snapshot-1.svg", details: ["CANOPY", "Back End Dev", "2015"],  technologies: ["html", "css", "javaScript"], link: {live:"", source:""}},
  {name:"Multi-Post Stories", description:"A daily section of privately personalized reads; no accounts or sign-ups required.", image:"images/portfolio- snapshot-2.svg",  details: ["CANOPY", "Back End Dev", "2015"], technologies: ["html", "css", "javaScript"], link: {live:"", source:""}},
  {name:"Tonic", description:"A daily section of privately personalized reads; no accounts or sign-ups required.", image:"images/portfolio- snapshoot-3.svg",  details: ["CANOPY", "Back End Dev", "2015"], technologies: ["html", "css", "javaScript"], link: {live:"", source:""}},
  {name:"Multi-Post Stories", description:"A daily section of privately personalized reads; no accounts or sign-ups required.", image:"images/portfolio-snapshoot-4.svg",  details: ["CANOPY", "Back End Dev", "2015"], technologies: ["html", "css", "javaScript"], link: {live:"", source:""}}
]

var work = document.getElementById('work')
var index=0
listProject.forEach((project) => {
  var portfolioSnapshot = document.createElement('div')
  portfolioSnapshot.classList.add('portfolio-snapshot')

  var img = document.createElement('img')
  img.classList.add('img')
  img.src = project.image
  img.alt = "Portfolio-Snapshot-1"

  var workDescription = document.createElement('div')
  workDescription.classList.add('work-description')

  var title = document.createElement('h1')
  title.classList.add('project-title')
  title.textContent = project.name

  /* List of details */
  var projectName = document.createElement('ul')
  projectName.classList.add('project-name')

  var subTitle = document.createElement('li')
  subTitle.classList.add("sub-title")
  var subTitleAnchor = document.createElement('a')
  subTitleAnchor.href = '#'
  subTitleAnchor.textContent = project.details[0]
  subTitle.append(subTitleAnchor)

  var bullet1 = document.createElement('li')
  bullet1.classList.add("bullet")
  bullet1.innerHTML = "&#x2022;"
  var bullet2 = document.createElement('li')
  bullet2.classList.add("bullet")
  bullet2.innerHTML = "&#x2022;"

  var typeProject = document.createElement('li')
  var typeProjectAnchor = document.createElement('a')
  typeProjectAnchor.classList.add("backend-yr")
  typeProjectAnchor.href = '#'
  typeProjectAnchor.textContent = project.details[1]
  typeProject.append(typeProjectAnchor)

  var date = document.createElement('li')
  var dateAnchor = document.createElement('a')
  dateAnchor.classList.add('backend-yr')
  dateAnchor.textContent = 2015
  date.append(dateAnchor)

  projectName.append(subTitle)
  projectName.append(bullet1)
  projectName.append(typeProject)
  projectName.append(bullet2)
  projectName.append(date)

  // Descriptions
  var description = document.createElement('p')
  description.classList.add('description')
  description.textContent = project.description

  var technologies = document.createElement('ul')
  technologies.classList.add('classification')
  for(var i=0; i<project.technologies.length; i++){
    var li = document.createElement('li')
    li.classList.add('lang')
    var anchor = document.createElement('a')
    anchor.href = '#'
    anchor.textContent = project.technologies[i]
    li.append(anchor)
    technologies.append(li)
  }
  
  // btn
  var buttonDiv = document.createElement('div')
  var button = document.createElement('button')
  button.classList.add('btn')
  button.type = "button"
  button.textContent = "See Project"

  //On click show detail
  button.addEventListener('click', () => { showDetail(project); });

  buttonDiv.append(button)

  //add all elements
  workDescription.append(title)
  workDescription.append(projectName)
  workDescription.append(description)
  workDescription.append(technologies)
  workDescription.append(buttonDiv)

  //
  if(index%2 ===0) {
    portfolioSnapshot.append(img)
    portfolioSnapshot.append(workDescription)
  }
  else {
    portfolioSnapshot.append(workDescription)
    portfolioSnapshot.append(img)
  }
  

  //add project to the work section
  work.append(portfolioSnapshot)
  index++
})