export const colors=getColors()
export const device=getDevice()

function getColors(){
    let colorString=window.localStorage.getItem("aria-colors");
    if(!colorString){
        colorString=`{"r":0,"g":86,"b":159}`;
        window.localStorage.setItem("aria-colors",colorString);
    }
    return JSON.parse(colorString);
}
function getDevice(){
    return window.localStorage.getItem("aria-device") || "Desktop";
}
