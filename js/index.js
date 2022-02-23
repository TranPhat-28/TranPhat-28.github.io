const boxes = document.querySelectorAll('.box')
const avaBox = document.getElementById('avaTag');

const link = ['url("media/img1.jpg")', 'url("media/img2.jpg")', 'url("media/img3.jpg")'];

var count = 0;

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    //This gets the height of the current VISIBLE part of the browser window and *4/5
    const triggerBottom = window.innerHeight / 4 * 3

    boxes.forEach(box => {
        let tmp = box.getBoundingClientRect().top;
        if (tmp < triggerBottom)
        {
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    })
}

window.addEventListener('DOMContentLoaded', function() {
    setInterval(() => {
        if (count >= link.length)
        {
            count = 0;
        }
        avaBox.style.backgroundImage=link[count];
        count += 1;
    }, 2000);
});