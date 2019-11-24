export const colors=getColors()
export const device=getDevice()

function getColors(){
    let colorString=window.localStorage.getItem("aria-colors");
    if(!colorString){
        colorString=`{"r":0,"g":86,"b":159}`;
        window.localStorage.setItem("aria-colors",colorString);
    }
    try{
        return JSON.parse(colorString);
    }
    catch(e){
        return {"r":0,"g":86,"b":159};
    }
    
}
function getDevice(){
    let device = window.localStorage.getItem("aria-device");
    if(device){
        return device;
    }
    else{
        var isMobile = (/iphone|ipod|android|ie|blackberry|fennec/).test(navigator.userAgent.toLowerCase());
        if(isMobile){
            window.localStorage.setItem("aria-device","Mobile");
            return "Mobile";
        }
        else{
            window.localStorage.setItem("aria-device","Desktop");
            return "Desktop";
        }
    }
}
