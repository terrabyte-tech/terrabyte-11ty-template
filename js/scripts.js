window.addEventListener("load", function(){

  // var thisScript = document.querySelector("script[src='./js/scripts.js']");
  // var thisScriptSiteTitle = thisScript.getAttribute("data-site-title");

  // console.log(thisScript);
  console.log(thisScriptSiteTitle + " scripts.js loaded");

  // Add a class to the body element to indicate that the page has loaded
  document.body.classList.add("loaded");
  
}, false);