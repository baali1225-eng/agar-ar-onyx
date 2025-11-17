// ================ ONYX m.js — UI Functions =================

// Minimap simple overlay
function createMinimap() {
    const map = document.createElement("div");
    map.id = "onyx-minimap";
    map.style.position = "fixed";
    map.style.bottom = "20px";
    map.style.right = "20px";
    map.style.width = "150px";
    map.style.height = "150px";
    map.style.border = "1px solid #00aaff";
    map.style.borderRadius = "10px";
    map.style.background = "rgba(0,0,30,0.45)";
    map.style.boxShadow = "0 0 15px #009dff";
    map.style.backdropFilter = "blur(6px)";
    map.style.zIndex = "999999";
    map.innerHTML = "<p style='color:#88d6ff; text-align:center; margin-top:60px;'>Minimap ON</p>";
    document.body.appendChild(map);
}

function toggleMinimap() {
    const map = document.getElementById("onyx-minimap");
    if (map) map.remove();
    else createMinimap();
}

// Apply Skin
function applySkin(url) {
    localStorage.setItem("onyx-skin", url);
    alert("Skin applied: " + url);
}

// Apply Theme
function applyTheme(name) {
    alert("Theme applied: " + name);
}

// Chat overlay
function toggleChat() {
    let chat = document.getElementById("onyx-chat");
    if (chat) {
        chat.remove();
    } else {
        chat = document.createElement("div");
        chat.id = "onyx-chat";
        chat.style.position = "fixed";
        chat.style.right = "20px";
        chat.style.top = "20px";
        chat.style.width = "250px";
        chat.style.height = "200px";
        chat.style.background = "rgba(0,0,30,0.5)";
        chat.style.backdropFilter = "blur(8px)";
        chat.style.border = "1px solid #00aaff";
        chat.style.borderRadius = "10px";
        chat.style.boxShadow = "0 0 20px #0088ff";
        chat.style.zIndex = "999999";
        chat.style.color = "#88cfff";
        chat.style.padding = "10px";
        chat.innerHTML = "<b>Chat Overlay</b><br><br>Coming soon...";
        document.body.appendChild(chat);
    }
}
