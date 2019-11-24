export const colors=getColors()
export const device=getDevice()

function getColors(){
    return JSON.parse(window.localStorage.getItem("aria-colors")) || {r:0,g:86,b:159};
}
function getDevice(){
    return window.localStorage.getItem("aria-device") || "Desktop";
}
