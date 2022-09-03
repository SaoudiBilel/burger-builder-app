import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-builder-app-c9eaa-default-rtdb.firebaseio.com/",
});

export default instance;