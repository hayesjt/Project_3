import axios from "axios";

export default {
  // Gets all data
  getData: function() {
    console.log('here')
    return axios.get("/api/datas");
  }
};