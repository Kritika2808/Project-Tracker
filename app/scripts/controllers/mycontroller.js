'use strict';

angular.module('yoAngularProjectApp')
  
  .controller('MycontrollerCtrl', function ($scope,Myservice) {
    console.log("Inside controller");
    var stories=[];
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var myPieChart= function (values) {
    console.log("inisde piecharts");

    var arr=[
                ['SP1', 45.0],
                ['SP2', 26.8],
                ['SP3', 12.8]   ,
                ['SP4', 8.5],
                ['SP5', 6.2],
                ['SP6', 0.7]
                ];
    $('.chart1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {},
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Sprint share',
            data: arr
            }]
        });
    };

    var values1="";
    myPieChart(values1);

    var myColumnChart= function (values) {
    var arr2=[              
            {rel:"sprint-1",series:[49, 71, 106, 129]},
            {rel:"sprint-2",series:[83, 78, 98, 93]},
            {rel:"sprint-3",series:[48, 38, 39, 41]},
            {rel:"sprint-4",series:[42, 32, 34, 39]}
            ];
        $('.chart2').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Sprint Release-wise'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories:['release-1','release-2','release-3',"release-4"]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Stories'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: arr2[0].rel,
                data: arr2[0].series
    
            }, {
                name: arr2[1].rel,
                data: arr2[1].series
    
            }, {
                name: arr2[2].rel,
                data: arr2[2].series
    
            }, {
                name: arr2[3].rel,
                data: arr2[3].series
    
            }]
        });
};
    var values2="";
    myColumnChart(values2); 

  })


  .controller('SprintCtrl', function ($scope,Myservice) {

    console.log("Inside sprint detail controller");

    $scope.stories=["story1","story2","story3","story4","story5","story6","story7","story8","story9","story10",];


    $scope.handleDrop = function() {
        console.log('Item has been dropped');
    }
    
  })

 .controller('HotelCtrl', function ($scope,Myservice) {

    console.log("Inside hotel controller");
    
      Myservice.success(function(data) { 
        console.log(JSON.stringify(data));
    });
  })

.controller('ContactCtrl', function ($scope,Getdata) {
    console.log("Inside contact controller");

    })
  
  .controller('OverviewController', function ($scope) {
    console.log("Inside overview controller");
    $scope.dropped = [];
 
    // array of items for dragging
    $scope.items = [
        {id: 1, name: "Story1"}, 
        {id: 2, name: "Story2" },
        {id: 3, name: "Story3" },
        {id: 4, name: "Story4" }
    ];
 
    $scope.moveToBox = function(id) {
 
        for (var index = 0; index < $scope.items.length; index++) {
 
            var item = $scope.items[index];
                 
            if (item.id == id) {
                // add to dropped array
                $scope.dropped.push(item);
				
                // remove from items array
                $scope.items.splice(index, 1);
				
            }
        }
 
        $scope.$apply();
    };
 
   

     
      
  });
  

    
   
