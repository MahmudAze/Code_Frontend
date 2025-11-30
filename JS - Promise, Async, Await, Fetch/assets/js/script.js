async function GetAll() {
  var datas = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  var ul = document.querySelector(".list-group");
  
  datas.forEach((item) => {
    var li = "";
    li += `<li class="list-group-item">${item.name}, ${item.userId}, ${item.title}</li>`;
    ul.innerHTML += li;
  });
}

GetAll();
