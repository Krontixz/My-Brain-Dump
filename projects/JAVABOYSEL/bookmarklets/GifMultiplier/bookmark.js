document.getElementById("bookmark").href = `
javascript:var existing = document.getElementById("gifChaosController");
if (existing) existing.remove();

/* STATE*/
var gifs = [];
var spamInterval = null;
var bounceMode = false;
var rotateMode = false;
var followMode = false;
var multiplyMode = false;
var mouseX = window.innerWidth / 2;
var mouseY = window.innerHeight / 2;

/* Track finger */
document.addEventListener("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
document.addEventListener("touchmove", function(e) {
    mouseX = e.touches[0].clientX;
    mouseY = e.touches[0].clientY;
});

/* ===== PRESET SAFE GIF (Wikipedia hosted) */
var gifURL = "https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif";

/* ===== CONTROL PANEL (CREATED FIRST) */
var panel = document.createElement("div");
panel.id = "gifChaosController";
panel.style.position = "fixed";
panel.style.top = "50%";
panel.style.left = "50%";
panel.style.transform = "translate(-50%, -50%)";
panel.style.width = "500px";
panel.style.background = "#111";
panel.style.padding = "20px";
panel.style.borderRadius = "20px";
panel.style.boxShadow = "0 0 40px rgba(0,0,0,0.8)";
panel.style.zIndex = "999999";
panel.style.textAlign = "center";

var title = document.createElement("h2");
title.innerText = "WIKI GIF CHAOS";
title.style.color = "white";

var textarea = document.createElement("textarea");
textarea.placeholder = "Type: stop, bounce, rotate, follow, multiply";
textarea.style.width = "100%";
textarea.style.height = "80px";
textarea.style.marginTop = "10px";
textarea.style.borderRadius = "10px";
textarea.style.border = "none";
textarea.style.padding = "10px";
textarea.style.boxSizing = "border-box";

var button = document.createElement("button");
button.innerText = "EXECUTE";
button.style.marginTop = "10px";
button.style.padding = "10px 20px";
button.style.border = "none";
button.style.borderRadius = "10px";
button.style.background = "red";
button.style.color = "white";
button.style.cursor = "pointer";

panel.appendChild(title);
panel.appendChild(textarea);
panel.appendChild(button);
document.body.appendChild(panel);

/* ===== SPAWN */
function spawnGIF() {
    var img = document.createElement("img");
    img.src = gifURL;
    img.style.position = "fixed";
    img.style.width = "120px";
    img.style.left = Math.random() * window.innerWidth + "px";
    img.style.top = Math.random() * window.innerHeight + "px";
    img.style.zIndex = "999998";
    img.vx = (Math.random() - 0.5) * 6;
    img.vy = (Math.random() - 0.5) * 6;
    img.angle = 0;
    document.body.appendChild(img);
    gifs.push(img);
}

/* ===== ANIMATION */
function animate() {
    gifs.forEach(function(img) {

        var x = parseFloat(img.style.left);
        var y = parseFloat(img.style.top);

        if (bounceMode) {
            x += img.vx;
            y += img.vy;

            if (x <= 0 || x >= window.innerWidth - 120) img.vx *= -1;
            if (y <= 0 || y >= window.innerHeight - 120) img.vy *= -1;
        }

        if (followMode) {
            x += (mouseX - x) * 0.02;
            y += (mouseY - y) * 0.02;
        }

        if (rotateMode) {
            img.angle += 5;
            img.style.transform = "rotate(" + img.angle + "deg)";
        }

        img.style.left = x + "px";
        img.style.top = y + "px";
    });

    requestAnimationFrame(animate);
}
animate();

/* ===== COMMANDS */
button.onclick = function() {
    var value = textarea.value.trim().toLowerCase();

    if (value === "stop") {
        clearInterval(spamInterval);
        gifs.forEach(function(img){ img.remove(); });
        gifs = [];
        return;
    }

    if (value === "bounce") { bounceMode = !bounceMode; return; }
    if (value === "rotate") { rotateMode = !rotateMode; return; }
    if (value === "follow") { followMode = !followMode; return; }
    if (value === "multiply") { multiplyMode = !multiplyMode; return; }
};

/* ===== AUTO START */
spamInterval = setInterval(function() {
    spawnGIF();
    if (multiplyMode) spawnGIF();
}, 800);

completion();
`;
