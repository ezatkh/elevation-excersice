let wisdom = [];
let count = 0;
render();

function render() {
  $(".text").empty();
  let html = JSON.parse(localStorage["WISDOM"] || "[]");
  html.forEach((p) => {
    $(".text").append(
      `<div class="item" id="${p.id}"> <i class="fa fa-trash" aria-hidden="true"></i>  <h3> ${p.text} </h3>  <div>`
    );
  });
}

$("#btn").click(function () {
  if (wisdom.length == 0) {
    wisdom = JSON.parse(localStorage["WISDOM"] || "[]");
    count = wisdom.length;
  }
  wisdom.push({ id: "A" + count, text: $("#input").val() });
  count++;
  if (wisdom.length % 2 == 0) {
    localStorage.setItem("WISDOM", JSON.stringify(wisdom));
  }
  render();
});

$("#clear").click(function () {
  localStorage.removeItem("WISDOM");
  wisdom = JSON.parse(localStorage["WISDOM"] || "[]");
  render();
});

$(".text").on("click", ".fa", function () {
  const id = $(this).parent("div").attr("id");

  for (let index in wisdom) {
    if (id === wisdom[index].id) wisdom.splice(index, 1);
  }
  localStorage.setItem("WISDOM", JSON.stringify(wisdom));
  render();
});
