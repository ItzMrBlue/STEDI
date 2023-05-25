const fetch = require("node-fetch");

it ("Should get a login token", async() => {
    let token = "";
    const options = {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            "userName":"lorenzo.torres95@gmail.com",
            "password" :"Alberto1995!"
        })
    }
    const response = await fetch('https://dev.stedi.me/login', options);
    token = await response.text();
    const status = response.status;

    expect(status).toBe(200);
    expect (token.length).toBe(36);
})