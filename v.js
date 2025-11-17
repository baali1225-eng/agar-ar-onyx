// ============ ONYX v.js — Gameplay Tools ============

// Macro Feed (W spam)
document.addEventListener("keydown", function (e) {
    if (e.key === "q") {
        window.macroFeed = setInterval(() => {
            document.dispatchEvent(new KeyboardEvent("keydown", { key: "w" }));
        }, 30);
    }
});
document.addEventListener("keyup", function (e) {
    if (e.key === "q") clearInterval(window.macroFeed);
});

// Double Split
document.addEventListener("keydown", function (e) {
    if (e.key === "z") {
        document.dispatchEvent(new KeyboardEvent("keydown", { key: " " }));
        setTimeout(() => {
            document.dispatchEvent(new KeyboardEvent("keydown", { key: " " }));
        }, 60);
    }
});

// Macro Split
document.addEventListener("keydown", function (e) {
    if (e.key === "x") {
        for (let i = 0; i < 4; i++) {
            setTimeout(() => {
                document.dispatchEvent(new KeyboardEvent("keydown", { key: " " }));
            }, i * 30);
        }
    }
});

// Auto Respawn
document.addEventListener("keydown", function (e) {
    if (e.key === "r") {
        document.querySelector("button#play-btn")?.click();
    }
});

// Zoom Modification
let zoom = 1;
document.addEventListener("wheel", function (e) {
    zoom += (e.deltaY > 0 ? 0.05 : -0.05);
    zoom = Math.max(0.4, Math.min(1.8, zoom));
    document.body.style.zoom = zoom;
});
