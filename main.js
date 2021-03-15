var chartliexample0 = echarts.init(document.getElementById('deneme'));

option = {
    title: {
        
        text: 'CORONA VIRUS TAPLOSU'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['TURKIYE', 'ALMANYA', 'FRANSA', 'INGILTERE']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1.Gun', '2.Gun', '3.Gun', '4.Gun', '5.Gun', '6.Gun', '7.Gun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Turkiye',
            type: 'line',
            stack: 'aaaa',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Almanya',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Fransa',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'Ingiltere',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        }
        
    ]
};
chartliexample0.setOption(option);

