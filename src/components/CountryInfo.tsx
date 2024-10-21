import { Accordion, Text, Title } from '@mantine/core';
import { LineChart } from '@mantine/charts';

interface CountryProps {
    countryInfo: any;
    countryData: any;
    nutritionData: any;
}

export const CountryInfoComponent : React.FC<CountryProps> = ({countryInfo, countryData, nutritionData}) => {
    return (<>
    {countryInfo && countryData && (
        <div className="absolute mb-20 bottom-7 md:mb-3 left-2 z-[1000] bg-white w-72 max-w-72">
            <Title order={4} ml={15} mt={5}>{countryInfo.adm0_name}</Title>
            <Accordion multiple={false} defaultValue="food-security">
                <Accordion.Item key="food-ecurity" value='food-security' >
                    <Accordion.Control>Food Security</Accordion.Control>
                    <Accordion.Panel className='bg-gray-800'>
                        {countryData?.population &&
                        (<div className="flex">
                            <img src="https://static.hungermapdata.org/hungermap/img/country_population.png" className="w-6 h-6" alt=""/>
                            <div className="px-2">
                                <h5 className="text-sm font-thin text-white">Population</h5>
                                <p className="text-lg font-semibold text-white">{countryData?.population?.toFixed(1)} M</p>
                            </div>                        
                        </div>)
                        }
                        {countryData?.fcs &&
                        (<div className="flex">
                            <img src="https://static.hungermapdata.org/hungermap/img/country_fcs.png" className="w-6 h-6" alt=""/>
                            <div className="px-2">
                                <h5 className="text-sm font-thin text-white">People with insufficient food consumption</h5>
                                <p className="text-lg font-semibold text-white">{countryData?.fcs?.toFixed(1)} M</p>
                            </div>                        
                        </div>)
                        }
                        {!countryData?.fcs && !countryData?.population && <Text c="white">No  data</Text>}
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item key="nutrition" value='Nutrition'>
                    <Accordion.Control>Nutrition</Accordion.Control>
                    <Accordion.Panel className='bg-gray-800'>
                    {nutritionData?.nutrition &&
                        (<><div className="flex">
                            <img src="https://static.hungermapdata.org/hungermap/img/country_acute_malnutrition.png" className="w-6 h-6" alt=""/>
                            <div className="px-2">
                                <h5 className="text-sm font-thin text-white">Acute Malnutrition</h5>
                                {nutritionData?.nutrition.wasting ? 
                                    <p className="text-lg font-semibold text-white">{nutritionData?.nutrition.wasting?.toFixed(1)} %</p>
                                : <p className="text-lg font-semibold text-white">No Data</p>} 
                            </div>                        
                        </div>
                        <div className="flex">
                            <img src="https://static.hungermapdata.org/hungermap/img/country_acute_malnutrition.png" className="w-6 h-6" alt=""/>
                            <div className="px-2">
                                <h5 className="text-sm font-thin text-white">Chronic Malnutrition</h5>
                                {nutritionData?.nutrition.stunting ? 
                                    <p className="text-lg font-semibold text-white">{nutritionData?.nutrition.stunting?.toFixed(1)} %</p>
                                : <p className="text-lg font-semibold text-white">No Data</p>} 
                            </div>                        
                        </div>
                    </>)
                    }
                    {!nutritionData?.nutrition && <Text c="white">No  data</Text>}
                    </Accordion.Panel>
                </Accordion.Item>
                { countryData.fcsGraph &&
                    <Accordion.Item key="trends" value='trends'>
                        <Accordion.Control>Food Security Trends</Accordion.Control>
                        <Accordion.Panel className='bg-gray-800 text-white'>
                        <Text c="white" size='sm'>Trend of the number of people with insufficient food consumption</Text>
                        <LineChart
                            h={150}
                            m={10}                        
                            data={countryData.fcsGraph}
                            dataKey="x"
                            series={[
                                { name: 'fcs', color: 'orange.6' },
                            ]}
                            curveType="monotone"
                            valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
                            xAxisProps={{ tickCount: 2, fontSize: 8 }}
                            yAxisProps={{fontSize: 8, padding: {top: 20}, domain:  [Math.min(...countryData.fcsGraph?.map( (item: any) => item.fcs)), Math.max(...countryData.fcsGraph?.map( (item: any) => item.fcs))]}}
                            withDots={false}
                            gridAxis="none"
                            />
                        </Accordion.Panel>
                    </Accordion.Item>
                }
            </Accordion>
        </div>
    )    
}</>);
}