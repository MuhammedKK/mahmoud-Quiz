/**
 * Constants
 */
let content = document.querySelector(".content .container .lessons"); // All Lessons Content
let wordscont = document.querySelector(".content .container .words");

/*******************************************************************************/

/**
* Array Of Data Content
*/
let data = [
    {
        title: "Sports",
        desc: `
            <div class="card-text desc">
                <div class="eng-sen">I love footbal</div>
                <div class="ar-sen">انا احب الكورة</div>
            </div>
            <div class="card-text desc">
                <div class="eng-sen">I love footbal</div>
                <div class="ar-sen">انا احب الكورة</div>
            </div>
            <div class="card-text desc">
                <div class="eng-sen">I love footbal</div>
                <div class="ar-sen">انا احب الكورة</div>
            </div>
        `,
        lessonNum: 1,
    },
    {
        title: "Reading",
        desc: `
            <div class="card-text desc">
                <div class="eng-sen">I love books so much</div>
                <div class="ar-sen">انا احب الكتب جدا</div>
            </div>
        `,
        lessonNum: 2,
    },
    {
        title: "Foods",
        desc: `
            <div class="card-text desc">
                <div class="eng-sen">I love food so much</div>
                <div class="ar-sen">انا احب الاكل جدا</div>
            </div>
        `,
        lessonNum: 3,
    },
];
/**
* Array Of Data Words
*/
let words = [
    {
        lessonName: "Sports",
        engWord: "Sports",
        arWord: "رياضة",
        ex: `
            <div class="card-text desc">
                <div class="eng-sen">Sport is my life</div>
                <div class="ar-sen">الرياضة هي حياتي</div>
            </div>
        `,
        num: 1,
    },
];

/**
 * Functions
 */

/* Words Section */

let showWords = () => {
    $(".lessons").css("display", "none"); // hide content lessons
    $(".words").fadeIn();
    for (let i = 0; i < words.length; i++) {
        let wordSection = document.createElement("div");
        wordSection.classList.add("card")
        wordSection.innerHTML = `
            <div class="card-header">
                <div class="card-title">words of lesson: 
                <span class="title">
                    ${words[i].lessonName}</span>
                </div>
            </div>
            <div class="card-body">
                <div class="card-text desc">
                    <div class="eng-sen">${words[i].engWord}</div>
                    <div class="ar-sen">${words[i].arWord}</div>
                </div>
                <h5 class="ex">Examples</h5>
                ${words[i].ex}
            </div>
            <span class="num">${words[i].num}</span>
        `;
        wordscont.append(wordSection);
    }
}




// Function To Show All Lessons
(function ShowContents() {
    for (let i = 0; i < data.length; i++) {
        let lesson = document.createElement("div");
        lesson.classList.add(`lesson${i + 1}`);
        lesson.classList.add("card")
        lesson.innerHTML = `
            <div class="card-header">
                <div class="card-title">lesson Name: 
                <span class="title">
                    ${data[i].title}
                </span>
                </div>
            </div>
            <div class="card-body">
                ${data[i].desc}
            </div>
            
            <span class="num">${data[i].lessonNum}</span>
        `;
        content.append(lesson)
        // // show words of lesson
        // $(".show-words").on("click", function() {
        //     // e.preventDefault();
        //     console.log(words[i]);
        // });
    }
})();



// show lesson one in opennig
$('div.lesson1').fadeIn().addClass("active");

// // get Lesson by Lesson Menu

$(".lessons-menu a").on("click", function () {
    $(".lessons .card").fadeOut().removeClass("active");
    $("." + $(this).data("lesson")).delay(500);
    $("." + $(this).data("lesson")).fadeIn().addClass("active");
    // console.log($(this).data("lesson"));
});

// num of lesson
// let lessonNum = $("div.active .num").text();
// console.log($("div.active .num").text());
$(".show-words").on("click", () => {
    // let lessonNum = $("div.active .num").text();
    
    // // get lesson words
    // for(let i = 0; i < words.length; i++) {
        
    // }
    showWords();
})





