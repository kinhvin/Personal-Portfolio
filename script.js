var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {

    // Hide the current link
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    } // end of 
    
    // Hide the current tab
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    } // end of for

    // Set the new active link
    event.currentTarget.classList.add("active-link");

    // Display the contents
    document.getElementById(tabname).classList.add("active-tab");

} // end of opentab function

function toggleAppearance() {

    const myImg = document.getElementById("mode-img");

    if (myImg.src = "src/light-mode.png") {
        myImg.src = "src/dark-mode.png"
    }

    else {
        myImg.src = "src/light-mode.png";
    }

    document.body.classList.toggle("light-mode");
}
