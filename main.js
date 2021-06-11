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

// let words = [
//     {
//         lessonName: "Sports",
//         engWord: "Sports",
//         arWord: "رياضة",
//         ex: `
//             <div class="card-text desc">
//                 <div class="eng-sen">Sport is my life</div>
//                 <div class="ar-sen">الرياضة حياتي</div>
//             </div>
//         `,
//         num: 1,
//     },
//     {
//         lessonName: "Reading",
//         engWord: "Reading",
//         arWord: "قراءة",
//         ex: `
//             <div class="card-text desc">
//                 <div class="eng-sen">I like reading so much</div>
//                 <div class="ar-sen">انا احب القراءة جدا</div>
//             </div>
//         `,
//         num: 2,
//     },
//     {
//         lessonName: "Foods",
//         engWord: "Food",
//         arWord: "الطعام",
//         ex: `
//             <div class="card-text desc">
//                 <div class="eng-sen">meat is a kind of food</div>
//                 <div class="ar-sen">اللحمة هي نوع من الطعام</div>
//             </div>
//         `,
//         num: 3,
//     },
// ];

/**
 * Functions
 */

/* Words Section */
// let showWords = () => {
//     $(".lessons > div").hide(); // hide content lessons
//     $(".words").fadeIn();
    
//     // get words depend on lesson num
//     let lessNum = parseInt($("div.active .num").text());
//     lessNum -= 1;
//     let wordSection = document.createElement("div");
//     wordSection.classList.add("card")
//     wordSection.innerHTML = `
//         <div class="card-header">
//             <div class="card-title">words of lesson: 
//             <span class="title">
//                 ${words[lessNum].lessonName}</span>
//             </div>
//         </div>
//         <div class="card-body">
//             <div class="card-text desc">
//                 <div class="eng-sen">${words[lessNum].engWord}</div>
//                 <div class="ar-sen">${words[lessNum].arWord}</div>
//             </div>
//             <h5 class="ex">Examples</h5>
//             ${words[lessNum].ex}
//         </div>
//         <span class="num">${words[lessNum].num}</span>
//     `;
//     wordscont.append(wordSection);

// }

// show words
// $(".show-words").on("click", () => {
//     showWords();
// });


// Function To Show All Lessons
// (function ShowContents() {
//     for (let i = 0; i < data.length; i++) {
//         let lesson = document.createElement("div");
//         lesson.classList.add(`lesson${i + 1}`);
//         lesson.classList.add("card")
//         lesson.innerHTML = `
//             <div class="card-header">
//                 <div class="card-title">lesson Name: 
//                 <span class="title">
//                     ${data[i].title}
//                 </span>
//                 </div>
//             </div>
//             <div class="card-body">
//                 ${data[i].desc}
//             </div>
            
//             <span class="num">${data[i].lessonNum}</span>
//         `;
//         content.append(lesson)
//     }
// })();


// show lesson one in opennig
// $('div.lesson1').fadeIn().addClass("active");

// // get Lesson by Lesson Menu
// $(".lessons-menu a").on("click", function () {
//     $(".lessons .card").fadeOut().removeClass("active");
//     $(".words > div").hide();
//     $("." + $(this).data("lesson")).delay(500);
//     $("." + $(this).data("lesson")).fadeIn().addClass("active");
//     console.log($(this).data("lesson"));
// });







