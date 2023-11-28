function checkCurrBtn(event){
    let currRole;
    let clickedButton = event.currentTarget;
    currRole = clickedButton.innerHTML.trim();
    //console.log(currRole);
    let signUpBtn=document.getElementById('signUpBtn')
    let storedPages=['confirmRegistration', 'paymentHH', 'completeProfileEmployers']
    for (page in storedPages){
        signUpBtn.removeEventListener('click', ()=>changePage(page))
    }
    switch(currRole){
        case "Candidate":
            signUpBtn.addEventListener('click', ()=>changePage('confirmRegistration'))
            break;
        case "Headhunters":
            signUpBtn.addEventListener('click', ()=>changePage('paymentHH'))
            break;
        case "Employers":
            signUpBtn.addEventListener('click', ()=>changePage('completeProfileEmployers'))
            break;
    }
}