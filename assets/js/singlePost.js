/////////////////////////////////////////////////
//// add hover event in Gallery Single Post
/////////////////////////////////////////////////

let singlePost = document.querySelector(".singlePost");
console.log(singlePost);
let singlePostBtn = document.querySelector("#singlePostBtn");

if (document.querySelector(".singlePost")) {
  singlePost.addEventListener("mouseover", () => {
    singlePost.classList.add("singleEvent");
    singlePostBtn.classList.add("btn-primary");
    singlePostBtn.classList.remove("btn-outline-primary");
    singlePostBtn.classList.add("text-white");
  });

  singlePost.addEventListener("mouseout", () => {
    singlePost.classList.remove("singleEvent");
    singlePostBtn.classList.remove("btn-primary");
    singlePostBtn.classList.add("btn-outline-primary");
    singlePostBtn.classList.remove("text-white");
  });
}
