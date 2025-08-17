var proName = document.getElementById("proName");
var proPrice = document.getElementById("proPrice");
var proCategory = document.getElementById("proCategory");
var proDesc = document.getElementById("proDesc");
var btn = document.getElementById("btn");
var Updatebtn = document.getElementById("Updatebtn");
var searchpro=document.getElementById("searchpro");

var proContainer = [];
var updateIndex = null;

if (JSON.parse(localStorage.getItem("products")) != null) {
  proContainer = JSON.parse(localStorage.getItem("products"));
  showpro();
}
btn.onclick = function () {
  var pro = {
    name: proName.value,
    price: proPrice.value,
    cate: proCategory.value,
    desc: proDesc.value,
  };
  proContainer.push(pro);
  localStorage.setItem("products", JSON.stringify(proContainer));
  showpro();
  console.log(proContainer);
};

function showpro() {
  var table = ``;
  for (let i = 0; i < proContainer.length; i++) {
    table += `
        <tr>
        <td>${i + 1}</td>
        <td>${proContainer[i].name}</td>
        <td>${proContainer[i].price}</td>
        <td>${proContainer[i].cate}</td>
        <td>${proContainer[i].desc}</td>
         <td>
                  <i onclick="delpro(${i})" class="fas fa-edit text-danger me-2 d-inline"> Delete</i>
                </td>
                <td>
                  <i onclick="setFormToUpdate(${i})" class="fas fa-minus-circle text-warning me-2 d-inline"> Update</i>
                </td>
        </tr>
        `;
  }
  document.getElementById("tbody").innerHTML = table;
}

function delpro(index){
    proContainer.splice(index,1);
    localStorage.setItem("products",JSON.stringify(proContainer))
    showpro();
}

searchpro.onkeyup=function(){
    search(searchpro.value);
}

function search(data){

    var table = ``;
  for (let i = 0; i < proContainer.length; i++) {
   if(proContainer[i].name.toLowerCase().includes(data.toLowerCase())){
     table += `
        <tr>
        <td>${i + 1}</td>
        <td>${proContainer[i].name}</td>
        <td>${proContainer[i].price}</td>
        <td>${proContainer[i].cate}</td>
        <td>${proContainer[i].desc}</td>
         <td>
                  <i onclick="delpro(${i})" class="fas fa-edit text-danger me-2 d-inline"> Delete</i>
                </td>
                <td>
                  <i onclick="setFormToUpdate(${i})" class="fas fa-minus-circle text-warning me-2 d-inline"> Update</i>
                </td>
        </tr>
        `;
   }
     document.getElementById("tbody").innerHTML = table;

  }

}

function setFormToUpdate(i){
  btn.classList.replace('d-block','d-none');
  Updatebtn.classList.replace('d-none','d-block');
  proName.value=proContainer[i].name;
  proPrice.value=proContainer[i].price;
  proCategory.value=proContainer[i].cate;
  proDesc.value=proContainer[i].desc;
  updateIndex = i;
}

Updatebtn.onclick=function(){
  var pro = {
        name: proName.value,
        price: proPrice.value,
        cate: proCategory.value,
        desc: proDesc.value,
    }
    if(updateIndex !== null) {
      proContainer[updateIndex] = pro; 
      localStorage.setItem("products",JSON.stringify(proContainer));
      showpro();
      btn.classList.replace('d-none','d-block');
      Updatebtn.classList.replace('d-block','d-none');
      updateIndex = null;
      location.reload(); 
    }
}


