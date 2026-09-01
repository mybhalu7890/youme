/* =========================================
   ANKIT ❤️ LOVE WEBSITE
========================================= */


/* =========================================
   LOADING SCREEN
========================================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        const loadingScreen =
            document.getElementById("loadingScreen");

        loadingScreen.classList.add("hide");

    }, 1800);

});



/* =========================================
   RELATIONSHIP START DATE
   28/02/2018
========================================= */

const relationshipStart =
    new Date(
        2018,
        1,
        28,
        0,
        0,
        0
    );



/* =========================================
   RELATIONSHIP COUNTER
========================================= */

function updateCounter() {

    const now = new Date();


    let years =
        now.getFullYear() -
        relationshipStart.getFullYear();


    const anniversary =
        new Date(
            now.getFullYear(),
            relationshipStart.getMonth(),
            relationshipStart.getDate()
        );


    if (now < anniversary) {
        years--;
    }


    const lastAnniversary =
        new Date(
            relationshipStart.getFullYear() + years,
            relationshipStart.getMonth(),
            relationshipStart.getDate()
        );


    const difference =
        now - lastAnniversary;


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    const totalMonths =
        years * 12 +
        (
            now.getMonth() -
            relationshipStart.getMonth()
        );


    const months =
        (totalMonths % 12 + 12) % 12;


    document.getElementById("years")
        .textContent = years;


    document.getElementById("months")
        .textContent = months;


    document.getElementById("days")
        .textContent = days;


    document.getElementById("hours")
        .textContent = hours;


    document.getElementById("minutes")
        .textContent = minutes;


    document.getElementById("seconds")
        .textContent = seconds;

}


updateCounter();


setInterval(
    updateCounter,
    1000
);



/* =========================================
   SCROLL TO LETTER
========================================= */

function scrollToLetter() {

    document
        .querySelector(".letter-intro")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =========================================
   YOUR LETTER
========================================= */

const letterText = `yaar i love you , past se leke future tak hamesa ,

mujhe best wo lagte hai wo sare pal jo hum sath milke bitate hain , bhale se hum kuch na bhi kare usme , tumhara mere passs hona hi mujhe pyaar ka ehsaas karwata hain ,

me shyd jitna dikha nahi pati usse jyda tumse pyaar karti hu ,

kabhi tumse na ladne ko man karta na door jane ko , ladne me serious wli ladai nahi bas hasi majak wali usme maje ate hai ,

acha lagta hai jab tum sari chije mere liye sochte ho , apne future keliye sochte ho ,

hmare bitaye har ekek moment mujhe yaad rehte hai , or wo sab mere liye bhot special hain , ekdum heeree jese ,

or to bas itna kahungi abhi tum jare ho ghumne ,kisi ka to pata nahi me tumhe bhot miss krungi kyunki abhise 15 din ese lagne lage hai sunke jese kitne jyda ho ,

baki enjoy your trip and i love you is duniya me sabseeeeeeeeeeeeeeee jydaaaaaaaaaaaaaaaaaaaaaa.`;



/* =========================================
   TYPEWRITER LETTER
========================================= */

let letterStarted = false;


function openLetter() {

    const letterSection =
        document.getElementById(
            "letterSection"
        );


    letterSection.scrollIntoView({
        behavior: "smooth"
    });


    if (letterStarted) {
        return;
    }


    letterStarted = true;


    const typedLetter =
        document.getElementById(
            "typedLetter"
        );


    typedLetter.textContent = "";


    let index = 0;


    function typeLetter() {

        if (index < letterText.length) {

            typedLetter.textContent +=
                letterText.charAt(index);


            index++;


            let speed = 18;


            if (
                letterText.charAt(index) === "." ||
                letterText.charAt(index) === ","
            ) {

                speed = 100;

            }


            if (
                letterText.charAt(index) === "\n"
            ) {

                speed = 180;

            }


            setTimeout(
                typeLetter,
                speed
            );

        }

    }


    setTimeout(
        typeLetter,
        800
    );

}



/* =========================================
   FLOATING HEARTS
========================================= */

const heartsContainer =
    document.getElementById(
        "heartsContainer"
    );


const heartSymbols = [
    "♡",
    "♥",
    "❤",
    "💗",
    "💕"
];


function createHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.classList.add(
        "floating-heart"
    );


    heart.textContent =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        12 +
        Math.random() * 22 +
        "px";


    const duration =
        7 +
        Math.random() * 8;


    heart.style.animationDuration =
        duration + "s";


    heartsContainer.appendChild(
        heart
    );


    setTimeout(function () {

        heart.remove();

    }, duration * 1000);

}


setInterval(
    createHeart,
    800
);



/* =========================================
   MUSIC
========================================= */

const music =
    document.getElementById(
        "backgroundMusic"
    );


const musicButton =
    document.getElementById(
        "musicButton"
    );


let musicPlaying = false;


musicButton.addEventListener(
    "click",
    function () {

        if (!musicPlaying) {

            music.play()
                .then(function () {

                    musicPlaying = true;

                    musicButton.textContent =
                        "♫";

                })
                .catch(function () {

                    alert(
                        "music/song.mp3 add karo ❤️"
                    );

                });

        }

        else {

            music.pause();

            musicPlaying = false;

            musicButton.textContent =
                "♪";

        }

    }
);



/* =========================================
   CLICK HEART EFFECT
========================================= */

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.tagName ===
            "BUTTON"
        ) {
            return;
        }


        const heart =
            document.createElement(
                "div"
            );


        heart.textContent =
            "❤";


        heart.style.position =
            "fixed";


        heart.style.left =
            event.clientX + "px";


        heart.style.top =
            event.clientY + "px";


        heart.style.fontSize =
            "20px";


        heart.style.pointerEvents =
            "none";


        heart.style.zIndex =
            "9999";


        heart.style.color =
            "#e85b7d";


        heart.style.transition =
            "all 1s ease";


        document.body.appendChild(
            heart
        );


        setTimeout(function () {

            heart.style.transform =
                "translateY(-80px) scale(1.5)";

            heart.style.opacity =
                "0";

        }, 50);


        setTimeout(function () {

            heart.remove();

        }, 1100);

    }
);



/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "28/02/2018 ❤️ — forever"
);
