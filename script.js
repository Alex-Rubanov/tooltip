const TRAFFIC_LIGHT_COLORS = {
    red: 'red',
    green: 'green',
    yellow: 'yellow'
};

const TRAFFIC_LIGHT_SWITCHING = {
    red: TRAFFIC_LIGHT_COLORS.green,
    green: TRAFFIC_LIGHT_COLORS.yellow,
    yellow: TRAFFIC_LIGHT_COLORS.red
};

const TOOLTIP_MESSAGE = {
    red: 'Stop! Wait for green light!',
    yellow: 'Hurry up!',
    green: 'Now you can go!'
};

const switchBtn = document.querySelector('.btn-color');
const trafficLight = document.querySelector('.traffic-light');
const message = document.querySelector('.tooltip-top');
const tooltip = document.querySelector('#tooltip');

switchBtn.addEventListener('click', () => {
    let color = trafficLight.dataset.color;

    trafficLight.dataset.color = TRAFFIC_LIGHT_SWITCHING[color];
});

trafficLight.addEventListener('mouseenter', showTooltip);

function showTooltip() {
    let color = trafficLight.dataset.color;

    tooltip.textContent = TOOLTIP_MESSAGE[color];
    if (trafficLight.dataset.color === 'green') {
        return tooltip.classList.add('tooltip-bottom');
    }
    if (trafficLight.dataset.color === 'yellow') {
        return tooltip.classList.add('tooltip-center');
    }

    tooltip.classList.add('tooltip-top'); 
}

trafficLight.addEventListener('mouseleave', hideTooltip);

function hideTooltip() {
    tooltip.textContent = '';
    tooltip.classList.remove('tooltip-top', 'tooltip-bottom', 'tooltip-center');
}