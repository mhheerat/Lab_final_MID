let attempts = 0;

document.getElementById("registrationForm").addEventListener("submit", function(event){

    event.preventDefault();

    let valid = true;

    document.querySelectorAll(".error").forEach(function(item){
        item.innerHTML="";
    });

    document.getElementById("successMessage").innerHTML="";

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let department = document.getElementById("department").value;
    let about = document.getElementById("about").value.trim();
    

    let namePattern = /^[A-Za-z]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // First Name
    if(firstName==""){
        document.getElementById("firstNameError").innerHTML="First Name is required";
        document.getElementById("firstName").classList.add("incorrect");
        valid=false;
    }
    else if(!namePattern.test(firstName)){
        document.getElementById("firstNameError").innerHTML="Only alphabets allowed";
        document.getElementById("firstName").classList.add("incorrect");
        valid=false;
    }
    else{
        document.getElementById("firstName").classList.remove("incorrect");
    }

    // Last Name
    if(lastName==""){
        document.getElementById("lastNameError").innerHTML="Last Name is required";
        document.getElementById("lastName").classList.add("incorrect");
        valid=false;
    }
    else if(!namePattern.test(lastName)){
        document.getElementById("lastNameError").innerHTML="Only alphabets allowed";
        document.getElementById("lastName").classList.add("incorrect");
        valid=false;
    }
    else{
        document.getElementById("lastName").classList.remove("incorrect");
    }


    // Email
    if(email==""){
        document.getElementById("emailError").innerHTML="Email is required";
        document.getElementById("email").classList.add("incorrect");
        valid=false;
    }
    else if(!emailPattern.test(email)){
        document.getElementById("emailError").innerHTML="Invalid Email";
        document.getElementById("email").classList.add("incorrect");
        valid=false;
    }
    else{
        document.getElementById("email").classList.remove("incorrect");
    }

    // Password
    if(password==""){
      
        attempts++;

        if(attempts>=3){
            document.getElementById("password").disabled=true;
            document.getElementById("passwordError").innerHTML="Maximum 3 attempts reached";
        }
        else{
            document.getElementById("passwordError").innerHTML="Password required. Attempt "+attempts+"/3";
            document.getElementById("password").classList.add("incorrect");
        }

        valid=false;
    }
    else{
        document.getElementById("password").classList.remove("incorrect");
    }

    // Gender
    let gender = document.querySelector('input[name="gender"]:checked');

    if(gender==null){
        document.getElementById("genderError").innerHTML="Select Gender";
        valid=false;
    }

    // Interest
    let interests = document.querySelectorAll('input[name="interest"]:checked');

    if(interests.length==0){
        document.getElementById("interestError").innerHTML="Select at least one interest";
        valid=false;
    }

    // Department
    if(department==""){
        document.getElementById("departmentError").innerHTML="Select Department";
        document.getElementById("department").classList.add("incorrect");
        valid=false;
    }
    else{
        document.getElementById("department").classList.remove("incorrect");
    }

    // About
    if(about==""){
        document.getElementById("aboutError").innerHTML="Required";
        document.getElementById("about").classList.add("incorrect");
        valid=false;
    }
    else if(about.length<20){
        document.getElementById("aboutError").innerHTML="Minimum 20 characters";
        document.getElementById("about").classList.add("incorrect");
        valid=false;
    }
    else{
        document.getElementById("about").classList.remove("incorrect");
    }

    if(valid){
        document.getElementById("successMessage").innerHTML =
        "Registration Successful! Thank you for registering.";
    }

});