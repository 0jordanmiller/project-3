import axios from "axios";

export default function () {
  let userObj = null;
  const promise = new Promise((resolve, reject) => {
    axios
      .get("/auth/user")
      .then(response => {
        // console.log(response.data);
        if (!!response.data.user) {
          console.log("THERE IS A USER");
          userObj = {
            loggedIn: true,
            user: response.data.user
          };
        } else {
          userObj = {
            loggedIn: false,
            user: {
              name: 'Not Logged In',
              bio: '',
              talent: '',
              email: '',
              phone: '',
              zipcode: ''
            }
          };
        }
        resolve(userObj);
      })
      .catch(() => reject());
  });

  return promise;
}
