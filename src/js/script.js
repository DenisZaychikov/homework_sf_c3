window.onload = function() { 
    let elemInput = document.querySelector(".input");
    let elemSpan = document.querySelector(".span");
    let elemRef = document.querySelector(".refer");

    function setCity() {    
        elemInput.style.display = 'none';
        let city = localStorage.getItem('city');
        elemSpan.innerText = `${city}`
        elemSpan.style.display = 'block'; 
        elemRef.style.display = 'block';
    }
    
    if (localStorage.city) {
        setCity()
    }
    
    elemInput.onchange = function() {
        let inputVal = elemInput.value
        localStorage.setItem('city', inputVal)
        setCity()
    }

    elemRef.onclick = function() {
        elemInput.style.display = 'block';
        elemSpan.style.display = 'none';
        elemInput.value = '';
    }

    let btnSave = document.querySelector('.btnsave');
    let btnChecks = document.querySelectorAll('input[type=checkbox]')

    if ('btndisabled' in localStorage) {
        for (let i = 0; i < btnChecks.length; i++) {
            let btnName = 'btn' + String(i);
            btnChecks[i].checked = Number(localStorage[btnName])
            btnChecks[i].disabled = true;
        }     
    }

    btnSave.onclick = function() {
        for (let i = 0; i < btnChecks.length; i++) {
            btnChecks[i].disabled = true;
            let btnName = 'btn' + String(i);
            let btnCondition = Number(btnChecks[i].checked);
            localStorage.setItem(`${btnName}`, `${btnCondition}`)        
        }
        localStorage.setItem('btndisabled', 'true')
    }
}
