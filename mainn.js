var myChart = echarts.init(document.getElementById('deneme'));

myChart.showLoading();

$.get("/turkey.json", function (turkeyJson) {
    myChart.hideLoading();

    echarts.registerMap('turkey', turkeyJson, {
        
        
    });
    option = {
        title: {
            text: '15-20 Mart Arası Covit19 Risk Haritası',
            subtext: 'Data from www.https://covid19.saglik.gov.tr/   Hazırlayan: Yalçın ŞİMŞEK ',
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
                    {name: 'Adana', value: 61.58},
                    {name: 'Adıyaman', value: 169.81},
                    {name: 'Afyonkarahisar', value: 47.36},
                    {name: 'Ağrı', value: 41.46},
                    {name: 'Amasya', value: 194.04},
                    {name: 'Ankara', value: 107.99},
                    {name: 'Antalya', value: 119.18},
                    {name: 'Artvin', value: 113.86},
                    {name: 'Aydın', value: 69.07},
                    {name: 'Balıkesir', value: 288.16},
                    {name: 'Bilecik', value: 114.30},
                    {name: 'Bingöl', value: 47.56},
                    {name: 'Bitlis', value: 23.08},
                    {name: 'Bolu', value: 100.38},
                    {name: 'Burdur', value: 72.26},
                    {name: 'Bursa', value: 97.14},
                    {name: 'Çanakkale', value: 202.75},
                    {name: 'Çankırı', value: 122.64},
                    {name: 'Çorum', value: 138.65, label: {
                        rich: {
                            start1: {
                                backgroundColor: {
                                    image:"image/3.png"},
                                width: 35,
                                height: 30,
                                align: 'right' }},
                        formatter: function(value) { return '{start1|} Çorum';
                        }}},
                    {name: 'Denizli', value: 49.38},
                    {name: 'Diyarbakır', value: 18.78},
                    {name: 'Edirne', value: 219.49},
                    {name: 'Elazığ', value: 80.11},
                    {name: 'Erzincan', value: 124.13},
                    {name: 'Erzurum', value: 472.40},
                    {name: 'Eskişehir', value: 116.56},
                    {name: 'Gaziantep', value: 87.33},
                    {name: 'Giresun', value: 356.35},
                    {name: 'Gümüşhane', value: 105.15},
                    {name: 'Hakkari', value: 15.69},
                    {name: 'Hatay', value: 61.77},
                    {name: 'Isparta', value: 74.49},
                    {name: 'Mersin', value: 80.70},
                    {name: 'İstanbul', value: 251.12},
                    {name: 'İzmir', value: 111.41},
                    {name: 'Kars', value: 30.53},
                    {name: 'Kastamonu', value: 197.41},
                    {name: 'Kayseri', value: 196.07},
                    {name: 'Kırklareli', value: 155.09},
                    {name: 'Kırşehir', value: 61.31},
                    {name: 'Kocaeli', value: 176.39},
                    {name: 'Konya', value: 252.18},
                    {name: 'Kütahya', value: 111.33},
                    {name: 'Malatya', value: 140.54},
                    {name: 'Manisa', value: 64.66},
                    {name: 'Kahramanmaraş', value: 67.37},
                    {name: 'Mardin', value: 17.08},
                    {name: 'Muğla', value: 92.33},
                    {name: 'Muş', value: 21.16},
                    {name: 'Nevşehir', value: 79.35},
                    {name: 'Niğde', value: 104.40},
                    {name: 'Ordu', value: 258.87},
                    {name: 'Rize', value: 202.41},
                    {name: 'Sakarya', value: 124.49},
                    {name: 'Samsun', value: 508.97},
                    {name: 'Siirt', value: 14.20},
                    {name: 'Sinop', value: 309.06},
                    {name: 'Sivas', value: 55.83},
                    {name: 'Tekirdağ', value: 168.26},
                    {name: 'Tokat', value: 248.72},
                    {name: 'Trabzon', value: 246.95},
                    {name: 'Tunceli', value: 63.52},
                    {name: 'Şanlıurfa', value: 18.30},
                    {name: 'Uşak', value: 19.49},
                    {name: 'Van', value: 27.41},
                    {name: 'Yozgat', value: 92.82},
                    {name: 'Zonguldak', value: 81.02},
                    {name: 'Aksaray', value: 214.42},
                    {name: 'Bayburt', value: 74.47},
                    {name: 'Karaman', value: 89.44},
                    {name: 'Kırıkkale', value: 73.91},
                    {name: 'Batman', value: 28.54},
                    {name: 'Şırnak', value: 8.18},
                    {name: 'Bartın', value: 76.89},
                    {name: 'Ardahan', value: 86.31},
                    {name: 'Iğdır', value: 107.30},
                    {name: 'Yalova', value: 275.31},
                    {name: 'Karabük', value: 84.15},
                    {name: 'Kilis', value: 258.42},
                    {name: 'Osmaniye', value: 198.52},
                    {name: 'Düzce', value: 95.28}
                    
                ]
            }
        ]
    };

    myChart.setOption(option);
});
//chartliexample0.setOption(option);
