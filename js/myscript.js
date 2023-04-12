/**
 * File Name: myscript.js
 *
 * Revision History:
 *       Dev Manishkumar Shah, 2023-01-17 : Created
 */
// let slideIndex = 0;
// showSlides();
// var imgTimeOut;
// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     imgTimeOut = setTimeout(showSlides, 5000); // Change image every 5 seconds
// }



// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-50px";
//     }
// }

function plusSlides(addWith) {
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex == 1 && addWith == -1) {
        slideIndex = slides.length + 1;
    }
    if (slideIndex == 3 && addWith == 1) {
        slideIndex = 0;
    }
    slides[slideIndex - 1 + addWith].style.display = "block";

    slideIndex += addWith;

    clearTimeout(imgTimeOut);

    imgTimeOut = setTimeout(showSlides, 5000);
}


function highlightNav() {
    document.getElementById("home").style.backgroundColor = "orange";
}


function btnInternetPlan_click() {
    //$("#btnContentDisplay").val(`This are Internet Plans.`);
    let htmlCode = "";
    htmlCode+=`<h2>Internet Plans!</h2>
<p>
please feel the form and we will contact you shortly
</p>
<a data-role="button" href="#pageContactUs" class="btn btn-outline-secondary">Contact Us Form</a>
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
please feel the form and we will contact you shortly
</p>
<a data-role="button" href="#pageContactUs" class="btn btn-outline-secondary">Contact Us Form</a>
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
please feel the form and we will contact you shortly
</p>
<a data-role="button" href="#pageContactUs" class="btn btn-outline-secondary">Contact Us Form</a>
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
please feel the form and we will contact you shortly
</p>
<a data-role="button" offer-id="wifi-offers" href="#pageContactUs" class="btn btn-outline-secondary">Contact Us Form</a>
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