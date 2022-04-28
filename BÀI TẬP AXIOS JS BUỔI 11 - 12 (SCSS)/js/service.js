function Services() {
  this.fetchData = function () {
    return axios({
      url: "https://625569238646add390d66a76.mockapi.io/api/products",
      method: "GET",
    });
  };
}
