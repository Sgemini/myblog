const dateFormat = date => {
    date = new Date(date)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}

const getCookie = name => {
    let start = document.cookie.indexOf(name + '=')
    let len = start + name.length + 1
    if (!start && name !== document.cookie.substring(0, name.length)) {
        return null
    }
    if (start === -1) return null
    let end = document.cookie.indexOf(';', len)
    if (end === -1) end = document.cookie.length
    return unescape(document.cookie.substring(len, end))
}

const setCookie = (name, value, expires) => {
    let today = new Date()
    today.setTime(today.getTime())
    if (expires) {
        expires = expires * 1000 * 60 * 60 * 24
    }
    let expiresDate = new Date(today.getTime() + expires)
    document.cookie = name + '=' + escape(value) + (expires ? ';expires=' + expiresDate.toGMTString() : '')
}

export {
    getCookie, setCookie
}
