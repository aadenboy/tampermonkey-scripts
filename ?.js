// ==UserScript==
// @name         ?
// @namespace    http://aadenboy.neocities.org/
// @version      2024-10-10
// @description  ?
// @match        *://*/*
// @author       aadenboy
// @grant        none
// ==/UserScript==

function huh(frame) {
    if (frame.nodeName != "SCRIPT" && frame.nodeName != "STYLE") {
        frame.childNodes.forEach((node) => {
            if(node.nodeType === Node.TEXT_NODE) {
                node.nodeValue = node.nodeValue.replace(/\S/g, "?");
            }
        });
    }
}

function what() {
    document.querySelectorAll("*").forEach((frame) => {
        huh(frame)
    });
    setTimeout(what, 50)
}
what()

let a = 1
function uhhhh() {
    let thing = document.createElement("span")
    thing.setAttribute("style", `position: fixed; left: ${Math.random() * 200 - 50}vw; top: ${Math.random() * 200 - 50}vh; font-size: ${35 + a}px;`)
    thing.innerHTML = "?"
    a += Math.random()
    document.body.appendChild(thing)

    setTimeout(uhhhh, 1)
}
//uhhhh()
