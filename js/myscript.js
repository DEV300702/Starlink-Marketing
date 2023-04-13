/**
 * File Name: myscript.js
 *
 * Revision History:
 *       Dev Manishkumar Shah, 2023-01-17 : Created
 */
//
// let slideIndex = 0;
// showSlides();
//
// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

var slideIndex = -1;
var x= document.getElementsByClassName("mySlides");
for (var i = 0; i < x.length;i++){
    x[i].style.display = "none";
}

function slider() {
    if (slideIndex >= 0) {
        x[slideIndex].style.display = "none"; //hide last image
    }
    if (slideIndex >= (x.length - 1)) {
        slideIndex = -1; //make it -1 as index starts from 0
    }

    x[++slideIndex].style.display = "block"; //show next image
    setTimeout(slider, 4000); // Change image every 4 seconds
}

document.addEventListener("DOMContentLoaded", function() {
    slider();
});








function highlightNav() {
    document.getElementById("home").style.backgroundColor = "orange";
}


function btnInternetPlan_click() {
    //$("#btnContentDisplay").val(`This are Internet Plans.`);
    let htmlCode = "";
    htmlCode+=`<h2>Internet Plans!</h2>
<p>
please fill the form and we will contact you shortly
</p>
<a data-role="button" href="#pageContactUs" class="btn btn-outline-secondary">Contact Us</a>
<a data-role="button" href="#pageSpecialOffers" class="btn btn-outline-secondary">View Offers</a>`;

    let lv = $("#btnContentDisplay");
    lv = lv.html(htmlCode);
    //lv.listview('refresh');

    //document.getElementById("btnContentDisplay").value ="This are Internet Plans";

}

function btnBusinessPlan_click() {
    let htmlCode = "";
    htmlCode+=`<h2>Business Plans!</h2>
<p>
please fill the form and we will contact you shortly
</p>
<a data-role="button" href="#pageContactUs" class="btn btn-outline-secondary">Contact Us</a>
<a data-role="button" href="#pageSpecialOffers" class="btn btn-outline-secondary">View Offers</a>`;

    let lv = $("#btnContentDisplay");
    lv = lv.html(htmlCode);
    //lv.listview('refresh');
    //$("#btnContentDisplay").val(`This are Business Plans.`);
    //document.getElementById("btnContentDisplay").value ="This are Business Plans";

}

function btnSmartHomePlan_click() {
    let htmlCode = "";
    htmlCode+=`<h2>Smart Home and Security Plans!</h2>
<p>
please fill the form and we will contact you shortly
</p>
<a data-role="button" href="#pageContactUs" class="btn btn-outline-secondary">Contact Us</a>
<a data-role="button" href="#pageSpecialOffers" class="btn btn-outline-secondary">View Offers</a>
`;

    let lv = $("#btnContentDisplay");
    lv = lv.html(htmlCode);
    // lv.listview('refresh');
    function linkClickHandler(){
        $location.prop("href","#pageContactUs");
    }

    //$("#lstViewOffers a").on("click",linkClickHandler);

    // $("#btnContentDisplay").val(`This are Smart Hone Plans.`);
}

function btnWirelessPlan_click() {
    let htmlCode = "";
    htmlCode+=`<h2>Wireless Internet Plans!</h2>
<p>
please fill the form and we will contact you shortly
</p>
<a data-role="button" offer-id="wifi-offers" href="#pageContactUs" class="btn btn-outline-secondary">Contact Us</a>
<a data-role="button" href="#pageSpecialOffers" class="btn btn-outline-secondary">View Offers</a>`;

    let lv = $("#btnContentDisplay");
    lv = lv.html(htmlCode);

    function linkClickHandler(){
        localStorage.setItem("offer-id", $(this).attr("offer-id"));
    }
   // $("#btnContentDisplay").val(`This are Wireless Plans.`);
}

function pageContactUs_pageshow() {
    if (localStorage.getItem("offer-id") == null ){

    }
}

function init(){
    $("#btnInternetPlan").on("click", btnInternetPlan_click);
    $("#btnBusinessPlan").on("click",btnBusinessPlan_click);
    $("#btnSmartHomePlan").on("click",btnSmartHomePlan_click);
    $("#btnWirelessPlan").on("click",btnWirelessPlan_click);


    $("#pageContactUs").on("pageshow",pageContactUs_pageshow);


}

$(document).ready(function () {
    console.log("My script is running");
    init();
});