let page = 5;
let rightToContinue = true;
const pages = [
  {
    title: "Homepage",
    background: "url(./gallery/background/1.png)",
    //background2: `<img src="./gallery/background/2.png" alt="ray">`,
    body: `
    <section class="container">
        <div class="center-image"><img id="icone1" src="/accueil/1.png" alt="icone1"></div>
        <div class="center-image"><img id="icone2"src="/accueil/2.png" alt="icone2"></div>
        <div class="center-image"><img id="icone3" src="/accueil/3.png" alt="icone3"></div>
    </section>
    <div class="ray-hoover"></div>

        <footer id="cloud-container" class="nextPage enter-game" >
            <h1 class="incline" >Sky gallery</h1>
            <img id="cloud" src="/accueil/cloud.png" alt="cloud">
            <img id="arrow" src="/accueil/arrow.gif" alt="arrow">
        </footer>
        `,
  },
  {
    title: "Introduction",
    logic: pageIntro,
    background: "url(./gallery/background/8.png)",
    body: `  <p> page intro
  </p>
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
  
  <label for="nb">Please add your answer here :</label>
  
  <input class="enigma1-nb" type="number" id="nb1" name="nb" required
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
    title: "Chapter Two",
    answer: "constantinbrancusi",
    logic: pageCrypto,

    background: "url(./gallery/background/4.png)",
    body: `
    <h1>Discover the artist's name</h1>
    <p>With the help of the previous enigma, find what's the author's name!</p>
    <h2>HTSXYFSYNS-GWFSHZHN</h2>
 
    <label for="nb">Please add your answer here :</label>
  
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
    title: "Chapter Three",
    logic: pageLocation,
    answer: "montparnasse",
    background: "url(./gallery/background/5.png)",
    body: `
    <h1>Discover what's the name of the artwork</h1>
    <p>raconter la vie</p>

    <label for="nb">Please add your answer here :</label>
  
    <input class="enigma1-nb" type="text" id="nb1" name="nb" required
           minlength="1" maxlength="20" size="10">
  
    <button id="submit-enigma1">Let's try this!</button>
    <img src="./gallery/enigma/enigma2.jpg" alt="montpar">

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
    title: "Chapter Four",
    logic: pageFilm,
    answer: "cemetery",
    background: "url(./gallery/background/6.png)",
    body: `<h1>Discover where in Montparnasse the artwork is!</h1>
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
  
  
  
    <label for="nb">Please add your answer here :</label>
  
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
    <h1>Discover what's the name of the artwork</h1>
    <p>raconter la vie</p>

    <label for="nb">Please add your answer here :</label>
  
    <input class="enigma1-nb" type="text" id="nb1" name="nb" required
           minlength="1" maxlength="20" size="10">
  
    <button id="submit-enigma1">Let's try this!</button>
    <img src="./gallery/enigma/1.png" alt="art-type">

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
    body: ` <h1>Discover what's the name of the artwork</h1>
    <p>raconter la vie</p>

    <audio
        controls
        src="./gallery/enigma/kisskiss.mp3" preload="auto">
    </audio>

  <label for="nb">Please add your answer here :</label>
  
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
  document.body.style.backgroundImage = pages[page].background;
  nextPage.addEventListener(
    "mouseover",
    () =>
      (document.querySelector(".ray-hoover").innerHTML =
        pages[page].background2)
  );
  nextPage.removeEventListener(
    "mouseout",
    () =>
      (document.querySelector(".ray-hoover").innerHTML =
        pages[page].background2)
  );
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
