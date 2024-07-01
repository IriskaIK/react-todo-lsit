export default function getCurrentDate():string{
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${year}-${month}-${day} ${hours}:${minutes}`
}