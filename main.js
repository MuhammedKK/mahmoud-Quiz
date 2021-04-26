/**
 * Constants
 */
let content = document.querySelector(".content .container .lessons"); // All Lessons Content





/*******************************************************************************/

/**
* Array Of Data Content
*/
let data = [
    {
        lessonNum: 1,
        title: "Lesson 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolores. Perferendis optio sapiente dolores facere, necessitatibus consequuntur mollitia aliquam harum debitis corporis dolor veniam unde odit, accusantium eum esse modi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolores. Perferendis optio sapiente dolores facere, necessitatibus consequuntur mollitia aliquam harum debitis corporis dolor veniam unde odit, accusantium eum esse modi."
    },
    {
        lessonNum: 2,
        title: "Lesson 2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolores. Perferendis optio sapiente dolores facere, necessitatibus consequuntur mollitia aliquam harum debitis corporis dolor veniam unde odit, accusantium eum esse modi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolores. Perferendis optio sapiente dolores facere, necessitatibus consequuntur mollitia aliquam harum debitis corporis dolor veniam unde odit, accusantium eum esse modi."
    },
    {
        lessonNum: 3,
        title: "Lesson 3",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolores. Perferendis optio sapiente dolores facere, necessitatibus consequuntur mollitia aliquam harum debitis corporis dolor veniam unde odit, accusantium eum esse modi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolores. Perferendis optio sapiente dolores facere, necessitatibus consequuntur mollitia aliquam harum debitis corporis dolor veniam unde odit, accusantium eum esse modi."
    }
];


/**
 * Functions
 */

// Function To Show All Lessons
(function ShowContents() {
    for (let i = 0; i < data.length; i++) {
        let lesson = document.createElement("div");
        lesson.classList.add(`lesson${i + 1}`);
        lesson.classList.add("card")
        lesson.innerHTML = `
            <h2 class="cont-title card-header">${data[i].title}</h2>
            <p class="cont-desc card-text">${data[i].desc}</p>
            <a href="#" class="num btn btn-primary">${data[i].lessonNum}</a>
        `;
        content.append(lesson)
    }
})();

// get Lesson by Lesson Menu

$(".lessons-menu a").on("click", function () {
    $(".lessons div").fadeOut();
    $("." + $(this).data("lesson")).delay(500);
    $("." + $(this).data("lesson")).fadeIn();
    // console.log($(this).data("lesson"));
});






