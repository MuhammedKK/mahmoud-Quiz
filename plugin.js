/**
 * Classes
 */
var lessCount = 0;
class lesson {
    constructor(id, name, engSen, arSen) {
        this.id = id;
        this.name = name;
        this.engSen = engSen;
        this.arSen = arSen;
    }
    static addLesson(lesson) {
        const lessonsList = document.querySelector(".lessons"); // Lessons List
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <div class="card-header">
                <div class="card-title">Lesson name: 
                    <span class="title">${lesson.name}</span>
                </div>
            </div>
            <div class="card-body">
                <div class="enSens">
                    ${lesson.engSen.map(sen => {
                        return `<div class="enSen">${sen.trim()}</div>`;
                    })}
                    
                </div>
                <div class="arSens">
                    ${lesson.arSen.map(sen => {
                        return `<div class="arSen">${sen}</div>`;
                    })}
                </div>
            </div>
            <div class="num">${lesson.id}</div>
        `;
        lessonsList.append(card);
        lessCount++
    }
    // static engWords(lesson) {

    // }
    
}

/**
 * UI
 */

/* Just For Testing */
let lesson1 = new lesson(1, "Reading", [`This Is My TEST`,`This Is My TEST`], ["هذا بيان تجريبي", "هذا بيان تجريبي","هذا بيان تجريبي", "هذا بيان تجريبي"]);
let lesson2 = new lesson(2, "Booking", ["This Is My TEST", "This Is My TEST", "This Is My TEST", "This Is My TEST"], ["هذا بيان تجريبي", "هذا بيان تجريبي","هذا بيان تجريبي", "هذا بيان تجريبي"]);
let lesson3 = new lesson(3, "Food", ["This Is My TEST", "This Is My TEST", "This Is My TEST", "This Is My TEST"], ["هذا بيان تجريبي", "هذا بيان تجريبي","هذا بيان تجريبي", "هذا بيان تجريبي"]);

document.addEventListener("DOMContentLoaded", lesson.addLesson(lesson1));
document.addEventListener("DOMContentLoaded", lesson.addLesson(lesson2));
document.addEventListener("DOMContentLoaded", lesson.addLesson(lesson3));


class UI {
    static numLessons() {
        const lessons = document.querySelector(".lessons-menu"); // lessons List
        for(let i = 1; i <= lessCount; i++) {
            let lesson = document.createElement("a");
            lesson.classList.add("dropdown-item");
            lesson.setAttribute('id',`lesson${i}`)
            lesson.setAttribute('href',`#`)
            lesson.setAttribute('data-lesson',`lesson${i}`)
            lesson.textContent = `lesson${i}`;
            lessons.append(lesson);
        }
    }
}
document.addEventListener("DOMContentLoaded", UI.numLessons()); // Test