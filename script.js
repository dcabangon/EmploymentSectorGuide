
// GET SCREEN HEIGHT & WIDTH
const w = window.innerWidth;
const h = window.innerHeight;

let chartHeight = '600px';
let chartWidth = '700px';

if (w <= 900) {
    chartHeight = (h - 20) + 'px';
    chartWidth = (w - 20) + 'px';
}

async function loadData() {
    const response = await axios.get('data/db.json');
    return response.data.Level3;
}
loadData();



// GOODS CHART GROUP
const manconOptions = {
    chart: {
        id: 'manconChart',
        type: 'line',
        height: chartHeight,
        width: chartWidth,
        group: 'goods-chart',
    },

    theme: {
        monochrome: {
            enabled: true,
            color: '#0071BC',
            shadeTo: 'light',
            shadeIntensity: 0.65
        }
    },

    series: [],
    noData: {
        "text": "Loading..."
    }
}

const othersOptions = {
    chart: {
        id: 'othersChart',
        type: 'area',
        height: chartHeight,
        width: chartWidth,
        group: 'goods-chart'
    },
    theme: {
        monochrome: {
            enabled: true,
            color: '#0071BC',
            shadeTo: 'light',
            shadeIntensity: 0.65
        }
    },

    series: [
    ],
    noData: {
        "text": "Loading..."
    }
}

// SERVICES CHART GROUP
const wholesaleothersOptions = {
    chart: {
        id: 'wholesaleChart',
        type: 'line',
        height: chartHeight,
        width: chartWidth,
        group: 'services-chart'
    },
    theme: {
        monochrome: {
            enabled: true,
            color: '#0071BC',
            shadeTo: 'light',
            shadeIntensity: 0.65
        }
    },
    series: [
    ],
    noData: {
        "text": "Loading..."
    }
}

const accomodationOptions = {
    chart: {
        id: 'accomodationChart',
        type: 'area',
        height: chartHeight,
        width: chartWidth,
        group: 'services-chart'
    },
    theme: {
        monochrome: {
            enabled: true,
            color: '#0071BC',
            shadeTo: 'light',
            shadeIntensity: 0.65
        }
    },
    series: [
    ],
    noData: {
        "text": "Loading..."
    }
}

// CREATE CHART - GOODS PRODUCING
const manconChart = new ApexCharts(document.querySelector('#manconChart'), manconOptions);
const othersChart = new ApexCharts(document.querySelector('#othersChart'), othersOptions);

// CREATE CHART - SERVICES PRODUCING
const wholesaleothersChart = new ApexCharts(document.querySelector('#wholesaleothersChart'), wholesaleothersOptions);
const accomodationChart = new ApexCharts(document.querySelector('#accomodationChart'), accomodationOptions);


// RENDER CHART - GOODS PRODUCING
manconChart.render()
othersChart.render()

// RENDER CHART - SERVICES PRODUCING
wholesaleothersChart.render()
accomodationChart.render()



// LOAD DATA - GOODS PRODUCING
window.addEventListener('DOMContentLoaded', async () => {
    filterGoods();
})


// LOAD DATA - SERVICES PRODUCING
window.addEventListener('DOMContentLoaded', async () => {
    filterServices();
})


// GOODS CHART FILTER
async function filterGoods() {
    let series = await loadData();
    let manufacturingArray = [];
    let constructionArray = [];
    let othersArray = [];

    const selectedYear = document.querySelector('#yearSpan').value.split('-');

    series.map(data => {
        if (data.year >= parseInt(selectedYear[0]) && data.year <= parseInt(selectedYear[1]) && data.level_3 == "Manufacturing") {
            manufacturingArray.push({
                x: data.year,
                y: isNaN(data.value) ? 0 : data.value
            })
        }

        if (data.year >= parseInt(selectedYear[0]) && data.year <= parseInt(selectedYear[1]) && data.level_3 == "Construction") {
            constructionArray.push({
                x: data.year,
                y: isNaN(data.value) ? 0 : data.value
            })
        }

        if (data.year >= parseInt(selectedYear[0]) && data.year <= parseInt(selectedYear[1]) && data.level_3 == "Others") {
            othersArray.push({
                x: data.year,
                y: isNaN(data.value) ? 0 : data.value
            })
        }
    })

    // GOODS PRODUCING CHARTS
    manconChart.updateSeries([
        {
            'name': 'Manufacturing',
            'data': manufacturingArray,
        },
        {
            'name': 'Construction',
            'data': constructionArray,
        }
    ])

    othersChart.updateSeries([
        {
            'name': 'Others',
            'data': othersArray,
        }
    ])
}

// SERVICES CHART FILTER
async function filterServices() {
    let series = await loadData();
    let wholesaleArray = [];
    let transportationArray = [];
    let accomodationArray = [];
    let informationArray = [];
    let financialArray = [];
    let realestateArray = [];
    let otherservicesArray = [];

    const selectedYear = document.querySelector('#yearSpan').value.split('-');

    series.map(data => {
        if (data.year >= parseInt(selectedYear[0]) && data.year <= parseInt(selectedYear[1]) && data.level_3 == "Wholesale & Retail Trade") {
            wholesaleArray.push({
                x: data.year,
                y: isNaN(data.value) ? 0 : data.value
            })
        }

        if (data.year >= parseInt(selectedYear[0]) && data.year <= parseInt(selectedYear[1]) && data.level_3 == "Transportation & Storage") {
            transportationArray.push({
                x: data.year,
                y: isNaN(data.value) ? 0 : data.value
            })
        }

        if (data.year >= parseInt(selectedYear[0]) && data.year <= parseInt(selectedYear[1]) && data.level_3 == "Accommodation & Food Services") {
            accomodationArray.push({
                x: data.year,
                y: isNaN(data.value) ? 0 : data.value
            })
        }

        if (data.year >= parseInt(selectedYear[0]) && data.year <= parseInt(selectedYear[1]) && data.level_3 == "Information & Communications") {
            informationArray.push({
                x: data.year,
                y: isNaN(data.value) ? 0 : data.value
            })
        }

        if (data.year >= parseInt(selectedYear[0]) && data.year <= parseInt(selectedYear[1]) && data.level_3 == "Financial & Insurance Services") {
            financialArray.push({
                x: data.year,
                y: isNaN(data.value) ? 0 : data.value
            })
        }

        if (data.year >= parseInt(selectedYear[0]) && data.year <= parseInt(selectedYear[1]) && data.level_3 == "Real Estate, Professional Services And Administrative & Support Services") {
            realestateArray.push({
                x: data.year,
                y: isNaN(data.value) ? 0 : data.value
            })
        }

        if (data.year >= parseInt(selectedYear[0]) && data.year <= parseInt(selectedYear[1]) && data.level_3 == "Other Services Industries") {
            otherservicesArray.push({
                x: data.year,
                y: isNaN(data.value) ? 0 : data.value
            })
        }
    })

    // SERVICE PRODUCING CHARTS
    wholesaleothersChart.updateSeries([
        {
            'name': 'Wholesale & Retail Trade',
            'data': wholesaleArray,
        },
        {
            'name': 'Transportation & Storage',
            'data': transportationArray,
        },
        {
            'name': 'Information & Communications',
            'data': informationArray,
        },
        {
            'name': 'Financial & Insurance Services',
            'data': financialArray,
        },
        {
            'name': 'Real Estate, Professional Services And Administrative & Support Services',
            'data': realestateArray,
        },
        {
            'name': 'Other Services Industries',
            'data': otherservicesArray,
        },
    ])

    accomodationChart.updateSeries([
        {
            'name': 'Accommodation & Food Services',
            'data': accomodationArray,
        }
    ])
}
