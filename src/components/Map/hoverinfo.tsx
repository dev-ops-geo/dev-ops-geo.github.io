import { Title, Text } from "@mantine/core";
import { LineChart } from '@mantine/charts';
interface ChildProps {
    hoverInfo: any;
}
export const HoverInfo: React.FC<ChildProps> = ({hoverInfo}) => {
    let fcs = hoverInfo?.feature.properties?.fcs;
    if (fcs) fcs = JSON.parse(fcs)
    let rcsi = hoverInfo?.feature.properties?.rcsi;
    if (rcsi) rcsi = JSON.parse(rcsi)
    let fcsGraph = hoverInfo?.feature.properties?.fcsGraph;

    if (fcsGraph) fcsGraph = JSON.parse(fcsGraph)
    console.log(fcsGraph);

    return (
        <div>
        {
            hoverInfo?.feature.properties.dataType && hoverInfo.feature.layer.id == "admin-source" && (
            <div className="absolute tooltip z-50 max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{left: hoverInfo.x, top: hoverInfo.y}}>
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{hoverInfo.feature.properties.adm0_name}</h5>
                <div className="mb-1 font-normal text-gray-700 dark:text-gray-400">Population: {hoverInfo.feature.properties.fcs_people_total}</div>
                <div className="mb-1 font-normal text-gray-700 dark:text-gray-400">Income Level: {hoverInfo.feature.properties.incomeLevel}</div>
            </div>
            )
        }
        {
            hoverInfo.feature.layer.id == "admin1-source" && (
                <div className="absolute tooltip z-50 max-w-sm p-3 bg-gray-600 text-white" style={{left: hoverInfo.x, top: hoverInfo.y}}>
                    <Title order={5}>{hoverInfo.feature.properties.Name}</Title>
                    <Text size="sm" span c="white"><Text span c="orange" inherit>{fcs.ratio}% </Text> with insufficient food consumption</Text>
                    <Title></Title>
                    <Text size="sm" span c="white"><Text span c="orange" inherit>{rcsi.ratio}% </Text> with crisis or above crisis food-based coping</Text>
                    {fcsGraph &&
                        <LineChart
                            h={150}
                            m={10}
                            data={fcsGraph}
                            dataKey="x"
                            series={[
                                { name: 'fcs', color: 'orange.6' },
                            ]}
                            curveType="monotone"
                            valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
                            xAxisProps={{ tickCount: 2 }}
                            yAxisProps={{fontSize: 8, padding: {top: 20}, domain: [Math.min(...fcsGraph.map( (item: any) => item.fcs)), Math.max(...fcsGraph.map( (item: any) => item.fcs))]}}
                            withDots={false}
                            />
                    }
                </div>
            )
        }
        </div>
    )
}