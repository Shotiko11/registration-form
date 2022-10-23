//roca momxmarebeli daachers "submit"-s, chven unda amovigot kvela mnishvneloba sworia tu araswori

let registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let errors = {};

    console.log(event.target)
    let formElement = event.target

    //username (tu sam simbolos chawers, davuwert rom undamgamoikenos 4,vtkvat)
    let usernameValue = document.getElementById('username').value;//rasac momxmarebeli chawers

    //tu inputi  aris carieli stringi
    if(usernameValue == "  ") {
        errors.myusername = "Username must be filled";
    }

    if(usernameValue.length < 2 ) {
        errors.myusername = "use more than 2 letters"
    }

    //password (tu carielia an tu emtxveva es ori paroli ertmanets);
    let password1 = document.getElementById('passw').value;//rasac chawers, igive
    let password2 = document.getElementById('passw2').value;


    //key da name atributis mnishvneloba aris identuri
    if (password1 == "") {
        errors.mypassword = "it must be filled";

    }

    if (password1 != password2) {
        errors.mypassword2 = "it is not correct"
    }
    

    //radio"-s monishvna, tu romelime aris monishnuli
    let age = false;

    //foreach"-is sashvalebit gadavuvlit
    formElement.querySelectorAll('[name = "age"]').forEach(item => {
        if(item.checked) {
            age = true;
        }
        
    });

    //tu "age" isev darcha "falsea".
    if(!age){ 

        errors.age = "select each of it"
    }


    //checkbox
    let agree = document.getElementById('agree').checked;//tu monishnulia
    
    if (!agree) {//tu "checkbox-agree" ar aris monishnuli
        errors.agree = "click this "
    }

    console.log(errors);


    //rom chavardes es erorebis mnishvneloba
    for (let x in errors) {
        let spanError = document.getElementById('error_' + x);
        
        if(spanError) {//if spanerror == true >> igivea
            spanError.innerText = errors[x];
        }

    }

    

})





// let errors = {
//     age: "please select each of it",
//     agree: "you must click this rectangle",
//     mypassword2: "password is correct",
//     myusername: "usename must be more than 2 letters"
// }


let submit = document.querySelector('.registration-form');

submit.addEventListener('click', function() {
    submit.classList.add('activeus')
})