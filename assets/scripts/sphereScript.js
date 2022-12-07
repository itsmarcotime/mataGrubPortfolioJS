const Texts = [
    "HTML",
    "CSS",
    "JavaScript",
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "MySQL",
    "Sequelize",
    "Jquery",
    "ES6",
    "Python",
    "GIT",
    "GITHUB",
  ];

  var tagCloud = TagCloud(".Sphere", Texts, {
    //sphere radius in px
    radius: 230,

    //animation speed
    //slow, normal, fast
    maxSpeed: "fast",
    initSpeed: "fast",

    //rolling direction [0 (top), 90 (left), 135 (right-bottom)]
    direction: 135,

    //interaction with the mouse 
    keep: true
  });

  // giving color 
  var color = "#333"
  document.querySelector(".Sphere").style.color = color;