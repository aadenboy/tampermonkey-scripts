/* eslint-disable no-multi-spaces */
// ==UserScript==
// @name         perspective jumpscare
// @namespace    http://aadenboy.neocities.org/
// @version      2024-09-18
// @description  CSS 3D JUMPSCARE CSS 3D JUMPSCARE
// @match        *://*/*
// @author       aadenboy
// @grant        none
// ==/UserScript==

function blah() {
    const persp = Math.random() * 25  + 75
    const rotY  = Math.random() * 100 - 50
    const rotX  = Math.random() * 60  - 30
    const rotZ  = Math.random() * 60  - 30
    const trzX  = Math.random() * 16  - 8
    const trzY  = Math.random() * 16  - 8
    const trzZ  = Math.random() * 80  - 40

    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.maxWidth = "100vw";
    document.documentElement.style.maxHeight = "100vh";
    document.body.style.transform = `perspective(${persp}vw) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg) translate3d(${trzX}vw,${trzY}vh,${trzZ}vw)`;
    document.body.style.overflow = "scroll";
    document.body.style.maxWidth = "100vw";
    document.body.style.maxHeight = "100vh";
    document.body.style.transformStyle = "preserve-3d";

    //setTimeout(blah, 3000);
}

blah()
