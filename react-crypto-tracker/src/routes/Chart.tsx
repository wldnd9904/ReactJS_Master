import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";
import ApexChart from "react-apexcharts";

interface IHistory{
close: number;
high: string;
low: string;
market_cap: number;
open: string;
time_close:number;
time_open: number;
volume: string;
}

interface ChartProps {
  coinId: string;
}

function Chart({coinId}: ChartProps) {
  const {isLoading, data} = useQuery<IHistory[]>(["ohlcv", coinId], ()=>fetchCoinHistory(coinId));
    return (<div>{isLoading? (
      "Loading chart..."
      ) : (
      <ApexChart 
    type="line" 
    series={[
      {
        name: "Price",
        data: data?.map ? data.map(price=>price.close)as number[]: [],
      } 
    ]}
    options={{
      theme:{
        mode:"dark",
      },
      yaxis:{
        show:false,
      },
      xaxis:{
        labels:{
          show:false,
        },
        axisTicks:{
          show:false,
        },
        axisBorder:{
          show:false,
        },
        categories:data?.map ? data.map((price)=>new Date(price.time_close*1000).toUTCString()): [],
      },
      chart:{
        height:300, 
        width:500,
        toolbar:{
          show:false,
        },
        background:"transparent",
      },
        stroke:{
          width:3, 
        },
        fill:{
          type:"gradient",
          gradient:{
            gradientToColors: ["blue"],
            stops: [0,100],
          },
        },
        colors:["red"],
        tooltip:{
          y:{
            formatter: (value) => `$${value.toFixed(3)}`
          },
        }

      }}
       />
       )}
    </div>);
  }
 
  export default Chart;