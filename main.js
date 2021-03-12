Highcharts.chart('container', {
	chart: {
		type: 'area'
	},
	title: {
		text: 'Historic and Estimated Worldwide Population Distribution by Region'
	},
	subtitle: {
		text: 'Source: Wikipedia.org'
	},
	xAxis: {
		categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
		tickmarkPlacement: 'on',
		title: {
			enabled: true
		}
	},
	yAxis: {
		labels: {
			format: '{value}%'
		},
		title: {
			enabled: false
		}
	},
	tooltip: {
		pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
		split: true
	},
	plotOptions: {
		area: {
			stacking: 'percent',
			lineColor: '#ffffff',
			lineWidth: 1,
			marker: {
				lineWidth: 1,
				lineColor: '#ffffff'
			},
			accessibility: {
				pointDescriptionFormatter: function (point) {
					function round(x) {
						return Math.round(x * 100) / 100;
					}
					return (point.index + 1) + ', ' + point.category + ', ' +
						point.y + ' millions, ' + round(point.percentage) + '%, ' +
						point.series.name;
				}
			}
		}
	},
	series: [
		{
			name: "Papiravis", data: [84, 77, 30, 27]
		},
		{
			name: "Fjernsyn", data: [81, 82, 60, 48]
		},
		{
			name: "Radio", data: [71, 57, 50, 48]
		},
		{
			name: "Lydmedier", data: [43, 50, 51, 55]
		},
		{
			name: "Ukeblad", data: [21, 17, 5, 4]
		},
		{
			name: "Bøker", data: [24, 20, 24, 25]
		},
		{
			name: "Tidsskrift", data: [18, 14, 6, 7]
		},
		{name: "Tegneserieblad", data: [11, 9, 3, 3]},
		{name: "Serier/ film / video", data: [10, 10, 37, 43]},
		{name: "Internett", data: [NaN, 27, 91, 90]}



	]
});



Highcharts.chart('container', {

	title: {
		text: 'Norsk mediebarometer'
	},

	subtitle: {
		text: 'Source: https://www.ssb.no/medie'
	},

	yAxis: {
		title: {
			text: 'Andel som har brukt ulike medier en gjennomsnittsdag'
		}
	},

	xAxis: {
		accessibility: {
			rangeDescription: 'Range: 2010 to 2019'
		}
	},

	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle'
	},

	plotOptions: {
		series: {
			label: {
				connectorAllowed: false
			},
		}
	},

	series: [
		{
			name: "Papiravis", data: [84, 77, 30, 27]
		},
		{
			name: "Fjernsyn", data: [81, 82, 60, 48]
		},
		{
			name: "Radio", data: [71, 57, 50, 48]
		},
		{
			name: "Lydmedier", data: [43, 50, 51, 55]
		},
		{
			name: "Ukeblad", data: [21, 17, 5, 4]
		},
		{
			name: "Bøker", data: [24, 20, 24, 25]
		},
		{
			name: "Tidsskrift", data: [18, 14, 6, 7]
		},
		{
			name: "Tegneserieblad", data: [11, 9, 3, 3]
		},
		{
			name: "Serier/ film / video", data: [10, 10, 37, 43]
		},
		{
			name: "Internett", data: [0, 27, 91, 90]
		}],

	responsive: {
		rules: [{
			condition: {
				maxWidth: 500
			},
			chartOptions: {
				legend: {
					layout: 'horizontal',
					align: 'center',
					verticalAlign: 'bottom'
				}
			}
		}]
	}

});
