$(function() {
  $.datepicker.setDefaults( $.datepicker.regional[ "" ] );
    $( "#start_date" ).datepicker( $.datepicker.regional[ "zh-CN" ] );
    $( "#end_date" ).datepicker( $.datepicker.regional[ "zh-CN" ] );
    var now_date = new Date();
    var week_later = new Date(now_date-0+ (-7)*86400000);
    $("#end_date").val(now_date.getFullYear()+"-"+(now_date.getMonth()+1)+"-"+now_date.getDate());
    $("#start_date").val(week_later.getFullYear()+"-"+(week_later.getMonth()+1)+"-"+week_later.getDate());



    var spline_chart = new Highcharts.Chart({
            chart: {
                renderTo: 'line_chart',
                type: 'spline'
            },
            title: {
                align:"left",
                text: '满意度趋势图（月）',
                style:{
                  
                  fontWeight: 600
                }
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
                align:"left",
                text: '区域满意度对比',
                style:{
                            
                            fontWeight: 600
                }
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
                          align:"left",
                          text: '业务交易数量对比',
                          style:{
                            
                            fontWeight: 600
                          }
                      },
                      tooltip: {
                        useHTML: true,
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
                              ['话费服务',   45.0],
                              ['充值缴费',       26.8],
                              {
                                  name: '业务办理',
                                  y: 12.8,
                                  sliced: true,
                                  selected: true
                              },
                              ['优惠促销',    8.5],
                              ['选号入网',     6.2]
                          ]
                      }]
                  });

    // $("#pie_chart .highcharts-container").css({'z-index':0});
    // $("#column_chart .highcharts-container").css({'z-index':-1});
    // $("#line_chart .highcharts-container").css({'z-index':-1});

    
    function shuffle_data(){
      
      random_data(column_chart.series[0].data,65,100);
      random_data(pie_chart.series[0].data,1,30);
      random_data(spline_chart.series[0].data,65,100);


    }

    function random_data(o_data,min,max){
      for (var i=0;i<o_data.length;i++){
          o_data[i].update(parseInt(Math.random()*(max-min+1)+min));
      }
    }

    $("#side_menu li a").click(shuffle_data);

    $("#side_menu li a").click(function(){
        var node_list = [];
        node_list.push(this.text);

        var parent  = $(this).parent();
        
        while(true){

          if (parent[0].className=="dropdown-submenu") {

            node_list.push($(parent).children('a')[0].text);
            parent = $(parent).parent();
          }else{
            parent = $(parent).parent();
          }

          if (parent[0].id=="side_menu") break;

        }
        $("#bread_top").empty();
        for(var i=node_list.length-1;i>=0;i--){
          if(i!=0)
            $("#bread_top").append("<li><a>"+ node_list[i] +"</a><span class='divider'>></span></li>");
          else
            $("#bread_top").append("<li><a>"+ node_list[i] +"</a></li>");
        }
    });


});
