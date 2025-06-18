window.addEventListener("load", function(){

  console.log("{{ site.title }} scripts.js loaded");

  // Add a class to the body element to indicate that the page has loaded
  document.body.classList.add("loaded");
  
}, false);