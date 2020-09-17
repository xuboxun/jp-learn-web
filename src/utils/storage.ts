export const getLocal = (key: string) =>{
    try { 
        const res = localStorage.getItem(key)
        if (!res) {
            return null
        }
        return JSON.parse(res)
    } catch(e) {
        return null
    }
}

export const setLocal = (key: string, data: any) => {
    return localStorage.setItem(key, JSON.stringify(data))
}