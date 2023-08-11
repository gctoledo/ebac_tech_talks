AOS.init();

let eventDate = new Date("Dec 12, 2023 19:00:00");
const eventTimeStamp = eventDate.getTime();

const timeCounter = setInterval(function() {
    const now = new Date();
    const nowTimeStamp = now.getTime();

    const difEventTime = eventTimeStamp - nowTimeStamp;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hourInMS = 1000 * 60 * 60;
    const minInMS = 1000 * 60;

    const daysToEvent = Math.floor(difEventTime / dayInMs);
    const hoursToEvent = Math.floor((difEventTime % dayInMs / hourInMS));
    const minToEvent = Math.floor((difEventTime % hourInMS / minInMS));
    const secToEvent = Math.floor((difEventTime % minInMS) / 1000);

    document.getElementById('counter').innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minToEvent}m ${secToEvent}s`;

    if (difEventTime < 0) {
        clearInterval(timeCounter);
        document.getElementById('counter').innerHTML = '';
        document.getElementById('hero-text').innerHTML = 'Evento expirado';
    }
}, 1000)

