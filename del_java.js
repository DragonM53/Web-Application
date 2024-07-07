const scrollBtn = document.querySelector(".scroll-to-top")

const refreshButton = () => {
    if (document.documentElement.scrollTop < 350){
        scrollBtn.style.display = "none";
    }else{
        scrollBtn.style.display = "block";
    }
}
refreshButton();


scrollBtn.addEventListener("click", () =>{
    document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
    refreshButton();
})