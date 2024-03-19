document.addEventListener("DOMContentLoaded", function () {
  var mymap = L.map("mapid").setView([0, 0], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
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
    iconUrl: "images/skills.png",
  });
  var wallIcon = new LeafIcon({
    iconUrl: "images/projects.png",
  });

  var certiIcon = new LeafIcon({
    iconUrl: "images/certificate.png",
  });

  var eduIcon = new LeafIcon({
    iconUrl: "images/education.png",
  });

  var workIcon = new LeafIcon({
    iconUrl: "images/work.png",
  });

  var eduAltIcon = new LeafIcon({
    iconUrl: "images/educationAlt.png",
  });

  var welcIcon = new LeafIcon({
    iconUrl: "images/welcome.png",
  });
  // Markers
  var skills = L.marker([27.174961, 78.042385], { icon: skillIcon })
    .bindTooltip("Skills", {
      permanent: true,
      direction: "auto",
      offset: [18, -18],
    })
    .addTo(mymap);

  // Dynamic year calculation
  var currentYear = new Date().getFullYear();
  var pyStart = 2016;
  var arcPyStart = 2017;
  var jsStart = 2020;
  var arcJsStart = 2021;
  var esriSqlStart = 2011;
  var mapcomFmeStart = 2015;

  var yearsOfPy = currentYear - pyStart;
  var yearsOfArcpy = currentYear - arcPyStart;
  var yearsOfJs = currentYear - jsStart;
  var yearsOfArcJs = currentYear - arcJsStart;
  var yearsOfEsri = currentYear - esriSqlStart;
  var yearsOfSql = currentYear - esriSqlStart;
  var yearsOfFme = currentYear - mapcomFmeStart;
  var yearsOfMapcom = currentYear - mapcomFmeStart;
  skills.bindPopup(
    `<div id='skills'><b><strong> Skill / Years </strong><b> <br>\
    <img src='images/skill.png' alt='Taj_Mahal' width='128px' height='100'><br><p>\
    ESRI products / <span id =''>${yearsOfEsri}</span><br>\
    SQL / <span id =''>${yearsOfSql}</span><br>\
    AutoDesk / <span id =''>${yearsOfEsri - 1}</span><br>\
    Mapcom products / <span id =''>${yearsOfMapcom}</span><br>\
    FME / <span id =''>${yearsOfFme}</span><br>\
    Python / <span id='pyYr'>${yearsOfPy}</span> <br>\
    Arcpy / <span id ='arcYr'>${yearsOfArcpy}</span><br>\
    Javascript / <span id ='jsYr'>${yearsOfJs}</span><br>\
    ArcGIS API for JavaScript / <span id =''>${yearsOfArcJs}</span><br>\
    </p></div>`
  );

  var project = L.marker([40.334245, 116.477652], { icon: wallIcon })
    .bindTooltip("Projects", {
      permanent: true,
      direction: "auto",
      offset: [18, -18],
    })
    .addTo(mymap);

  project.bindPopup(
    "<div id='projects'><b><strong> Projects</strong><b> <br>\
      <a class ='btn' href='https://github.com/tryanbobo/dxf-roomnum-extraction' target='_blank'>Dxf Room Number Extraction</a><br>\
      <a class ='btn' href='https://github.com/tryanbobo/GeoDB-Update' target='_blank'>GeoDB-Update</a><br>\
      <a class ='btn' href='https://github.com/tryanbobo/IndoorWiFIOccupancy' target='_blank'>Indoor Wi-Fi Occupancy Analysis</a><br>\
      <a class ='btn' href='https://github.com/tryanbobo/FindYourPath' target='_blank'>Find Your Path</a><br>\
      <a class ='btn' href='https://github.com/tryanbobo/Transpropagation' target='_blank'>Transpropagation</a>\
    "
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
    "<div id='welcome'>\
      <b><strong> Hi, my name is Ryan Bobo</strong><b><br>\
      <img src='images/RYAN.jpg' width='100px' height='100'><br>\
      <p>I solve problems with geospatial technologies. <br> \
      Zoom out to learn more about me, <br>and thanks for stopping by!</p>\
    </div>"
  );

  // // dynamic year
  // var pyStart = 2015;
  // var currentYear = new Date().getFullYear();
  // var yearsOfPy = currentYear - pyStart;

  // document.getElementById("year").innerHTML = currentYear;
  // document.getElementById("pyYr").innerHTML = yearsOfPy;
});
