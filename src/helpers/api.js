import axios from "axios";

const url = "http://localhost:3050/api/user";

export const makeAxiosCall = (reservations)=>{

    axios({
        method: 'post',
        url,
        data: {
          firstName: 'Finn',
          lastName: 'Williams',
          email:"bgo@bgo.bog",
          password:"pass",

        }
      });
}