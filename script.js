
let myChart = document.getElementById('myChart').getContext('2d');

// Global Options

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';



let massPopChart = new Chart(myChart, {
    type: 'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
        labels:['Bucuresti', 'Iasi', 'Timisoara', 'Cluj-Napoca', 'Constanta', 'Craiova'],
        datasets:[{
            label:'Population',
            data:[
                2150000,
                380000,
                335000,
                330000,
                320000,
                310000
            ],
            // backgroundColor:'green'
            backgroundColor: [
                '#12CBC4',
                '#1289A7',
                '#0652DD',
                '#1B1464',
                '#9980FA',
                '#5758BB'

            ],
            borderWidth:2,
            borderColor: '#777',
            hoverBorderWidth:3,
            hoverBorderColor: '#000',
            
           
        }]
        
    },
    

    options:{
        title:{
            display:true,
            text:'Largest Cities in Romania',
            fontSize: 25,  // we can increase font size or other style and override the global attribute
            fontColor: '#000',
        
        },
        
        legend:{
           // display: false, // to remove legend
            position: 'right', // default is top middle
            
            labels:{
                fontColor: '#5758BB'
            }
        },
        layout:{
            padding:{
                left: 30,
                right: 0,
                bottom: 0,
                top: 0,
            },

            // margins: {
            //     top: 50,
            //     left: 0,
            //     right: 0,
            //     bottom: 0,
            // },   
        },

        tooltips:{
            enabled: true // to see details when hovering
        }
    }
});


// SECOND CHART

let myOtherChart = document.getElementById('myOtherChart').getContext('2d');

let massOtherChart = new Chart(myOtherChart, {
    type: 'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
        labels:['Bucuresti', 'Iasi', 'Timisoara', 'Cluj-Napoca', 'Constanta', 'Craiova'],
        datasets:[{
            label:'Population',
            data:[
                2150000,
                380000,
                335000,
                330000,
                320000,
                310000
            ],
            // backgroundColor:'green'
            backgroundColor: [
                '#12CBC4',
                '#1289A7',
                '#0652DD',
                '#1B1464',
                '#9980FA',
                '#5758BB'

            ],
            borderWidth:2,
            borderColor: '#777',
            hoverBorderWidth:3,
            hoverBorderColor: '#000',
           
        }]
        
    },
    

    options:{
        title:{
            display:true,
            text:'Largest Cities in Romania',
            fontSize: 25,  // we can increase font size or other style and override the global attribute
            fontColor: '#000'
        },
        
        legend:{
           // display: false, // to remove legend
            position: 'right', // default is top middle
            
            labels:{
                fontColor: '#5758BB'
            }
        },
        layout:{
            padding:{
                left: 30,
                right: 0,
                bottom: 0,
                top: 0,
            },

            // margins: {
            //     top: 50,
            //     left: 0,
            //     right: 0,
            //     bottom: 0,
            // },   
        },

        tooltips:{
            enabled: true // to see details when hovering
        }
    }
});