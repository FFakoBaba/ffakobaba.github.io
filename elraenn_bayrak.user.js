// ==UserScript==
// @name         Bayrak şablonu
// @namespace    http://tampermonkey.net/
// @version      0.31
// @description  elraenin bayrağı
// @author       oralekin, FFakoBaba
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

/* Dur Yolcu
 * Eğer rastgele tıklayıp bu yazıya geldiysen Tampermonkey eklentisini kurmamışsın demektir
 *
 * Kurduktan sonra burayı yenile, scripti yüklesin, sonra r/place sayfasına Ctrl+F5 at
 *
 * Chrome: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
 * Firefox: https://addons.mozilla.org/en-CA/firefox/addon/violentmonkey/
 *
 * Hadi klavyenize kuvvet
 */

if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://github.com/FFakoBaba/ffakobaba.github.io/raw/main/overlay.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px; z-index:31;";
            console.log(i);
            return i;
        })())

    }, false);
}
