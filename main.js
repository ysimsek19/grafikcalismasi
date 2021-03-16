var myChart = echarts.init(document.getElementById('deneme'));

myChart.showLoading();

$.get("/turkey.json", function (turkeyJson) {
    myChart.hideLoading();

    echarts.registerMap('turkey', turkeyJson, {
        
        
    });
    option = {
        title: {
            text: '2-15 Mart Arası Corona verileri',
            subtext: 'Data from www.https://covid19.saglik.gov.tr/',
            sublink: 'https://saglik.gov.tr/',
            left: 'right'
        },
        tooltip: { //popap ayarı
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                return params.seriesName + '<br/>' + params.name + ': ' + value;
            }
        },
        visualMap: {
            type: 'piecewise',
            left: 'right',
            pieces: [
                {
                    min: 100,
                    color: 'red',
                    
                },
                {
                    min: 36,
                    max: 100,
                    color: 'orange'
                },
                {
                    min: 11,
                    max: 35,
                    color: 'yellow'
                },
                {
                    min: 0,
                    max: 10,
                    color: 'blue'
                }
            ],
            
            
            
        },        
        toolbox: {
            show: true,
            //orient: 'vertical',
            left: 'left',
            top: 'top',
            feature: {
                dataView: {readOnly: true},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '100000% İl de görülen corona sayısı',
                type: 'map',
                roam: false,
                map: 'turkey',
                
                    label: {
                        show: true,
                        fontStyle:'italic',
                        fontWeight:'bold'
                    },
                    
               
                
                data:[
                    {name: 'Adana', value: 63},
                    {name: 'Adıyaman', value: 154.63},
                    {name: 'Afyonkarahisar', value: 47.5},
                    {name: 'Ağrı', value: 22.22},
                    {name: 'Amasya', value: 163.64},
                    {name: 'Ankara', value: 68.53},
                    {name: 'Antalya', value: 95.16},
                    {name: 'Artvin', value: 100.88},
                    {name: 'Aydın', value: 58.71},
                    {name: 'Balıkesir', value: 257.60},
                    {name: 'Bilecik', value: 81.38},
                    {name: 'Bingöl', value: 25.20},
                    {name: 'Bitlis', value: 15.95},
                    {name: 'Bolu', value: 65.76},
                    {name: 'Burdur', value: 86.49},
                    {name: 'Bursa', value: 78.47},
                    {name: 'Çanakkale', value: 149.76},
                    {name: 'Çankırı', value: 47.29},
                    {name: 'Çorum', value: 73.19, label: {
                        rich: {
                            start1: {
                                backgroundColor: {
                                    image:"image/3.png"},
                                width: 35,
                                height: 30,
                                align: 'right' }},
                        formatter: function(value) { return '{start1|} Çorum';
                        }}},
                    {name: 'Denizli', value: 41.50},
                    {name: 'Diyarbakır', value: 17.83},
                    {name: 'Edirne', value: 200.36},
                    {name: 'Elazığ', value: 29.59},
                    {name: 'Erzincan', value: 53.75},
                    {name: 'Erzurum', value: 45.63},
                    {name: 'Eskişehir', value: 74.59},
                    {name: 'Gaziantep', value: 67.44},
                    {name: 'Giresun', value: 296.84},
                    {name: 'Gümüşhane', value: 137.61},
                    {name: 'Hakkari', value: 7.84},
                    {name: 'Hatay', value: 69.43},
                    {name: 'Isparta', value: 61.09},
                    {name: 'Mersin', value: 96.16},
                    {name: 'İstanbul', value: 178.25},
                    {name: 'İzmir', value: 78.57},
                    {name: 'Kars', value: 24.92},
                    {name: 'Kastamonu', value: 118.23},
                    {name: 'Kayseri', value: 142.95},
                    {name: 'Kırklareli', value: 137.12},
                    {name: 'Kırşehir', value: 47.73},
                    {name: 'Kocaeli', value: 138.39},
                    {name: 'Konya', value: 203.91},
                    {name: 'Kütahya', value: 85.14},
                    {name: 'Malatya', value: 92.66},
                    {name: 'Manisa', value: 50.12},
                    {name: 'Kahramanmaraş', value: 56.50},
                    {name: 'Mardin', value: 17.32},
                    {name: 'Muğla', value: 80.24},
                    {name: 'Muş', value: 27.24},
                    {name: 'Nevşehir', value: 64.60},
                    {name: 'Niğde', value: 89.21},
                    {name: 'Ordu', value: 248.62},
                    {name: 'Rize', value: 188.18},
                    {name: 'Sakarya', value: 90.15},
                    {name: 'Samsun', value: 458.62},
                    {name: 'Siirt', value: 2.11},
                    {name: 'Sinop', value: 345.56},
                    {name: 'Sivas', value: 43.88},
                    {name: 'Tekirdağ', value: 121.64},
                    {name: 'Tokat', value: 243.53},
                    {name: 'Trabzon', value: 222.32},
                    {name: 'Tunceli', value: 53.93},
                    {name: 'Şanlıurfa', value: 15.41},
                    {name: 'Uşak', value: 19.22},
                    {name: 'Van', value: 20.36},
                    {name: 'Yozgat', value: 46.05},
                    {name: 'Zonguldak', value: 75.44},
                    {name: 'Aksaray', value: 173.52},
                    {name: 'Bayburt', value: 51.28},
                    {name: 'Karaman', value: 56.88},
                    {name: 'Kırıkkale', value: 88.27},
                    {name: 'Batman', value: 15.64},
                    {name: 'Şırnak', value: 4.46},
                    {name: 'Bartın', value: 62.82},
                    {name: 'Ardahan', value: 73.83},
                    {name: 'Iğdır', value: 80.97},
                    {name: 'Yalova', value: 200.33},
                    {name: 'Karabük', value: 47.21},
                    {name: 'Kilis', value: 255.62},
                    {name: 'Osmaniye', value: 198.89},
                    {name: 'Düzce', value: 81.63}
                    
                ]
            }
        ]
    };

    myChart.setOption(option);
});
//chartliexample0.setOption(option);
