/* eslint-disable */
// ==UserScript==
// @name         modern ui
// @namespace    http://aadenboy.neocities.org/
// @version      2024-09-18
// @description  no more flat. rotation is what we need
// @match        *://*/*
// @author       aadenboy
// @grant        none
// ==/UserScript==

const lenience = 5;
const degrees  = 30;

document.body.addEventListener("mousemove", (mouse) => {
    const frame = mouse.target;
    if (frame.tagName === "BODY" || frame.tagName === "HTML" || (frame.querySelector(lenience > 0 ? "div" + ">div".repeat(lenience - 1) : "*") != null && frame.tagName.match(/DIV|MAIN|NAV|SECTION|ARTICLE|MARK|BLOCKQUOTE|HEADER|FOOTER|ASIDE/g))) return;
    frame.style.transformStyle = "preserve-3d";

    const b = frame.getBoundingClientRect();
    const x = mouse.clientX - b.left;
    const y = mouse.clientY - b.top;

    const rotateX = (y - b.height / 2) / (b.height / -2) * degrees;
    const rotateY = (x - b.width / 2) / (b.width / 2) * degrees;

    frame.style.transformOrigin = "50% 50%";
    frame.style.transform = `perspective(100vw) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
