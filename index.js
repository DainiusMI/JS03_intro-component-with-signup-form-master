
function validateForm() {   


    let fistName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let userInfoArray = [fistName, lastName, email, password];
    let formIdList = ['first-name', 'last-name', 'email', 'password'];
    let errorIdList = [ 'name-error', 'last-error', 'email-error', 'password-error'];

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }    

    for (i = 0; i < userInfoArray.length; i++) {
        if (userInfoArray[i] == "" || userInfoArray[i] == null) {
            document.getElementById(formIdList[i]).setAttribute('placeholder', ' ');
            document.getElementById(formIdList[i]).classList.add('input-error');
            document.getElementById(errorIdList[i]).classList.add('show-error');
            if (i == 2) {
                if (validateEmail(email)) {
                   
                }
                else {
                    document.getElementById(formIdList[i]).setAttribute('placeholder', 'email@exanple/com');
                }
            }
            }
            else { 
            document.getElementById(formIdList[i]).classList.remove('input-error');
            document.getElementById(errorIdList[i]).classList.remove('show-error');
            }
    }


}







