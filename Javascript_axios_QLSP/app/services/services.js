function Service() {
  this.fetchData = function () {
    return axios({
      url: "https://625569238646add390d66a76.mockapi.io/api/products",
      method: "GET",
    });
  };
  this.deleteProduct = function (id) {
    return axios({
      url: `https://625569238646add390d66a76.mockapi.io/api/products/${id}`,
      method: "DELETE",
    });
  };
  this.addProductApi = function (product) {
    return axios({
      url: "https://625569238646add390d66a76.mockapi.io/api/products",
      method: "POST",
      data: product,
    });
  };

  this.getProductById = function (id) {
    return axios({
      url: `https://625569238646add390d66a76.mockapi.io/api/products/${id}`,
      method: "GET",
    });
  };

  this.updateProductById = function (product) {
    return axios({
      url: `https://625569238646add390d66a76.mockapi.io/api/products/${product.id}`,
      method: "PUT",
      data: product,
    });
  };
}
