var res;

document.querySelector("#usernameForm").addEventListener("submit", e => {
    e.preventDefault();
    let uname = e.target.usernameInput.value;
    // you dont need submit button, i just tested it
    fetch(`https://cors-anywhere.herokuapp.com/https://api.mojang.com/users/profiles/minecraft/${uname}`)
    .then((res) => {
        if(res.status != 200) {
            return {
                error: true,
                msg: "Username does not exist!"
            };
        }
        let data = res.json();
        data.error = false;
        return data;
    })
    .then((data) => {
        if(data.error) {
            console.log(data.msg);
        } else {
            console.log(data.id)
        } // a
    });
});
