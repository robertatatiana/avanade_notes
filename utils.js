const formatDate = (date) => Intl.DateTimeFormat(navigator.language, { dateStyle: "short", timeStyle: "short" }).format(date);

export default formatDate;