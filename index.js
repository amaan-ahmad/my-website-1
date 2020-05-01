new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: "#dots",
    // arrows: {
    //     prev: ".glider-prev",
    //     next: ".glider-next",
    // },
    responsive: [
        {
            breakpoint: 1030,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1.5,
                draggable: true,
            },
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                draggable: true,
            },
        },
    ],
});

// let hamburger = document.getElementById("hamburgerbtn");
// let mobileMenu = document.getElementById("mobileMenu");

// hamburger.addEventListener("click", function () {
//     mobileMenu.classList.toggle("active");
// });
