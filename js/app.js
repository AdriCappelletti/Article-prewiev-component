let shareDisplay = document.querySelector('#share-button')
let shareDisplayOnDiv = document.querySelector('.share')
let activeState = document.querySelector('.active-state')
shareDisplay.onclick = function(){
    if (activeState.style.display === 'none') {
        activeState.style.display = 'flex';
    } else{
        activeState.style.display = 'none';
    }

}


