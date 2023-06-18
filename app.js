function signup(){
    window.location.href = "./signup.html";
}
function login(){
    window.location.href = "./index.html";
}


function register(){
    var Name = document.getElementById("Name").value
    var Email = document.getElementById("Email").value
    var Number = document.getElementById("Number").value
    var Password = document.getElementById("Password").value


    var user = {
        Name,
        Email,
        Number,
        Password,
    }
      var getuser = JSON.parse(localStorage.getItem("user"))
    if (getuser === null) {
        var arr = []
        arr.push(user)
        localStorage.setItem("user", JSON.stringify(arr))
        alert("user signup")
        window.location.href = "./index.html"
    } else {
        console.log("getuser", getuser)
        var findUser = getuser.find(function (value) {
            console.log(value.Email, "value")
            if (value.email === Email) {
                return true
            }
        })

        if (findUser === undefined) {
            getuser.push(user   )
            localStorage.setItem("users", JSON.stringify(getuser))
            alert("User Signup")
            window.location.href = "./index.html"
        } else {
            alert("this email address already exists")
        }
    }
}




