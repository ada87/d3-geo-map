/**
 * D3 图提示说明：
*/
var tooltip = null, PID = null;
var WIDTH = window.innerWidth - 200;
var HEIGHT = window.innerHeight - 80;
var THEME = {
    BACKGROUND: 'rgba(40, 60, 125,0.75)',
    BORDER: "#2A3454",
    TEXT: '#C3D1DE'
}

window.addEventListener('resize', function () {
    WIDTH = window.innerWidth - 200;
    HEIGHT = window.innerHeight - 80;
});

if (d3.select('#__v_tip').size() == 1) {
    tooltip = d3.select('#__v_tip');
} else {
    tooltip = d3.select('body').append('div').attr('id', '#__v_tip');
}

tooltip.style('position', 'fixed')
    .style("opacity", 0)
    .style('padding', '5px')
    .style('left', '0')
    .style('top', '0')
    .style('height', 'auto')
    .style('width', 'auto')
    .style('opacity', 0)
    .style('pointer-events', 'none')
    .style('display', 'block')
    .style('border', ('1px solid ' + THEME.BORDER))
    .style('background', THEME.BACKGROUND)
    .style('color', THEME.TEXT);


var showTooltip = function (html) {
    window.clearTimeout(PID);
    tooltip.html(html);
    tooltip.style('opacity', 1)
    var left = (d3.event.clientX - 48) + 'px', right = 'auto', top = (d3.event.clientY + 16) + 'px', bottom = 'auto';
    if (d3.event.clientX > WIDTH) {
        left = 'auto';
        right = (WIDTH + 200 - d3.event.clientX + 20) + 'px';
    }
    if (d3.event.clientY > HEIGHT) {
        top = 'auto';
        bottom = (HEIGHT + 80 - d3.event.clientY + 20) + 'px';
    }

    tooltip.style('left', left)
        .style('top', top)
        .style('right', right)
        .style('bottom', bottom);
};

var showToolTipByCoord = function (x,y,html){
    window.clearTimeout(PID);
    tooltip.html(html);
    tooltip.style('opacity', 1)
    var left = (x - 48) + 'px', right = 'auto', top = (y + 16) + 'px', bottom = 'auto';
    if (x> WIDTH) {
        left = 'auto';
        right = (WIDTH + 200 - x + 20) + 'px';
    }
    if (y > HEIGHT) {
        top = 'auto';
        bottom = (HEIGHT + 80 - y + 20) + 'px';
    }
    tooltip.style('left', left)
        .style('top', top)
        .style('right', right)
        .style('bottom', bottom);

}

var hideTooltip = function (delay) {
    delay = delay || 1000;
    window.clearTimeout(PID);
    PID = window.setTimeout(function () {
        tooltip.transition()
            .duration(1000)
            .style('opacity', 0);
    }, delay);
};


module.exports = {
    show: showTooltip,
    hide: hideTooltip,
    showBy: showToolTipByCoord
};