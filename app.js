let slides = [];
let current = 0;

function renderSlides() {
    const container = document.getElementById("slides");
    container.innerHTML = "";

    slides.forEach((s, i) => {
        const div = document.createElement("div");
        div.className = "slide";
        div.innerText = s.substring(0, 20);
        div.onclick = () => selectSlide(i);
        container.appendChild(div);
    });
}

function addSlide() {
    slides.push("New Slide");
    renderSlides();
}

function selectSlide(i) {
    current = i;
    document.getElementById("textInput").value = slides[i];
    updatePreview();
}

document.getElementById("textInput").addEventListener("input", () => {
    slides[current] = document.getElementById("textInput").value;
    updatePreview();
    renderSlides();
});

function updatePreview() {
    document.getElementById("preview").innerText = slides[current] || "";
}

function goLive() {
    const win = window.open("", "_blank");
    win.document.write(`
    <body style="margin:0;background:black;color:white;
    display:flex;justify-content:center;align-items:center;height:100vh;font-size:48px;">
    ${slides[current]}
    </body>
  `);
}

addSlide();