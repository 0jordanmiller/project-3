import axios from "axios";

const BASEURL = function () {
  const key_arr = ["AIzaSyD7VAvFRakXE3BOSWUf6T3K3oCDMr8YNuk", "AIzaSyBUi2Z6D-VsZVjWdJHCjJbu67pSn35T3os", "AIzaSyAPCdmi755ma_8ypgWJd5zPe9b6UEl7UIg", "AIzaSyDsSOVbrDsQef9mJXVPXBjQ8UV6jnm2iCE"];
  const key = key_arr[Math.floor(Math.random() * key_arr.length)]
  console.log(key);
  return 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=raleigh&key=' + key
}
const APIKEY = 'AIzaSyDjrrxuRKWhn-pgM9jL40SmgDSTfi2C-Fs';   
export default {
  search: function (query) {
    return axios.get(BASEURL() + 'Raleigh'+ APIKEY).then(response => {
      console.log("working!!!");
  })
}
};