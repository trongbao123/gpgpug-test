const formatDate = (dateString: string, locale = "en-US") => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "UTC",
    };
    return date.toLocaleString(locale, options);
};

export default formatDate;
