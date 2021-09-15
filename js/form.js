/// log in signup none block
const addRemove = (idAdd,idRemove,className) =>{
    document.getElementById(idAdd).classList.add(className);
    document.getElementById(idRemove).classList.remove(className);
}
const log = () =>{
    addRemove('login','signup','active')
    addRemove('btn-active-log','btn-active-sign','btn-active');
}
const sign = () =>{
    addRemove('signup','login','active')
    addRemove('btn-active-sign','btn-active-log','btn-active');
}

// check confirm or pass match