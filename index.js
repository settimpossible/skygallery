let page = 0;
let rightToContinue = true;
const pages = [
  {
    title: "Homepage",
    background: "url(./gallery/background/1.png)",
    body: `
    <section class="container">
        <div class="center-image"><img id="icone1" src="./accueil/1.png" alt="icone1"></div>
        <div class="center-image"><img id="icone2"src="./accueil/2.png" alt="icone2"></div>
        <div class="center-image"><img id="icone3" src="./accueil/3.png" alt="icone3"></div>
    </section>
    <div class="ray-hoover"></div>

        <footer id="cloud-container" class="nextPage enter-game" >
        <div class='sub-footer'>
          <div class="footer-title incline" >Sky gallery</div>
          <img id='ray' class='hidden' src="./accueil/ray.png" alt="cloud">
          <img id="cloud" class='footer-cloud' src="./accueil/cloud.png" alt="cloud">
          <img id="arrow" class='footer-arrow' src="./accueil/arrow.gif" alt="arrow">
        </div>

        </footer>
        `,
  },
  {
    title: "Introduction",
    logic: pageIntro,
    background: "url(./gallery/background/8.png)",
    body: `  
    <div class="bloc">
    <h1>Are you ready?</h1>
    <p> Clouds tell secrets about pieces of art. <br>

    Not any piece of art, though.<br>
    
    They will remain silent until you find out!<br>
  </p>
  </div>
  <img class='personnage perso1' src="./gallery/personnage/4.png" alt="perso">

  <footer class="button-prev-next">
    <div>
        <img class='previous-page previousPage' src="./gallery/arrow/3.png" alt="arrowprevious">
    </div>
    <div>
        <img id='continue' class="nextPage next-page hidden" src="./gallery/arrow/3.png" alt="arrownext">
    </div>
  </footer>`,
  },
  {
    title: "Chapter One",
    logic: pageNumber,

    answer: 5,
    background: "url(./gallery/background/3.png)",
    body: `
    <h1>A key to the artist's name</h1>
    <p> When we're 2, we are 3! 🧐<br>
    We are 5, we are 4, 🤪<br>
    We are 6, we are 3, 🤯<br>
    What if we are 7 ? 😳<br>
  </p>

  <img class='personnage perso1' src="./gallery/personnage/2.png" alt="perso">

  
  <input class="enigma1-nb" type="number" id="nb1" name="nb" required
         minlength="1" maxlength="10" size="10">

  <button id="submit-enigma1">Let's try this!</button>
  <img src="./gallery/output/yes.png" id="hiddenyes" class="hidden"/>
  <img src="./gallery/output/no.png" id="hiddenno" class="hidden"/>

  <footer class="button-prev-next">
    <div >
        <img class='previous-page previousPage' src="./gallery/arrow/3.png" alt="arrowprevious">
    </div>
    <div  >
        <img id='continue' class="nextPage next-page hidden" src="./gallery/arrow/3.png" alt="arrownext">
    </div>
  </footer>`,
  },
  {
    title: "Chapter Two",
    answer: "constantinbrancusi",
    logic: pageCrypto,

    background: "url(./gallery/background/5.png)",
    body: `
    <h1>Discover the artist's name</h1>
    <p>You will probably need your key.</p>
    <h2>HTSXYFSYNS GWFSHZHN</h2>
 
  
    <input class="enigma1-nb" type="text" id="nb1" name="nb" required
           minlength="1" maxlength="20" size="10">
  
    <button id="submit-enigma1">Let's try this!</button>
    <img class='personnage perso1' src="./gallery/personnage/2.png" alt="perso">

    <div>
    <img src="./gallery/output/yes.png" id="hiddenyes" class="hidden"/>
    <img src="./gallery/output/no.png" id="hiddenno" class="hidden"/>
    </div>
    
            <footer class="button-prev-next">
            <div >
                <img class='previous-page previousPage' src="./gallery/arrow/3.png" alt="arrowprevious">
            </div>
            <div  >
                <img id='continue' class="next-page nextPage" src="./gallery/arrow/3.png" alt="arrownext">
            </div>
          </footer>
        `,
  },
  {
    title: "Chapter Three",
    logic: pageLocation,
    answer: "montparnasse",
    background: "url(./gallery/background/6.png)",
    body: `
    <div class="locationlieu">
    <h1 class='lieu'>The artwork's location</h1>
    <input id="location" class="enigma1-nb" type="text" id="nb1" name="nb" required
    minlength="1" maxlength="20" size="10">
    <button id="submit-enigma1">Let's try this!</button>
    </div>
    <img class='personnage perso2' src="./gallery/personnage/7.png" alt="perso">

    <img id="lieu" src="./gallery/enigma/enigma2.jpg" alt="montpar">
  



    <img src="./gallery/output/yes.png" id="hiddenyes" class="hidden"/>
    <img src="./gallery/output/no.png" id="hiddenno" class="hidden"/>

    
            <footer class="button-prev-next">
            <div >
                <img class='previous-page previousPage' src="./gallery/arrow/3.png" alt="arrowprevious">
            </div>
            <div  >
                <img id='continue' class="next-page nextPage" src="./gallery/arrow/3.png" alt="arrownext">
            </div>
          </footer>
        `,
  },
  {
    title: "Chapter Four",
    logic: pageFilm,
    answer: "cemetery",
    background: "url(./gallery/background/6.png)",
    body: `<h1>Discover where in Montparnasse the artwork is!</h1>
    <div class='box-film'>
    <div class="put-in-line">
  <p class="resize">🌊🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂</p>
    <input class="enigma1-nb2" type="text" id="ocean" name="nb" required
    minlength="1" maxlength="20" size="10">
    <p id="output-ocean" class="resize-output invisible">O<span>CE</span>AN'S ELEVEN</p>
  </div>
  
  <div class="put-in-line">
    <p class="resize">😎👽⬛️</p>
      <input class="enigma1-nb2" type="text" id="men" name="nb" required
      minlength="1" maxlength="20" size="10">
      <p id="output-men" class="resize-output invisible"><span>ME</span>N IN BLACK</p>
    </div>
  
  
    <div class="put-in-line">
      <p class="resize">✝️🤮👩👹🛏️</p>
        <input class="enigma1-nb2" type="text" id="exor" name="nb" required
        minlength="1" maxlength="20" size="10">
        <p id="output-exor" class="resize-output invisible">THE EXORCIS<span>T</span></p>
      </div>
  
  
      <div class="put-in-line">
        <p class="resize">⚡️👦🏻🔮</p>
          <input class="enigma1-nb2" type="text" id="harry" name="nb" required
          minlength="1" maxlength="20" size="10">
          <p id="output-harry" class="resize-output invisible">HAR<span>RY </span> &nbsp POTTER</p>
        </div>
        </div>
  
    <input class="enigma1-nb" type="text" id="nb1" name="nb" required
           minlength="1" maxlength="20" size="10">
  
    <button id="submit-enigma1">Let's try this!</button>
  
    <div>
    <img src="./gallery/output/yes.png" id="hiddenyes" class="hidden"/>
    <img src="./gallery/output/no.png" id="hiddenno" class="hidden"/>
    </div>
    
            <footer class="button-prev-next">
            <div >
                <img class='previous-page previousPage' src="./gallery/arrow/3.png" alt="arrowprevious">
            </div>
            <div  >
                <img id='continue' class="next-page nextPage" src="./gallery/arrow/3.png" alt="arrownext">
            </div>
          </footer>
        `,
  },
  {
    title: "Chapter Five",
    logic: pageRebus,
    answer: "sculpture",
    background: "url(./gallery/background/6.png)",
    body: `
    <h1>The artwork's name</h1>  
    <input class="enigma1-nb" type="text" id="nb1" name="nb" required
    minlength="1" maxlength="20" size="10">

<button id="submit-enigma1">Let's try this!</button>
    <div class="rebus-box">

    <img class="rebus" src="./gallery/enigma/1.png" alt="art-type">
    </div>


    <div>
    <img src="./gallery/output/yes.png" id="hiddenyes" class="hidden"/>
    <img src="./gallery/output/no.png" id="hiddenno" class="hidden"/>
    </div>
    
            <footer class="button-prev-next">
            <div >
                <img class='previous-page previousPage' src="./gallery/arrow/3.png" alt="arrowprevious">
            </div>
            <div  >
                <img id='continue' class="next-page nextPage" src="./gallery/arrow/3.png" alt="arrownext">
            </div>
          </footer>
        `,
  },

  {
    title: "Chapter Six",
    logic: pageAudio,
    answer: "kiss",
    background: "url(./gallery/background/8.png)",
    body: ` <h1>The artwork's title</h1>
    <audio
        controls
        src="./gallery/enigma/kisskiss.mp3" preload="auto">
    </audio>
  
  <input class="enigma1-nb" type="text" id="nb1" name="nb" required
         minlength="1" maxlength="10" size="10">

  <button id="submit-enigma1">Let's try this!</button>
  <div>
  <img src="./gallery/output/yes.png" id="hiddenyes" class="hidden"/>
  <img src="./gallery/output/no.png" id="hiddenno" class="hidden"/>
  </div>
  <footer class="button-prev-next">
    <div >
        <img class='previous-page previousPage' src="./gallery/arrow/3.png" alt="arrowprevious">
    </div>
    <div  >
        <img id='continue' class="nextPage next-page hidden" src="./gallery/arrow/3.png" alt="arrownext">
    </div>
  </footer>`,
  },
  {
    title: "Secret",
    logic: pageSecret,
    background: "url(./gallery/background/8.png)",
    body: `<h1>Congratulations! You can access the secret</h1>
    <div class="secret">It's a strange wooden box, right ?
    
    For the past few years, it has completely covered the stele of a tomb in the Montparnasse cemetery in Paris. 
    
    Tourists, who wander between the alleys where Baudelaire, Maupassant or Gainsbourg are buried, often pass in front of them without even looking at him. 
    
    And yet, if they knew... These light wooden boards conceal one of the most expensive sculptures in the world: The Kiss, by Constantin Brancusi, a block of limestone representing a couple fused together. 
    
    A marvel of simplicity, which adorns the tomb of a certain Tatiania Rachewskaïa, a young Russian, one relative of Tolstoï, who mysteriously committed suicide in Paris, in 1910. 
    
    To perfect her French, the young exile takes lessons from a doctor of Romanian origin from the Pasteur Institute, Solomon Marbais. Soon, a passionate romance is born between the student and the doctor. An idyll that will end in the great tradition of the Russian novel. At the end of November 1910, Dr. Marbais' sister visited Tatiana Rachewskaïa in her room on the boulevard de Port-Royal. When she pushes the door, she discovers the young Russian hanged. Suicide. Amorous despair. She was 23 years old.
    
    The Kiss still rests on the tomb of Tatiana Rachewskaïa. To make matters worse, it is located in an isolated corner of the 22nd division of the cemetery, just a few meters from the surrounding wall. Three discreet surveillance cameras are constantly pointed at this treasure, which is also protected by an alarm. And then, for a few months now, there has been the famous wooden case for obvious risks of deterioration. There is frost, bad weather, foam, automobile pollution on Boulevard Raspail, much more corrosive than in 1910. Not to mention the possible fall of a tree." Manner, also, no doubt, for the heirs, by stealing the masterpiece from view, to "put a little pressure" on the administration ...
    
    What nobody knows either, is that this iconic sculpture has been for more than ten years at the heart of a muffled legal battle, opposing the French State to the descendants of the young Russian, who would like to recover the statue, for the resell. Small precision that gives an idea of ​​the issue: after Giacometti, Brancusi is today the most expensive sculptor in the world.
    
    At auction, the sculpture in the Montparnasse cemetery could reach 40 or 50 million ". All things considered, it is as if Mona Lisa was hung day and night in the Tuileries garden. In 2006 Guillaume Duhamel asked for the right to export Brancusi's sculpture. Clearly, the idea is to dissociate it from the stele, replace it with a copy and sell it at auction.
    But the French Minister of Culture classified Le Baiser "national treasure", which had the effect of prohibiting any exit from French territory. The entire tomb of Tatiana Rachewskaïa is an historic monuments. 
    
    Funny thing : Tatiana’s mother frankly admits that she hardly appreciates her work. The family even thought for a while to replace it with a bust of Tatiana !
    
    Should it stay under the sky publicly or should it be sold ? One thing clouds are sure about : the secret will remain in the sky gallery forever.
    
    Sources: Barbu Brezianu, "Le secret du Baiser de Montparnasse", dans La Revue du Louvre et des musées de France n°1, 1969.</div> 
    `,
  },
];

function goToNext() {
  page++;
  document.body.innerHTML = pages[page].body;
  document.body.style.backgroundImage = pages[page].background;
  let nextPage = document.querySelector(".nextPage");
  if (typeof nextPage !== "null") nextPage.addEventListener("click", goToNext);

  let previousPage = document.querySelector(".previousPage");
  if (typeof previousPage !== "null")
    previousPage.addEventListener("click", goToPrevious);

  pages[page].logic();
}

function goToPrevious() {
  page--;
  document.body.innerHTML = pages[page].body;
  document.body.style.backgroundImage = pages[page].background;
  let nextPage = document.querySelector(".nextPage");
  if (typeof nextPage !== "null") nextPage.addEventListener("click", goToNext);
  let previousPage = document.querySelector(".previousPage");
  if (typeof previousPage !== "null") {
    previousPage.addEventListener("click", goToPrevious);
    pages[page].logic();
  }
}

homePage();

function homePage() {
  document.body.innerHTML = pages[page].body;
  let nextPage = document.querySelector(".nextPage");
  let ray = document.getElementById("ray");
  document.body.style.backgroundImage = pages[page].background;
  nextPage.addEventListener("mouseover", () => ray.classList.remove("hidden"));
  nextPage.addEventListener("mouseout", () => ray.classList.add("hidden"));
  nextPage.addEventListener("click", goToNext);
}

function pageIntro() {
  rightToContinue = true;
  displayNext();
}

function displayNext() {
  let nextButton = document.getElementById("continue");
  if (rightToContinue === true) nextButton.classList.remove("hidden");
  else {
    nextButton.classList.add("hidden");
  }
}

function pageNumber() {
  rightToContinue = false;
  let answer = document.querySelector(".enigma1-nb");
  let submit = document.getElementById("submit-enigma1");
  let hiddenYes = document.getElementById("hiddenyes");
  let hiddenNo = document.getElementById("hiddenno");
  displayNext();

  submit.addEventListener("click", () => {
    if (answer.value == pages[page].answer) {
      hiddenYes.classList.remove("hidden");
      hiddenNo.classList.add("hidden");
      rightToContinue = true;
    } else {
      hiddenYes.classList.add("hidden");
      hiddenNo.classList.remove("hidden");
      rightToContinue = false;
    }
    displayNext();
  });
}
// submit.addEventListener("click", () => {
//   hiddenYes.classList.add("hidden");
//   if (typping) removeImage();
// });

// function removeImage(evt) {
//   if (evt.key) hiddenYes.classList.add("hiddenyes");
// }

// document.body.innerHTML += `  <img src="./gallery/output/yes.png" alt=">`;;

function pageCrypto() {
  rightToContinue = false;
  let answer = document.querySelector(".enigma1-nb");
  let submit = document.getElementById("submit-enigma1");
  let hiddenYes = document.getElementById("hiddenyes");
  let hiddenNo = document.getElementById("hiddenno");
  displayNext();

  submit.addEventListener("click", () => {
    console.log(answer.value.toLowerCase().replace(" ", ""));
    if (answer.value.toLowerCase().replace(" ", "") == pages[page].answer) {
      hiddenYes.classList.remove("hidden");
      hiddenNo.classList.add("hidden");
      rightToContinue = true;
    } else {
      hiddenYes.classList.add("hidden");
      hiddenNo.classList.remove("hidden");
      rightToContinue = false;
    }
    displayNext();
  });
}

function pageLocation() {
  rightToContinue = false;
  let answer = document.querySelector(".enigma1-nb");
  let submit = document.getElementById("submit-enigma1");
  let hiddenYes = document.getElementById("hiddenyes");
  let hiddenNo = document.getElementById("hiddenno");
  displayNext();

  submit.addEventListener("click", () => {
    console.log(answer.value.toLowerCase().replace(" ", ""));
    if (
      answer.value.toLowerCase().replace(" ", "").includes(pages[page].answer)
    ) {
      hiddenYes.classList.remove("hidden");
      hiddenNo.classList.add("hidden");
      rightToContinue = true;
    } else {
      hiddenYes.classList.add("hidden");
      hiddenNo.classList.remove("hidden");
      rightToContinue = false;
    }
    displayNext();
  });
  // window.removeEventListener("keydown", yolo);
}

function pageFilm() {
  rightToContinue = false;
  let outputAnswers = document.querySelectorAll(".enigma1-nb2");
  let answer = document.querySelector(".enigma1-nb");
  let submit = document.getElementById("submit-enigma1");
  let hiddenYes = document.getElementById("hiddenyes");
  let hiddenNo = document.getElementById("hiddenno");
  let films = {
    ocean: "oceaneleven",
    men: "meninblack",
    exor: "exorcist",
    harry: "harrypotter",
  };
  displayNext();
  outputAnswers.forEach((outputAnswer) => {
    outputAnswer.addEventListener("keyup", compareAnswerOutput);
  });

  function compareAnswerOutput(e) {
    let id = e.target.id;
    let answerFilm = films[id];
    let idToFind = `output-${id}`;
    let hiddenElement = document.getElementById(idToFind);

    if (e.target.value == answerFilm) {
      console.log({ idToFind });
      console.log(hiddenElement);
      hiddenElement.classList.remove("invisible");
    } else {
      hiddenElement.classList.add("invisible");
    }
  }

  //      answer.value.toLowerCase().replace(" ", "").includes(pages[page].answer)

  submit.addEventListener("click", () => {
    if (answer.value.toLowerCase().replace(" ", "") == pages[page].answer) {
      hiddenYes.classList.remove("hidden");
      hiddenNo.classList.add("hidden");
      rightToContinue = true;
    } else {
      hiddenYes.classList.add("hidden");
      hiddenNo.classList.remove("hidden");
      rightToContinue = false;
    }
    displayNext();
  });
  // window.removeEventListener("keydown", yolo);
}

function pageAudio() {
  rightToContinue = false;
  const audio = new Audio("./gallery/enigma/kisskiss.mp3");
  let answer = document.querySelector(".enigma1-nb");
  let submit = document.getElementById("submit-enigma1");
  let hiddenYes = document.getElementById("hiddenyes");
  let hiddenNo = document.getElementById("hiddenno");
  displayNext();

  submit.addEventListener("click", () => {
    console.log(answer.value.toLowerCase().replace(" ", ""));
    if (
      answer.value.toLowerCase().replace(" ", "").includes(pages[page].answer)
    ) {
      hiddenYes.classList.remove("hidden");
      hiddenNo.classList.add("hidden");
      rightToContinue = true;
      audio.pause();
    } else {
      hiddenYes.classList.add("hidden");
      hiddenNo.classList.remove("hidden");
      rightToContinue = false;
    }
    displayNext();
  });
  // window.removeEventListener("keydown", yolo);
}
// function yolo(evt) {
//   if (evt.key == 2) alert("yolo");
// }
function pageRebus() {
  console.log(page, "Rebus");

  rightToContinue = false;
  let answer = document.querySelector(".enigma1-nb");
  let submit = document.getElementById("submit-enigma1");
  let hiddenYes = document.getElementById("hiddenyes");
  let hiddenNo = document.getElementById("hiddenno");
  displayNext();

  submit.addEventListener("click", () => {
    console.log(answer.value.toLowerCase().replace(" ", ""));
    if (
      answer.value.toLowerCase().replace(" ", "").includes(pages[page].answer)
    ) {
      hiddenYes.classList.remove("hidden");
      hiddenNo.classList.add("hidden");
      rightToContinue = true;
    } else {
      hiddenYes.classList.add("hidden");
      hiddenNo.classList.remove("hidden");
      rightToContinue = false;
    }
    displayNext();
  });
  // window.removeEventListener("keydown", yolo);
}

function pageSecret() {
  rightToContinue = false;
  displayNext();
  displayNext();
  // window.removeEventListener("keydown", yolo);
}
