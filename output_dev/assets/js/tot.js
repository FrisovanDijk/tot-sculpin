function openTab(e, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabbed_gallery_tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tabbed_gallery_label");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";
}

/**
 * Onclick function for infocards
 */
function infocard(e) {
    var icard = e.currentTarget.parentNode;
    var arrow = icard.querySelector(".icard_arrow");
    var explainer = icard.querySelector(".icard_content");

    if( explainer.style.display == "flex" ) {
        explainer.style.display = "none";
        arrow.style.webkitTransform = 'rotate(0deg)';
    } else {
        explainer.style.display = "flex";
        arrow.style.webkitTransform = 'rotate(180deg)';
    }
}