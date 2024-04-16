function getEffectCount(type) {
    return parseInt(localStorage.getItem("effectCount"+type))
    
}

function updateEffectCount(type, newCount) {
    localStorage.setItem("effectCount"+type, newCount)
}

export default {getEffectCount, updateEffectCount}