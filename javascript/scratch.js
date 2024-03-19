document.addEventListener("DOMContentLoaded", function () {
  var mymap = L.map("mapid").setView([51.505, -0.09], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mymap);

  var options = {
    key: geocoder_api_key, // Assuming geocoder_api_key is defined somewhere
    limit: 10,
  };
  var control = L.Control.openCageSearch(options).addTo(mymap);

  L.graticule({
    style: {
      color: "white",
      weight: 1,
      interval: 100,
    },
  }).addTo(mymap);

  // Icon Class
  var LeafIcon = L.Icon.extend({
    options: {
      iconSize: [30, 30],
      iconAnchor: [20, 20],
      popupAnchor: [-3, -76],
    },
  });

  // Icon creation
  var skillIcon = new LeafIcon({
    iconUrl:
      "https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-skills-business-and-management-kiranshastry-solid-kiranshastry-4.png",
  });

  var wallIcon = new LeafIcon({
    iconUrl: "https://img.icons8.com/pastel-glyph/64/000000/great-wall.png",
  });

  var certiIcon = new LeafIcon({
    iconUrl: "https://img.icons8.com/ios/50/000000/certificate.png",
  });

  var eduIcon = new LeafIcon({
    iconUrl: "https://img.icons8.com/ios/50/000000/education.png",
  });

  var workIcon = new LeafIcon({
    iconUrl: "https://img.icons8.com/ios/50/000000/work.png",
  });

  var eduAltIcon = new LeafIcon({
    iconUrl:
      "https://img.icons8.com/pastel-glyph/64/000000/boarding-pass--v2.png",
  });

  var welcIcon = new LeafIcon({
    iconUrl: "https://img.icons8.com/pastel-glyph/64/000000/handshake--v2.png",
  });

  // Markers
  var skills = L.marker([27.174961, 78.042385], { icon: skillIcon })
    .bindTooltip("Skills", {
      permanent: true,
      direction: "auto",
      offset: [18, -18],
    })
    .addTo(mymap);

  skills.bindPopup(
    "<div id='skills'><b><strong> Skill / Years </strong><b> <br>\
      <img src='images/skill.png' alt='Taj_Mahal' width='128px' height='100'><br><p>\
      Python / 6<br>Arcpy / 5<br>Javascript / 3<br>ArcGIS API for JavaScript / 2<br>SQL / 9<br>ESRI products / 9<br> AutoDesk / 8<br> \
      FME / 7<br>Mapcom products / 8 \
      </p></div>"
  );

  var project = L.marker([40.334245, 116.477652], { icon: wallIcon })
    .bindTooltip("Projects", {
      permanent: true,
      direction: "auto",
      offset: [18, -18],
    })
    .addTo(mymap);

  project.bindPopup(
    "<div id='project'><b><strong> List of projects </strong><b><br>\
      <img src='images/greatwall.jpg' width='128px' height='100'><br><p>The Great Wall \
      of China is the collective name of a series of \
      fortification systems generally built across the historical northern borders of \
      China to protect and consolidate territories of Chinese states and empires against \
      various nomadic groups of the steppe and their polities.</p></div>"
  );

  var certificates = L.marker([30.328611, 35.441944], { icon: certiIcon })
    .bindTooltip("Certificates", {
      permanent: true,
      direction: "auto",
      offset: [18, -18],
    })
    .addTo(mymap);

  certificates.bindPopup(
    "<div id='certificates'><b><strong> Certificates </strong><b><br>\
      <br><p><a href=certificates/EsriSpacialAnalyst2012.pdf target=blank rel=noopener noreferrer>Esri - Learning Spatial Analyst</a><br> \
      <a href=certificates/GoingPlaceswithSpatialAnalysis.pdf target=blank rel=noopener noreferrer>Esri - Going Places with Spatial Analysis</a><br> \
      <a href=certificates/GIS_PythonForEveryone.pdf target=blank rel=noopener noreferrer>Python for Everyone</a><br> \
      <a href=certificates/BasicsOfPython.pdf target=blank rel=noopener noreferrer>Esri - Basics of Python</a><br> \
      <a href=certificates/PythonScriptingforGeoprocessionWorkflows.pdf target=blank rel=noopener noreferrer>Esri - Python Scripting for Geoprocessing Workflows</a><br> \
      <a href=certificates/ArcGISEssentialTraining_CertificateOfCompletion.pdf target=blank rel=noopener noreferrer>Lynda - ArcGIS Essential Training</a><br> \
      <a href=certificates/FoundationsofProgramming_Databases_CertificateOfCompletion.pdf target=blank rel=noopener noreferrer>Lynda - Foundations of Programming: Databases</a><br> \
      <a href=certificates/GIS_NetworkBuisnessAnalysis1.pdf target=blank rel=noopener noreferrer>Texas State University Library - Network/Business Analysis - Part 1</a><br> \
      <a href=certificates/GIS_NetworkBuisnessAnalysis2.pdf target=blank rel=noopener noreferrer>Texas State University Library - Network/Business Analysis - Part 2</a><br> \
      <a href=certificates/GIS_WherethereisnoArcGIS.pdf target=blank rel=noopener noreferrer>Texas State University Library - Exploring Open Source GIS</a><br> \
      </p></div>",
    {
      minWidth: 350,
    }
  );

  var education = L.marker([29.8833, -97.9414], { icon: eduIcon })
    .bindTooltip("Education", {
      permanent: true,
      direction: "auto",
      offset: [18, -18],
    })
    .addTo(mymap);

  education.bindPopup(
    "<div id='Education'><b><strong> Texas State University - San Marcos, TX \
      </strong><b><br> <img src='images/txst.jpg' width='128px' height='100'><br><p>\
      Master's of Applied Geography, <br>Geographic Information Science / 2018-2022 <br><br> \
      Bachelor's of Science, Water Resources / 2009-2013 <br><br> \
      Certificates in Geographic Information Science and Envrionmental Interpretation / 2009-2013 <br><br> \
      </p></div>"
  );

  var work = L.marker([-13.163056, -72.54556], { icon: workIcon })
    .bindTooltip("Work Experience", {
      permanent: true,
      direction: "auto",
      offset: [18, -18],
    })
    .addTo(mymap);

  work.bindPopup(
    "<div id='work'><b><strong> Texas State Univerity <br>Network Operations / 2012 - present\
      </strong><b><br> <img src='images/work.jpg' width='128px' height='100'><br><p>\
      The majority of my relevant work experience is centered around Network Operations \
      managing fiber optic and copper telephone cables using various spatial solutions \
      <br> Responsibilities Include: \
      <br><br> Design and manage the installation of outside plant telecom cables. \
      <br> Maintain GIS database using SQL Server Manager. \
      <br> Manage the creation of CAD diagrams of telecom enclosures and rooms. \
      <br> Train Network Operations staff on M4 Solutions and Pinnacle software. \
      <br> Ensure inside and outside plant cabling database records are current.\
      </p></div>",
    {
      minWidth: 400,
    }
  );

  var eduAlt = L.marker([54.3233, 10.1228], { icon: eduAltIcon })
    .bindTooltip("Study Abroad", {
      permanent: true,
      direction: "auto",
      offset: [18, -18],
    })
    .addTo(mymap);

  eduAlt.bindPopup(
    "<div id='eduAlt'><b><strong> Christian-Albrechts-University, Kiel, Germany \
      </strong><b><br> <img src='images/kiel.jpg' width='128px' height='100'><br><p>\
      Study abroad that saw the completion of two undergraduate courses: <br><br> \
      GIS Design and Implementation and Regional Field Studies <br><br> \
      GPA: 4.0 - Project Manager \
      </p></div>"
  );

  var welcome = L.marker([0, 0], { icon: welcIcon })
    .bindTooltip("Welcome!", {
      permanent: true,
      direction: "auto",
      offset: [18, -18],
    })
    .addTo(mymap);

  welcome.bindPopup(
    "<div id='welcome'><b><strong> Hi, my name is Ryan Bobo \
      </strong><b><br> <img src='images/RYAN.jpg' width='100px' height='100'><br><p>\
      I solve problems with geospatial technologies. <br> \
      Zoom out to learn more about me, <br>and thanks for stopping by! \
      </p></div>"
  );

  var ZoomViewer = L.Control.extend({
    onAdd: function () {
      var gauge = L.DomUtil.create("div");
      gauge.style.width = "200px";
      gauge.style.background = "rpga(255,255,255,0.5)";
      gauge.style.textAlign = "left";
      mymap.on("zoomstart zoom zoomend", function (ev) {
        gauge.innerHTML = "Zoom level: " + mymap.getZoom();
      });
      return gauge;
    },
  });

  new ZoomViewer().addTo(mymap);
});
