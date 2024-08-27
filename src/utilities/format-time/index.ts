// const formatDate = (dateString: string, locale = "en-US") => {
//     const date = new Date(dateString);
//     const options: Intl.DateTimeFormatOptions = {
//         weekday: "long",
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//         hour: "numeric",
//         minute: "numeric",
//         second: "numeric",
//         timeZone: "UTC",
//     };
//     return date.toLocaleString(locale, options);
// };
function formatDate(dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}
export default formatDate;
