class UserData {
    
    constructor(name, email, phone, password) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

    // display() {
    //     console.log(
    //         "Name: " +
    //             this.name +
    //             "\n" +
    //             "Email: " +
    //             this.email +
    //             "\n" +
    //             "Phone: " +
    //             this.phone +
    //             "\n" +
    //             "Password: " +
    //             this.password +
    //             "\n"
    //     );
    // }

    register(){
        const url = "http://localhost:8000/userData"
        const axios = require('axios');

        axios.post('url', {
            id : 0
        }).then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });   
    }
}
