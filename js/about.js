//Get the width
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
//Get all the box
const boxes = document.querySelectorAll('.info');

for (let i = 0; i < boxes.length; i++)
    {
        console.log(boxes[i]);
        if ((i+1) % 2 == 0)
        {
            boxes[i].classList.add('info-even-hide');
        }
        else{
            boxes[i].classList.add('info-odd-hide');
        }
    }

/*
if (width >= 900)
{
    console.log("true");
    for (let i = 0; i < boxes.length; i++)
    {
        console.log(boxes[i]);
        if ((i+1) % 2 == 0)
        {
            boxes[i].classList.add('info-even-hide');
        }
        else{
            boxes[i].classList.add('info-odd-hide');
        }
    }
}
*/

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    //This gets the height of the current VISIBLE part of the browser window and *4/5
    const triggerBottom = window.innerHeight / 7 * 6;

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