Highcharts.theme = {
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, '#EEEEEE'],
                [1, '#EEEEEE']
            ]
        },
    }
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);