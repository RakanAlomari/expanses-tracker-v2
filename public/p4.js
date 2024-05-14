document.addEventListener("DOMContentLoaded", () => {
    let addButton = document.getElementById("add2");
    let popup3 = document.getElementById("popup3");
    let close3 = document.getElementById("close3");
    let processe3 = document.getElementById("processe3");

    addButton.addEventListener("click", () => {
        popup3.style.display = "block";
    });

    close3.addEventListener("click", () => {
        popup3.style.display = "none";
    });

    processe3.addEventListener("click", () => {
        // Process the goal adding logic here
        popup3.style.display = "none";
    });
});
