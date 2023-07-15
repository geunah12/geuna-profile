window.document.oncontextmenu = new Function("return false");
window.document.onselectstart = new Function("return false");
window.document.ondragstart = new Function("return false");

let profileimg = document.querySelector('#profileimg');
let mainTitle = document.querySelector("#mainTitle");

profileimg.addEventListener('click', () => {
    window.open("https://www.instagram.com/luxeuna/");
});

mainTitle.addEventListener("click", () => {
    alert("안녕하세요 김근아 입니다\n연락처 : 010-2377-5902")
})