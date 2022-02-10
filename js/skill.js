//Get the width
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

var stars = document.querySelectorAll('.active');

//Color the stars onLoading
function colorStar(){
    for(var i = 0; i < stars.length; i++){
        stars[i].classList.add('activeColor');
    }
}

//Remove color from the stars
function toggleColor()
{
    for(var i = 0; i < stars.length; i++){
        stars[i].classList.remove('activeColor');
    }

    setTimeout(function(){
        for(var i = 0; i < stars.length; i++){
            stars[i].classList.add('activeColor');
        }
    }, 1200)
}

//FOR DESKTOP
//Expand the selected panel
var hardSkillBtn = document.getElementById('hardSkillButton');
var softSkillBtn = document.getElementById('softSkillButton');
var hardSection = document.getElementById('hardSection');
var softSection = document.getElementById('softSection');

var leftBoxes = document.querySelectorAll('.boxLeft');
var rightBoxes = document.querySelectorAll('.boxRight');
var starsAll = document.querySelectorAll('.fa-star');


//Click on the "Hard skills" button
hardSkillBtn.addEventListener('click', () => {
    //If not on Desktop, do nothing
    if (width < 900)
    {
        return;
    }

    //Zoom in the selected panel
    softSection.style.backgroundColor='pink';
    hardSection.style.backgroundColor='transparent';
    hardSection.style.width="200%";
    softSection.style.width="50%";

    for (let i = 0; i < rightBoxes.length; i++)
    {
        rightBoxes[i].style.display="none";
    }

    setTimeout(function() {
        for (let i = 0; i < leftBoxes.length; i++)
        {
            leftBoxes[i].style.display='flex';
        }    
        document.getElementsByTagName('a')[0].style.display='block';
    }, 1000);

    toggleColor();
})

//Click on the "Soft skills" button
softSkillBtn.addEventListener('click', () => {
    //If not on Desktop, do nothing
    if (width < 900)
    {
        return;
    }

    //Zoom in the selected panel
    hardSection.style.backgroundColor='pink';
    softSection.style.backgroundColor='transparent';
    softSection.style.width="200%";
    hardSection.style.width="50%";

    for (let i = 0; i < rightBoxes.length; i++)
    {
        leftBoxes[i].style.display='none';
    }

    setTimeout(function() {
        for (let i = 0; i < rightBoxes.length; i++)
        {
            rightBoxes[i].style.display='flex';
        }
    }, 1000);

    toggleColor();

    document.getElementsByTagName('a')[0].style.display='none';
})