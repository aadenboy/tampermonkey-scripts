/* eslint-disable */
// ==UserScript==
// @name         BEAUTIFUL
// @namespace    http://aadenboy.neocities.org/
// @version      2024-09-18
// @description  so beauty
// @match        *://*/*
// @author       aadenboy
// @grant        none
// ==/UserScript==

function rfont(frame) {
    const fonts = [
        "sans-serif",
        "serif",
        "monospace",
        "cursive",
        "fantasy",
        "Arial",
        "Helvetica",
        "Verdana",
        "Trebuchet MS",
        "Gill Sans",
        "Noto Sans",
        "Avantgarde",
        "TeX Gyre Adventor",
        "URW Gothic L",
        "Optima",
        "Arial Narrow",
        "Times New Roman",
        "Didot",
        "Georgia",
        "Palatino",
        "Bookman",
        "URW Bookman L",
        "New Centure Schoolbook",
        "TeX Gyre Schola",
        "American Typrewriter",
        "Andale Mono",
        "Courier New",
        "Courier",
        "FreeMono",
        "OCR A Std",
        "DejaVu Sans Mono",
        "Comic Sans MS",
        "Comic Sans",
        "Apple Chancery",
        "Bradley Hand",
        "Brush Script MT",
        "Brush Script Std",
        "Snell Roundhand",
        "URW Chancery L",
        "Impact",
        "Luminari",
        "Chalkduster",
        "Jazz LET",
        "Blippo",
        "Stencil STD",
        "Marker Felt",
        "Trattatello",
    ];
    const styles   = ["normal, italic, oblique"];
    const weights  = ["100", "200", "300", "normal", "500", "600", "bold", "800", "900"];
    const variants = ["normal", "small-caps"];
    const stretch  = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"];

    frame.style.fontFamily  =    fonts[Math.floor(Math.random() * (   fonts.length - 1))];
    frame.style.fontStyle   =   styles[Math.floor(Math.random() * (  styles.length - 1))];
    frame.style.fontWeight  =  weights[Math.floor(Math.random() * ( weights.length - 1))];
    frame.style.fontVariant = variants[Math.floor(Math.random() * (variants.length - 1))];
    frame.style.fontStretch =  stretch[Math.floor(Math.random() * ( stretch.length - 1))];
}

function random() {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

document.querySelectorAll("*").forEach((frame) => {
    frame.style.color = random();
    frame.style.backgroundColor = random();
    frame.style.borderColor = random();
    frame.style.outlineColor = random();
    rfont(frame);
});

document.addEventListener('DOMNodeInserted', function(event) {
    const frame = event.target;
    frame.style.color = random();
    frame.style.backgroundColor = random();
    frame.style.borderColor = random();
    frame.style.outlineColor = random();
    rfont(frame);
});
