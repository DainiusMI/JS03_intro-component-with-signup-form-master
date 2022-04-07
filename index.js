
function validateEmail() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(document.getElementById('email').value.match(mailformat)) {
        return true;
    }
    else {
        document.getElementById('email').setAttribute('placeholder', 'email@expamle/com');
        document.getElementById('email').value = ' ';
        document.getElementById('email').classList.add('input-error');
        document.getElementById('email-error').classList.add('show-error');
        return false;
    }
}

function validateForm() {

    let fistName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let userInfoArray = [fistName, lastName, email, password];
    let formIdList = ['first-name', 'last-name', 'email', 'password'];
    let errorIdList = [ 'name-error', 'last-error', 'email-error', 'password-error'];

    for (i = 0; i < userInfoArray.length; i++) {

        if (userInfoArray[i] == "" || userInfoArray[i] == null) {
            if (i != 2) {
            document.getElementById(formIdList[i]).setAttribute('placeholder', ' ');
            document.getElementById(formIdList[i]).classList.add('input-error');
            document.getElementById(errorIdList[i]).classList.add('show-error');
            }
            
        }
        else { 
            document.getElementById(formIdList[i]).classList.remove('input-error');
            document.getElementById(errorIdList[i]).classList.remove('show-error');
        }
    }
    validateEmail(email);
}













