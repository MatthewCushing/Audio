const loadTurntableXML = () => {
  const xmlRequest = new XMLHttpRequest();
  xmlRequest.open('GET', '../xml/turntables.xml', true);

  xmlRequest.onreadystatechange = () => {
    if (xmlRequest.readyState === 4 && xmlRequest.status === 200) {
      createTurntableTable(xmlRequest);
    }
  };

  xmlRequest.send();
};

const createTurntableTable = xml => {
  const XMLDocument = xml.responseXML;
  const data = XMLDocument.querySelectorAll('turntable');
  let table = `
    <tr>
      <th>Brand</th>
      <th>Model</th>
      <th>Type</th>
      <th>Price</th>
    </tr>
  `;
  for (let i = 0; i < data.length; ++i) {
    table += `
      <tr>
        <td>${data[i].querySelectorAll('brand')[0].childNodes[0].nodeValue}</td>
        <td>${data[i].querySelectorAll('model')[0].childNodes[0].nodeValue}</td>
        <td>${data[i].querySelectorAll('type')[0].childNodes[0].nodeValue}</td>
        <td>${data[i].querySelectorAll('price')[0].childNodes[0].nodeValue}</td>
      </tr>
    `;
  }
  document.querySelector('#table_turntable').innerHTML = table;
};

const loadSpeakerXML = () => {
  const xmlRequest = new XMLHttpRequest();
  xmlRequest.open('GET', '../xml/speakers.xml', true);

  xmlRequest.onreadystatechange = () => {
    if (xmlRequest.readyState === 4 && xmlRequest.status === 200) {
      createSpeakersTable(xmlRequest);
    }
  };

  xmlRequest.send();
};

const createSpeakersTable = xml => {
  const XMLDocument = xml.responseXML;
  const data = XMLDocument.querySelectorAll('speaker');
  let table = `
    <tr>
      <th>Brand</th>
      <th>Model</th>
      <th>Power</th>
      <th>Finish</th>
      <th>Price</th>
    </tr>
  `;
  for (let i = 0; i < data.length; ++i) {
    table += `
      <tr>
        <td>${data[i].querySelectorAll('brand')[0].childNodes[0].nodeValue}</td>
        <td>${data[i].querySelectorAll('model')[0].childNodes[0].nodeValue}</td>
        <td>${data[i].querySelectorAll('power')[0].childNodes[0].nodeValue}</td>
        <td>${
          data[i].querySelectorAll('finish')[0].childNodes[0].nodeValue
        }</td>
        <td>${data[i].querySelectorAll('price')[0].childNodes[0].nodeValue}</td>
      </tr>
    `;
  }
  document.querySelector('#table_speakers').innerHTML = table;
};

const loadRecordXML = () => {
  const xmlRequest = new XMLHttpRequest();
  xmlRequest.open('GET', '../xml/records.xml', true);

  xmlRequest.onreadystatechange = () => {
    if (xmlRequest.readyState === 4 && xmlRequest.status === 200) {
      createRecordsTable(xmlRequest);
    }
  };

  xmlRequest.send();
};

const createRecordsTable = xml => {
  const XMLDocument = xml.responseXML;
  const data = XMLDocument.querySelectorAll('record');
  let table = `
    <tr>
      <th>Artist</th>
      <th>Album</th>
      <th>Genre</th>
      <th>Label</th>
      <th>Song Count</th>
      <th>Price</th>
    </tr>
  `;
  for (let i = 0; i < data.length; ++i) {
    table += `
      <tr>
        <td>${
          data[i].querySelectorAll('artist')[0].childNodes[0].nodeValue
        }</td>
        <td>${data[i].querySelectorAll('album')[0].childNodes[0].nodeValue}</td>
        <td>${data[i].querySelectorAll('genre')[0].childNodes[0].nodeValue}</td>
        <td>${data[i].querySelectorAll('label')[0].childNodes[0].nodeValue}</td>
        <td>${
          data[i].querySelectorAll('song_count')[0].childNodes[0].nodeValue
        }</td>
        <td>${data[i].querySelectorAll('price')[0].childNodes[0].nodeValue}</td>
      </tr>
    `;
  }
  document.querySelector('#table_records').innerHTML = table;
};

const loadMicrophoneXML = () => {
  const xmlRequest = new XMLHttpRequest();
  xmlRequest.open('GET', '../xml/microphones.xml', true);

  xmlRequest.onreadystatechange = () => {
    if (xmlRequest.readyState === 4 && xmlRequest.status === 200) {
      createMicrophonesTable(xmlRequest);
    }
  };

  xmlRequest.send();
};

const createMicrophonesTable = xml => {
  const XMLDocument = xml.responseXML;
  const data = XMLDocument.querySelectorAll('mic');
  let table = `
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Connector</th>
      <th>Description</th>
      <th>Price</th>
    </tr>
  `;
  for (let i = 0; i < data.length; ++i) {
    table += `
      <tr>
        <td>${data[i].querySelectorAll('name')[0].childNodes[0].nodeValue}</td>
        <td>${data[i].querySelectorAll('type')[0].childNodes[0].nodeValue}</td>
        <td>${
          data[i].querySelectorAll('connector')[0].childNodes[0].nodeValue
        }</td>
        <td>${
          data[i].querySelectorAll('description')[0].childNodes[0].nodeValue
        }</td>
        <td>${data[i].querySelectorAll('price')[0].childNodes[0].nodeValue}</td>
      </tr>
    `;
  }
  document.querySelector('#table_microphones').innerHTML = table;
};

const loadHeadphoneXML = () => {
  const xmlRequest = new XMLHttpRequest();
  xmlRequest.open('GET', '../xml/headphones.xml', true);

  xmlRequest.onreadystatechange = () => {
    if (xmlRequest.readyState === 4 && xmlRequest.status === 200) {
      createHeadphonesTable(xmlRequest);
    }
  };

  xmlRequest.send();
};

const createHeadphonesTable = xml => {
  const XMLDocument = xml.responseXML;
  const data = XMLDocument.querySelectorAll('headphone');
  let table = `
    <tr>
      <th>Brand</th>
      <th>Model</th>
      <th>Noise Cancelling</th>
      <th>Type</th>
      <th>Battery Life</th>
      <th>Price</th>
    </tr>
  `;
  for (let i = 0; i < data.length; ++i) {
    table += `
      <tr>
        <td>${data[i].querySelectorAll('brand')[0].childNodes[0].nodeValue}</td>
        <td>${data[i].querySelectorAll('model')[0].childNodes[0].nodeValue}</td>
        <td>${
          data[i].querySelectorAll('noise_cancel')[0].childNodes[0].nodeValue
        }</td>
        <td>${data[i].querySelectorAll('type')[0].childNodes[0].nodeValue}</td>
        <td>${
          data[i].querySelectorAll('battery_life')[0].childNodes[0].nodeValue
        }</td>
        <td>${data[i].querySelectorAll('price')[0].childNodes[0].nodeValue}</td>
      </tr>
    `;
  }
  document.querySelector('#table_headphones').innerHTML = table;
};

function toggleTurntableDisplay() {
  let turntable = document.querySelector('.turntable-container');
  turntable.style.display === 'block'
    ? (turntable.style.display = 'none')
    : (turntable.style.display = 'block');
}

function toggleSpeakerDisplay() {
  let speaker = document.querySelector('.speaker-container');
  speaker.style.display === 'block'
    ? (speaker.style.display = 'none')
    : (speaker.style.display = 'block');
}

function toggleRecordDisplay() {
  let record = document.querySelector('.record-container');
  record.style.display === 'block'
    ? (record.style.display = 'none')
    : (record.style.display = 'block');
}

function toggleMicrophoneDisplay() {
  let microphone = document.querySelector('.microphone-container');
  microphone.style.display === 'block'
    ? (microphone.style.display = 'none')
    : (microphone.style.display = 'block');
}

function toggleHeadphoneDisplay() {
  let headphone = document.querySelector('.headphone-container');
  headphone.style.display === 'block'
    ? (headphone.style.display = 'none')
    : (headphone.style.display = 'block');
}

loadTurntableXML();
loadSpeakerXML();
loadRecordXML();
loadMicrophoneXML();
loadHeadphoneXML();
