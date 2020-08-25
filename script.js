//this JS is take from https://www.w3schools.com/howto/howto_js_vertical_tabs.asp
const openEntry(evt, EntryName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  console.log("bleh you clicked me m8")
  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(EntryName).style.display = "block";
  evt.currentTarget.className += " active";
}