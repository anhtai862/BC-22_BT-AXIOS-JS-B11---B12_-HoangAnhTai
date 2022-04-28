var service = new Service();

function getListProducts() {
  var promised = service.fetchData();
  promised
    .then(function (result) {
      console.log(result.data);
      renderHTML(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
getListProducts();

function xoa(id) {
  var deleteSP = service.deleteProduct(id);

  deleteSP
    .then(function () {
      // xoá thành công => fetch lại data mới
      getListProducts();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function renderHTML(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var product = arr[i];
    content += `
    <tr>
      <td>${i + 1}</td>
      <td>${product.tenSP}</td>
      <td>${product.gia}</td>
      <td><img src="../../assets/img/img/${
        product.hinhAnh
      }" style="width : 150px"/></td>
      
      <td>${product.moTa}</td>
      <td>
      <button  class="btn btn-danger" onclick="xoa(${product.id})">Xoá
      </button>
      <button id="upDataSP" class="btn btn-success" data-toggle="modal"
      data-target="#myModal" onclick = "sua(${product.id})" >Sửa
      </button>
      </td>


      

      </tr>
        
        
        `;
  }

  document.getElementById("tblDanhSachSP").innerHTML = content;
}

// SỬa SP

function sua(id) {
  console.log(id);
  // sửa lại tiêu đè modal

  document.getElementsByClassName("modal-title")[0].innerHTML = "Sửa Sản Phẩm";
  // add vô button Them dưới footer của modal
  var footer = `<button class="btn btn-warning" onclick = "capNhat(${id})">Cập Nhật</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
  service
    .getProductById(id)
    .then(function (result) {
      // DOM tới các thẻ input lấy value
      var product = result.data;
      getEle("TenSP").value = product.tenSP;
      getEle("GiaSP").value = product.gia;
      getEle("HinhSP").value = product.hinhAnh;
      getEle("moTa").value = product.moTa;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// cập nhật thông tin

function capNhat(id) {
  console.log(id);
  // DOM tới các thẻ input lấy value
  var tenSP = getEle("TenSP").value;
  var GiaSP = getEle("GiaSP").value;
  var hinhAnh = getEle("HinhSP").value;
  var moTa = getEle("moTa").value;
  // taọ đối tượng product từ lớp đối tượng Product
  var product = new Product(id, tenSP, GiaSP, hinhAnh, moTa);

  // gọi tới phương thức services để gửi product lên server
  service
    .updateProductById(product)
    .then(function () {
      // sửa thành công => fetch lại data mới

      getListProducts();
      // tắt modal
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    });
}

// THêm SP

getEle("btnThemSP").onclick = function () {
  // sửa lại tiêu đè modal

  document.getElementsByClassName("modal-title")[0].innerHTML = "Thêm Sản Phẩm";
  // add vô button Them dưới footer của modal
  var footer = `<button class="btn btn-success" onclick = "addProduct()">Add</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
};

function addProduct() {
  // DOM tới các thẻ input lấy value

  var tenSP = getEle("TenSP").value;
  var GiaSP = getEle("GiaSP").value;
  var hinhAnh = getEle("HinhSP").value;
  var moTa = getEle("moTa").value;

  // taọ đối tượng product từ lớp đối tượng Product
  var product = new Product("", tenSP, GiaSP, hinhAnh, moTa);
  console.log(product);

  // gọi tới phương thức services để gửi product lên server
  service
    .addProductApi(product)
    .then(function () {
      getListProducts();
      // tắt modal
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getEle(id) {
  return document.getElementById(id);
}
