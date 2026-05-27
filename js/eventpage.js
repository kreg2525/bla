const openBtn = document.getElementById("openReq");
const closeBtn = document.querySelector(".modal-close");
const modal = document.getElementById("req");
const regForm = document.getElementById("regForm");

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

modal.addEventListener("click", (e) => {

    if(e.target === modal){
        modal.classList.remove("open");
    }

});

regForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Registration Successful!");

    modal.classList.remove("open");

    regForm.reset();

})
document.querySelectorAll(".custom-dropdown").forEach(dropdown => {

    const header = dropdown.querySelector(".dropdown-header");
    const text = header.querySelector("span");
    const items = dropdown.querySelectorAll(".dropdown-list li");

    // OPEN/CLOSE
    header.addEventListener("click", () => {

        document.querySelectorAll(".custom-dropdown").forEach(other => {

            if(other !== dropdown){
                other.classList.remove("open");
            }

        });

        dropdown.classList.toggle("open");
    });

    // SELECT ITEM
    items.forEach(item => {

        item.addEventListener("click", () => {

            text.textContent = item.textContent;

            dropdown.classList.remove("open");

        });

    });

});

// CLOSE WHEN CLICK OUTSIDE
document.addEventListener("click", (e) => {

    if(!e.target.closest(".custom-dropdown")){

        document.querySelectorAll(".custom-dropdown").forEach(dropdown => {

            dropdown.classList.remove("open");

        });

    }

});