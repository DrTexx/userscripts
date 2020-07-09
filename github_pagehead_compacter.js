// ==UserScript==
// @name        Github Pagehead Compacter
// @namespace   Violentmonkey Scripts
// @match       https://github.com/*/*
// @grant       none
// @version     1.0
// @author      DrTexx
// @description 7/9/2020, 10:34:49 AM
// ==/UserScript==

// let element = document.getElementById("js-repo-pjax-container")
let elements = document.getElementsByClassName('pagehead')

for (element of elements) {
  element.style.padding = "32px"
  for (child of element.children) {
    const maxWidth = 1280 - (32 * 2)
    child.style.maxWidth = maxWidth.toString() + "px"
    child.style.margin = "auto"
    child.style.setProperty("padding", "0px", "important")
  }
}
