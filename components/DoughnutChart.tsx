'use client'
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJs,ArcElement,Tooltip,Legend} from 'chart.js'
ChartJs.register(ArcElement,Tooltip,Legend);
const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        datasets:[{
            label:'banks',
            data:[1250,2500,3300],
            backgroundColor:['#0747b6','#2265d8','#2f91fa']
        }],
        labels:['bank1','bank2','bank3']
    }
  return <Doughnut data={data} 
  options={{
    cutout:'60%',
    plugins:{
        legend:{
            display:false
        }
    }

  }}/>
    
  
}

export default DoughnutChart