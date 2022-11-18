const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
window.onload = function () {
  const divMenu = document.querySelector('.mobile-menu');
  const crossButton = document.querySelector('.cross-button');
  const hamburgerButton = document.querySelector('.hamb-bu');

  const openMenu = () => {
    divMenu.classList.toggle('display');
  };

  crossButton.addEventListener('click', () => {
    openMenu();
  });

  hamburgerButton.addEventListener('click', () => {
    openMenu();
  });

  $('.mobile-menu li a').on('click', () => {
    $('#cross-button').click();
  });
};

function showDetail(project) {
  const popupWrapper = document.createElement('div');
  popupWrapper.classList.add('popup-wrapper');
  popupWrapper.id = 'popup-wrapper';
  const portfolioSnapshot = document.createElement('div');
  portfolioSnapshot.classList.add('portfolio-snapshot');

  // img
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('img-wrapper');
  const img = document.createElement('img');
  img.classList.add('img');
  img.src = project.image;
  img.alt = 'Portoflio Project Image';
  imgDiv.append(img);

  // Title
  const title = document.createElement('h1');
  title.classList.add('project-title');
  title.textContent = project.name;

  // btnClose
  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');
  const btnClose = document.createElement('img');
  btnClose.id = 'close-btn';
  btnClose.src = 'images/cross2.svg';
  btnClose.alt = 'Close button';
  btnClose.addEventListener('click', () => {
    document.getElementById('popup-wrapper').remove();
  });
  btnWrapper.append(btnClose);

  /* List of details */
  const projectName = document.createElement('ul');
  projectName.classList.add('project-name');

  let j = 0;
  const subTitle = document.createElement('li');
  subTitle.classList.add('sub-title');
  const subTitleAnchor = document.createElement('a');
  subTitleAnchor.href = '#';
  subTitleAnchor.textContent = project.details[j];
  subTitle.append(subTitleAnchor);

  const bullet1 = document.createElement('li');
  bullet1.classList.add('bullet');
  bullet1.innerHTML = '&#x2022;';
  const bullet2 = document.createElement('li');
  bullet2.classList.add('bullet');
  bullet2.innerHTML = '&#x2022;';

  j += 1;
  const typeProject = document.createElement('li');
  const typeProjectAnchor = document.createElement('a');
  typeProjectAnchor.classList.add('backend-yr');
  typeProjectAnchor.href = '#';
  typeProjectAnchor.textContent = project.details[j];
  typeProject.append(typeProjectAnchor);

  j += 1;
  const date = document.createElement('li');
  const dateAnchor = document.createElement('a');
  dateAnchor.classList.add('backend-yr');
  dateAnchor.textContent = project.details[j];
  date.append(dateAnchor);

  projectName.append(subTitle);
  projectName.append(bullet1);
  projectName.append(typeProject);
  projectName.append(bullet2);
  projectName.append(date);

  // Descriptions
  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = project.description;
  /* */

  // detail Footer
  const detailFooter = document.createElement('div');
  detailFooter.classList.add('detail-footer');

  // list techonologies
  const technologies = document.createElement('ul');
  technologies.classList.add('classification');
  for (let i = 0; i < project.technologies.length; i += 1) {
    const li = document.createElement('li');
    li.classList.add('lang');
    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.textContent = project.technologies[i];
    li.append(anchor);
    technologies.append(li);
  }

  // Buttons
  const buttonLive = document.createElement('button');
  buttonLive.classList.add('btn');
  buttonLive.type = 'button';

  const txtBtnLive = document.createElement('p');
  txtBtnLive.textContent = 'See Live';

  const imgBtnLive = document.createElement('img');
  imgBtnLive.src = 'images/live-Icon.svg';
  imgBtnLive.alt = 'Button Live';
  buttonLive.append(txtBtnLive);
  buttonLive.append(imgBtnLive);

  const buttonSource = document.createElement('button');
  buttonSource.classList.add('btn');
  buttonSource.type = 'button';

  const txtBtnSource = document.createElement('p');
  txtBtnSource.textContent = 'See Source';

  const imgBtnSource = document.createElement('img');
  imgBtnSource.src = 'images/purple-github in button.svg';
  imgBtnSource.alt = 'Button Source';
  buttonSource.append(txtBtnSource);
  buttonSource.append(imgBtnSource);

  detailFooter.append(technologies);
  detailFooter.append(buttonLive);
  detailFooter.append(buttonSource);

  // Add all element into the container
  portfolioSnapshot.append(title);
  portfolioSnapshot.append(btnWrapper);
  portfolioSnapshot.append(projectName);
  portfolioSnapshot.append(imgDiv);
  portfolioSnapshot.append(description);
  portfolioSnapshot.append(detailFooter);

  popupWrapper.append(portfolioSnapshot);
  document.body.append(popupWrapper);
}

/* Update list of project dynamicaly */
const listProject = [
  {
    name: 'Tonic', description: 'A daily section of privately personalized reads; no accounts or sign-ups required.', image: 'images/portfolio-snapshot-1.svg', details: ['CANOPY', 'Back End Dev', '2015'], technologies: ['html', 'css', 'javaScript'], link: { live: '', source: '' },
  },
  {
    name: 'Multi-Post Stories', description: 'A daily section of privately personalized reads; no accounts or sign-ups required.', image: 'images/portfolio- snapshot-2.svg', details: ['CANOPY', 'Back End Dev', '2015'], technologies: ['html', 'css', 'javaScript'], link: { live: '', source: '' },
  },
  {
    name: 'Tonic', description: 'A daily section of privately personalized reads; no accounts or sign-ups required.', image: 'images/portfolio- snapshoot-3.svg', details: ['CANOPY', 'Back End Dev', '2015'], technologies: ['html', 'css', 'javaScript'], link: { live: '', source: '' },
  },
  {
    name: 'Multi-Post Stories', description: 'A daily section of privately personalized reads; no accounts or sign-ups required.', image: 'images/portfolio-snapshoot-4.svg', details: ['CANOPY', 'Back End Dev', '2015'], technologies: ['html', 'css', 'javaScript'], link: { live: '', source: '' },
  },
];

const work = document.getElementById('work');
let index = 0;
listProject.forEach((project) => {
  const portfolioSnapshot = document.createElement('div');
  portfolioSnapshot.classList.add('portfolio-snapshot');

  const img = document.createElement('img');
  img.classList.add('img');
  img.src = project.image;
  img.alt = 'Portfolio-Snapshot-1';

  const workDescription = document.createElement('div');
  workDescription.classList.add('work-description');

  const title = document.createElement('h1');
  title.classList.add('project-title');
  title.textContent = project.name;

  /* List of details */
  const projectName = document.createElement('ul');
  projectName.classList.add('project-name');

  let j = 0;
  const subTitle = document.createElement('li');
  subTitle.classList.add('sub-title');
  const subTitleAnchor = document.createElement('a');
  subTitleAnchor.href = '#';
  subTitleAnchor.textContent = project.details[j];
  subTitle.append(subTitleAnchor);

  const bullet1 = document.createElement('li');
  bullet1.classList.add('bullet');
  bullet1.innerHTML = '&#x2022;';
  const bullet2 = document.createElement('li');
  bullet2.classList.add('bullet');
  bullet2.innerHTML = '&#x2022;';

  j += 1;
  const typeProject = document.createElement('li');
  const typeProjectAnchor = document.createElement('a');
  typeProjectAnchor.classList.add('backend-yr');
  typeProjectAnchor.href = '#';
  typeProjectAnchor.textContent = project.details[j];
  typeProject.append(typeProjectAnchor);

  j += 1;
  const date = document.createElement('li');
  const dateAnchor = document.createElement('a');
  dateAnchor.classList.add('backend-yr');
  dateAnchor.textContent = project.details[j];
  date.append(dateAnchor);

  projectName.append(subTitle);
  projectName.append(bullet1);
  projectName.append(typeProject);
  projectName.append(bullet2);
  projectName.append(date);

  // Descriptions
  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = project.description;

  const technologies = document.createElement('ul');
  technologies.classList.add('classification');
  for (let i = 0; i < project.technologies.length; i += 1) {
    const li = document.createElement('li');
    li.classList.add('lang');
    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.textContent = project.technologies[i];
    li.append(anchor);
    technologies.append(li);
  }

  // btn
  const buttonDiv = document.createElement('div');
  const button = document.createElement('button');
  button.classList.add('btn');
  button.type = 'button';
  button.textContent = 'See Project';

  // On click show detail
  button.addEventListener('click', () => { showDetail(project); });

  buttonDiv.append(button);

  // add all elements
  workDescription.append(title);
  workDescription.append(projectName);
  workDescription.append(description);
  workDescription.append(technologies);
  workDescription.append(buttonDiv);

  //
  if (index % 2 === 0) {
    portfolioSnapshot.append(img);
    portfolioSnapshot.append(workDescription);
  } else {
    portfolioSnapshot.append(workDescription);
    portfolioSnapshot.append(img);
  }

  // add project to the work section
  work.append(portfolioSnapshot);
  index += 1;
});

/* Form Validation */
const form = document.getElementById('form');
const error = document.getElementById('error');
form.addEventListener('submit', (event) => {
  const { email } = form.elements;
  if (email.validity.typeMismatch
    || email.value.toLowerCase() !== email.value
    || !email.validity.valid) {
    error.textContent = 'Invalid email. Please ensure you have the correct email address. Thank you!';
  } else {
    form.submit();
  }
});

window.addEventListener('beforeunload', () => {
  const savedData = { name: form.name.value, email: form.email.value, message: form.message.value };
  window.localStorage.setItem('formData', JSON.stringify(savedData));
});

window.addEventListener('load', () => {
  const savedData = JSON.parse(window.localStorage.getItem('formData'));
  form.name.value = savedData.name;
  form.email.value = savedData.email;
  form.message.value = savedData.message;
});
