var services = new Services();
function getListbyProduct() {
  services
    .fetchData()
    .then(function (result) {
      renderHTML(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
getListbyProduct();

function renderHTML(array) {
  var content = "";
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.loaiND === "GV") {
      console.log(element.loaiND);
      content += `
            <div class="teacher">
                <div class="teacher__info">
                    <img src="./img/${element.hinhAnh}" alt="#" />
                    <div class="info__content">
                        <h5>${element.ngonNgu}</h5>
                        <h3>${element.hoTen}</h3>
                        <p>${element.moTa}</p>
                    </div>
                </div>
            </div>
            `;
    }
  }

  document.getElementsByClassName("teacher__content")[0].innerHTML = content;
}
