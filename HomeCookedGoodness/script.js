/* ==================================================
   HOME COOKED GOODNESS
   SCRIPT.JS
================================================== */


document.addEventListener("DOMContentLoaded", () => {


    console.log("🍃 Home Cooked Goodness Website Loaded!");





    /* ==================================================
       STICKY NAVBAR EFFECT
    ================================================== */


    const header = document.querySelector("header");



    window.addEventListener("scroll", () => {



        if (window.scrollY > 50) {



            header.style.background =
                "rgba(255,255,255,0.98)";



            header.style.backdropFilter =
                "blur(18px)";



            header.style.boxShadow =
                "0 15px 35px rgba(0,0,0,0.12)";



        }

        else {



            header.style.background =
                "rgba(255,255,255,0.95)";



            header.style.boxShadow =
                "0 8px 25px rgba(0,0,0,0.06)";



        }



    });









    /* ==================================================
       SMOOTH SCROLLING
    ================================================== */


    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {



            anchor.addEventListener("click", function(e) {



                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );



                if(target){



                    e.preventDefault();



                    target.scrollIntoView({



                        behavior:"smooth"



                    });



                }



            });



        });









    /* ==================================================
       ACTIVE NAVIGATION
    ================================================== */


    const sections =
        document.querySelectorAll("section");



    const navLinks =
        document.querySelectorAll("nav a");





    window.addEventListener("scroll", () => {



        let current = "";



        sections.forEach(section => {



            const sectionTop =
                section.offsetTop - 150;





            if(window.scrollY >= sectionTop){



                current =
                section.getAttribute("id");



            }



        });





        navLinks.forEach(link => {



            link.classList.remove("active");





            if(
                link.getAttribute("href")
                === "#" + current
            ){



                link.classList.add("active");



            }



        });



    });









    /* ==================================================
       SCROLL REVEAL ANIMATION
    ================================================== */


    const revealElements =
        document.querySelectorAll(

            ".card, \
            .about-image, \
            .about-text, \
            .product-image, \
            .product-details, \
            .contact-item"

        );






    function reveal(){



        const windowHeight =
            window.innerHeight;





        revealElements.forEach(element => {



            const elementTop =
                element.getBoundingClientRect().top;





            if(elementTop < windowHeight - 100){



                element.classList.add("show");



            }



        });



    }







    window.addEventListener(
        "scroll",
        reveal
    );



    reveal();




});
/* ==================================================
   BACK TO TOP BUTTON
================================================== */


const topBtn = document.getElementById("topBtn");



if(topBtn){


    window.addEventListener("scroll",()=>{


        if(window.scrollY > 500){


            topBtn.style.display="flex";


        }

        else{


            topBtn.style.display="none";


        }


    });




    topBtn.addEventListener("click",()=>{


        window.scrollTo({


            top:0,


            behavior:"smooth"


        });



    });



}









/* ==================================================
   BUTTON RIPPLE EFFECT
================================================== */


const buttons =
document.querySelectorAll(

    ".btn-primary, .btn-secondary, .whatsapp-btn"

);





buttons.forEach(button=>{



    button.addEventListener(
        "click",
        function(e){



            const ripple =
            document.createElement("span");



            const diameter =
            Math.max(
                this.clientWidth,
                this.clientHeight
            );



            ripple.style.width =
            ripple.style.height =
            diameter + "px";



            ripple.style.left =
            e.offsetX -
            diameter / 2 + "px";



            ripple.style.top =
            e.offsetY -
            diameter / 2 + "px";



            ripple.classList.add(
                "ripple"
            );





            const oldRipple =
            this.querySelector(".ripple");



            if(oldRipple){


                oldRipple.remove();


            }





            this.appendChild(ripple);



        }


    );


});









/* ==================================================
   MOBILE NAVIGATION SUPPORT
================================================== */


const nav =
document.querySelector("nav");



const navbar =
document.querySelector(".navbar");



if(nav && navbar){



    const navLinks =
    nav.querySelectorAll("a");





    navLinks.forEach(link=>{



        link.addEventListener(
            "click",
            ()=>{



                if(window.innerWidth <= 768){



                    nav.classList.remove(
                        "mobile-open"
                    );



                }



            }


        );



    });



}









/* ==================================================
   IMAGE LOADING EFFECT
================================================== */


const images =
document.querySelectorAll("img");





images.forEach(img=>{



    img.addEventListener(
        "load",
        ()=>{


            img.classList.add(
                "loaded"
            );


        }


    );



});









/* ==================================================
   WHATSAPP ORDER TRACKING
================================================== */


const whatsappButtons =
document.querySelectorAll(

    'a[href*="wa.me"]'

);





whatsappButtons.forEach(button=>{



    button.addEventListener(
        "click",
        ()=>{


            console.log(
                "📲 WhatsApp Order Button Clicked"
            );


        }

    );



});









/* ==================================================
   CURRENT YEAR AUTO UPDATE
================================================== */


const year =
document.querySelector(".copyright");



if(year){



    const currentYear =
    new Date().getFullYear();



    year.innerHTML =
    `© ${currentYear} Home Cooked Goodness. All Rights Reserved.`;



}









/* ==================================================
   PERFORMANCE OPTIMIZATION
================================================== */


window.addEventListener(
    "load",
    ()=>{


        document.body.classList.add(
            "loaded"
        );


    }

);