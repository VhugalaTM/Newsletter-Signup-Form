const email_input = document.querySelector(".input input"),
subscription_btn = document.querySelector(".button button"),
email_error = document.querySelector(".head-form .error"),
border_error = document.querySelector(".input"),
success_wrapper = document.querySelector(".sub-wrapper-2"),
subscription_wrapper = document.querySelector(".sub-wrapper-1"),
success_msg = document.querySelector(".success-message"),
dismiss_btn = document.querySelector(".sub-wrapper-2 .dismiss-btn button");

subscription_wrapper.style.display = "grid";

subscription_btn.addEventListener("click", () => {
    let email = email_input.value.trim();
    let emailRejex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(email == ""){
        email_error.textContent = "email is required";
        border_error.style.border = "1px solid #d87d7c";
        border_error.style.background = "#ffe8e6";
        email_input.style.background = "#ffe8e6"
        
    }else if(!emailRejex.test(email)){
        email_error.textContent = "valid email is required";
        border_error.style.border = "1px solid #d87d7c";
        border_error.style.background = "#ffe8e6";
        email_input.style.background = "#ffe8e6"
        email_input.style.color = "#d87d7c";

    }else{
        email_input.value = "";
        email_error.textContent = "";
        border_error.style.background = "none";
        border_error.style.border = "#c5c5c5";

        subscription_wrapper.style.display = "none";
        success_wrapper.style.display = "grid";
        success_msg.innerHTML = `A confirmation email has been sent to <strong>${email}</strong>. 
        Please open it and click the button inside to confirm your subscription.`
    }
})

dismiss_btn.addEventListener("click", () => {
    
    location.reload();
})
