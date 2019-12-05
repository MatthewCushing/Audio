// Declaring arrays
const name = [];
const description = [];
const price = [];
const imageURL = [];
const divs = [];

// Time to start fetching the XML data
let request = new XMLHttpRequest();
request.open('GET', '../xml/microphones.xml', true);
request.onload = () => {
  // Checking if everything is okay prior to jumping in
  if (request.readyState === 4) {
    if (request.status === 200) {
      // Grabbing XML data
      xml = request.responseXML;
      const names = xml.getElementsByTagName('name');
      const descriptions = xml.getElementsByTagName('description');
      const prices = xml.getElementsByTagName('price');
      const imageURLs = xml.getElementsByTagName('image');

      // Storing XML data in arrays
      for (let i = 0; i < 15; ++i) {
        name[i] = names[i].childNodes[0].nodeValue;
        description[i] = descriptions[i].childNodes[0].nodeValue;
        price[i] = prices[i].childNodes[0].nodeValue;
        imageURL[i] = imageURLs[i].childNodes[0].nodeValue;
      }

      // Putting title in document per assignment instructions
      h1 = document.createElement('h1');
      h1.innerHTML = document.title;
      document.querySelector('.sidebar-left').prepend(h1);

      // Looping through the XML name data to add a list of microphones
      name.forEach(item => {
        document.querySelector(
          '.items'
        ).innerHTML += `<li class="list-item">${item}</li>`;
      });

      // Creating dynamic class names so I can loop through later
      // and display a container per an on click event specific
      // to that list item for the microphone products
      for (let i = 0; i < 15; ++i) {
        divs[i] = document.createElement('div');
        divs[i].className = `item-${i}`;
        divs[i].innerHTML += `
        <img class="item-image" src="${imageURL[i]}" />
        <p class="item-description">${description[i]}</p>
        <div class="item-price">
          <p>ONLY</p>
          <p class="price">$${price[i]}</p>
        </div>
        `;

        // Setting the display to none for now until click event happens
        divs[i].style.display = 'none';

        // Append it
        document.querySelector('.sidebar-right').append(divs[i]);
      }
    } else {
      // Logging error in console
      console.log(request.statusText);
    }
  }
};
request.send();

// Adding date to bottom of page per assignment instructions
date = new Date();
document.querySelector(
  'footer'
).innerHTML = `Copyright &copy; Matthew Cushing ${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;

// Coming back for the event listener to show each microphone product on click
document.querySelector('.items').addEventListener('click', e => {
  if (e.target && e.target.matches('li.list-item')) {
    for (let i = 0; i < 15; ++i) {
      document.querySelector('.primary-image').style.display = 'none';
      divs[i].style.display = 'none';
      if (e.target.innerHTML === name[i]) {
        divs[i].style.display = 'grid';
      }
      console.log(divs[i]);
    }
  }
});
