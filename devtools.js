console.log("CDT");
chrome.devtools.panels.create("Canvas DevTools",
  null,
  "panel.html",
  function() {
    console.log("start");
  }
);
