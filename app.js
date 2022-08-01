const countdotText = document.querySelector('.count-dot')
const btnElement = document.querySelector('.btn')
const textarea = document.getElementById('textarea')
const countBox = document.querySelector('.count-box')
const errText = document.querySelector('.err-text')

//هر گروه از حروف الفبای فارسی را به ترتیب از بی نقطه تا سه نقطه
//به عنوان یک دیتای آرایه ای در یک آرایه والد قرار دادیم

//حرف ی هم میتواند بصورت چسبان نقطه داشته باشد و هم بصورت ی آخر نداشته باشد
//بصورت پیش فرض با دو نقطه در نظر گرفتیم و در گروه دو نقطه ای ها قرار دادیم

let wordsArray = [
    ['ا', 'ص', 'ع', 'ه', 'ح', 'گ', 'ک', 'م', 'آ', 'ل', 'س', 'و', 'ط', 'د', 'ر'],
    ['ب', 'ج', 'خ', 'ذ', 'ز', 'ظ', 'ض', 'ف', 'غ', 'ن'],
    ['ت', 'ق', 'ی','ة','ي'],
    ['پ', 'ث', 'چ', 'ژ', 'ش'],
];

const checkDot = (word) => {
    let dotCount = 0;
    const pattern = /[ی]\s|[ی]$/g;
    //از این الگو برای پیدا کردن ی های آخر که نقطه ندارند استفاده شده
    //هم ی های آخر جمله و هم وسط جمله که بعد آنها فاصله هست شناسایی شده در یک آرایه قرار میگیرند

    const strigWord = word.match(pattern);
    const chars = word.split('');

    for (let i = 0; i < wordsArray.length; i++) {
        chars.map(char => {
            const isCharInWordsArray = wordsArray[i].includes(char);
            if (isCharInWordsArray) {
                dotCount += i
                return dotCount;
            };
            //مقدار ایندکس آن گروه که برابر با تعداد نقطه آن گروه از حروف است i در بالا 
        });
    };

    if (strigWord) {
        const minesCount = strigWord.length * 2;
        dotCount -= minesCount;
        //تعداد ی های بدون نقطه در ضریب تعداد نقطه که ۲ میباشد از تعداد کل نقطه ها کم میشود 
    };

    countBox.classList.add('active')
    errText.classList.remove('active')
    countdotText.innerHTML = dotCount
}

btnElement.addEventListener('click', () => {
    const textareaValue = textarea.value

    if (textareaValue) {
        checkDot(textareaValue)
    } else {
        errText.classList.add('active')
    }
})

textarea.addEventListener("keyup", e => {
    textarea.style.height = "63px";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
});
