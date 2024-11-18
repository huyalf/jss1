function upDate(previewPic) {
    console.log("Mouseover or focus event triggered!");
    const imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
}

function undo() {
    console.log("Mouseout or blur event triggered!");
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function addTabFocus() {
    const images = document.querySelectorAll(".preview");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0"); 
        console.log(`Added tabindex to image ${i + 1}`);
    }
}

window.onload = function() {
    console.log("Page loaded!");
    addTabFocus();
};

document.querySelectorAll(".preview").forEach(img => {
    
    img.addEventListener("mouseover", function() {
        upDate(this);
    });
    img.addEventListener("mouseout", undo);

    
    img.addEventListener("focus", function() {
        upDate(this);
    });
    img.addEventListener("blur", undo);
});




