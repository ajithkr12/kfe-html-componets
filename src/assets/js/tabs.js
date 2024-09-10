function openTab(tabId) {
  // Hide all tab content
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("tab-active");
  }

  // Remove active class from all tabs
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("tab-active");
  }

  // Show the selected tab content and add the active class to the clicked tab
  document.getElementById(tabId).classList.add("tab-active");
  event.target.classList.add("tab-active");
}
