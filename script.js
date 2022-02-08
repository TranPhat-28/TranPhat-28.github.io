const boxes = document.querySelectorAll('.box')

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