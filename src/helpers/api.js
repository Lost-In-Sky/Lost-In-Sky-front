import axios from "axios";


const api = async (method, endpoint, data) => {
  try {
    return await axios({
      method,
      url: "http://localhost:2000/api/" + endpoint,
      data: { ...data },
      headers: {
        type: "aplication/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};


export default api;