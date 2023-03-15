const getSecondsToTomorrow = () => {
    let now = new Date();
    let totalSecondsToday = (now.getHours() * 60 + now.getMinutes()) * 60 + now.getSeconds();
    let totalSecondsInADay = 86400;

    return totalSecondsInADay - totalSecondsToday;
}