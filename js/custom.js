$(function() {
  $.datepicker.setDefaults( $.datepicker.regional[ "" ] );
    $( "#start_date" ).datepicker( $.datepicker.regional[ "zh-CN" ] );
    $( "#end_date" ).datepicker( $.datepicker.regional[ "zh-CN" ] );

    var spline_chart = new Highcharts.Chart({
            chart: {
                renderTo: 'line_chart',
                type: 'spline'
            },
            title: {
                text: '满意度'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: '满意度 (%)'
                },
                min: 0,
                max: 100,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                plotBands: [{ // Light air
                    from: 0,
                    to: 50,
                    color: 'rgba(68, 170, 213, 0.1)',
                    label: {
                        // text: 'Light air',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // Light breeze
                    from: 50,
                    to: 70,
                    color: 'rgba(0, 0, 0, 0)',
                    label: {
                        // text: 'Light breeze',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // Gentle breeze
                    from: 70,
                    to: 75,
                    color: 'rgba(68, 170, 213, 0.1)',
                    label: {
                        // text: 'Gentle breeze',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // Moderate breeze
                    from: 75,
                    to: 80,
                    color: 'rgba(0, 0, 0, 0)',
                    label: {
                        // text: 'Moderate breeze',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // Fresh breeze
                    from: 80,
                    to: 85,
                    color: 'rgba(68, 170, 213, 0.1)',
                    label: {
                        // text: 'Fresh breeze',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // Strong breeze
                    from: 85,
                    to: 90,
                    color: 'rgba(0, 0, 0, 0)',
                    label: {
                        // text: 'Strong breeze',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // High wind
                    from: 90,
                    to: 95,
                    color: 'rgba(68, 170, 213, 0.1)',
                    label: {
                        // text: 'High wind',
                        style: {
                            color: '#606060'
                        }
                    }
                },{ // Strong breeze
                    from: 95,
                    to: 100,
                    color: 'rgba(0, 0, 0, 0)',
                    label: {
                        // text: 'Strong breeze',
                        style: {
                            color: '#606060'
                        }
                    }
                }

                ]
            },
            tooltip: {
                formatter: function() {
                        return ''+
                        Highcharts.dateFormat('%Y-%m-%d', this.x) +': '+ this.y +'%';
                }
            },
            plotOptions: {
                spline: {
                    lineWidth: 4,
                    states: {
                        hover: {
                            lineWidth: 5
                        }
                    },
                    marker: {
                        enabled: false,
                        states: {
                            hover: {
                                enabled: true,
                                symbol: 'circle',
                                radius: 5,
                                lineWidth: 1
                            }
                        }
                    },
                    pointInterval: 3600000*24, // one hour
                    pointStart: Date.UTC(2013, 1, 20, 0, 0, 0)
                }
            },
            series: [{
                name: '全省满意度',
                data: [60, 70,71,65,76,80,82,86,83,90,92,97]
    
            },]
            ,
            navigation: {
                menuItemStyle: {
                    fontSize: '10px'
                }
            }
        });

    var column_chart = new Highcharts.Chart({
            chart: {
                renderTo: 'column_chart',
                type: 'column'
            },
            title: {
                text: '满意度'
            },
            tooltip: {
                        pointFormat: '{series.name}: <b>{point.y}%</b>',
                        percentageDecimals: 1
            },
            xAxis: {
                categories: ["大同", "晋城", "晋中", "临汾", "吕梁", "朔州", "太原", "忻州", "阳泉", "运城"]
            },
            yAxis: {
                title: {
                    text: '满意度%'
                }
            },
            series: [{
                name: "服务满意度",
                data: [80, 70, 75, 90, 91, 87, 64, 74, 86,90]
            }]
        });

  Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function(color) {
          return {
              radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
              stops: [
                  [0, color],
                  [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
              ]
          };
      });
      
      // Build the chart
          pie_chart = new Highcharts.Chart({
                      chart: {
                          renderTo: 'pie_chart',
                          plotBackgroundColor: null,
                          plotBorderWidth: null,
                          plotShadow: false
                      },
                      title: {
                          text: 'Browser market shares at a specific website, 2010'
                      },
                      tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage}%</b>',
                        percentageDecimals: 1
                      },
                      plotOptions: {
                          pie: {
                              allowPointSelect: true,
                              cursor: 'pointer',
                              dataLabels: {
                                  enabled: false
                              },
                              showInLegend: true
                          }
                      },
                      series: [{
                          type: 'pie',
                          name: 'Browser share',
                          data: [
                              ['Firefox',   45.0],
                              ['IE',       26.8],
                              {
                                  name: 'Chrome',
                                  y: 12.8,
                                  sliced: true,
                                  selected: true
                              },
                              ['Safari',    8.5],
                              ['Opera',     6.2],
                              ['Others',   0.7]
                          ]
                      }]
                  });


});
