export function hasClass (dom, clsName) {
    let classStr = dom.getAttribute('class');
    let classArr = classStr.split(' ');
    for (let i = 0; i < classArr.length; i++) {
        if (classArr[i] === clsName) {
            return true;
        }
    }
    return false;
};

export function addClass (dom, clsName) {
    if (!hasClass(dom, clsName)) {
        let classStr = dom.getAttribute('class');
        dom.className = classStr.trim() + ' ' + clsName;
    }
};

export function removeClass (dom, clsName) {
    if (hasClass(dom, clsName)) {
        let classStr = dom.getAttribute('class');
        let newClassStr = classStr.replace(clsName, '');
        dom.className = newClassStr;
    }
}

export function toggleClass (dom, clsName) {
    if (hasClass(dom, clsName)) {
        removeClass(dom, clsName);
    } else {
        addClass(dom, clsName);
    }
};
