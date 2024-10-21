// import { Accordion } from "flowbite-react";
import { Accordion } from '@mantine/core';

interface CountryProps {
    countryInfo: any;
    countryData: any;
    nutritionData: any;
}

export const CountryInfoComponent : React.FC<CountryProps> = ({countryInfo, countryData, nutritionData}) => {
    return (<>
    {countryInfo && countryData && (
        <div className="absolute top-16 left-3 z-[1000] bg-white w-72 max-w-72">
        <Accordion>
            <Accordion.Item key="Food-Security" value='Food Security' >
                <Accordion.Control>Food Security</Accordion.Control>
                <Accordion.Panel className='bg-white dark:bg-gray-800'>
                    {countryData?.population &&
                    (<div className="flex">
                        <img src="https://static.hungermapdata.org/hungermap/img/country_population.png" className="w-6 h-6" alt=""/>
                        <div className="px-2">
                            <h5 className="text-sm font-thin text-black dark:text-white">Population</h5>
                            <p className="text-lg font-semibold text-black dark:text-white">{countryData?.population?.toFixed(1)} M</p>
                        </div>                        
                    </div>)
                    }
                    {countryData?.fcs &&
                    (<div className="flex">
                        <img src="https://static.hungermapdata.org/hungermap/img/country_fcs.png" className="w-6 h-6" alt=""/>
                        <div className="px-2">
                            <h5 className="text-sm font-thin text-black dark:text-white">People with insufficient food consumption</h5>
                            <p className="text-lg font-semibold text-black dark:text-white">{countryData?.fcs?.toFixed(1)} M</p>
                        </div>                        
                    </div>)
                    }
                </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item key="Nutrition" value='Nutrition'>
                <Accordion.Control>Nutrition</Accordion.Control>
                <Accordion.Panel className='bg-white dark:bg-gray-800'>
                {nutritionData?.nutrition &&
                    (<><div className="flex">
                        <img src="https://static.hungermapdata.org/hungermap/img/country_acute_malnutrition.png" className="w-6 h-6" alt=""/>
                        <div className="px-2">
                            <h5 className="text-sm font-thin text-black dark:text-white">Acute Malnutrition</h5>
                            {nutritionData?.nutrition.wasting ? 
                                <p className="text-lg font-semibold text-black dark:text-white">{nutritionData?.nutrition.wasting?.toFixed(1)} %</p>
                            : <p className="text-lg font-semibold text-black dark:text-white">No Data</p>} 
                        </div>                        
                    </div>
                    <div className="flex">
                        <img src="https://static.hungermapdata.org/hungermap/img/country_acute_malnutrition.png" className="w-6 h-6" alt=""/>
                        <div className="px-2">
                            <h5 className="text-sm font-thin text-black dark:text-white">Chronic Malnutrition</h5>
                            {nutritionData?.nutrition.stunting ? 
                                <p className="text-lg font-semibold text-black dark:text-white">{nutritionData?.nutrition.stunting?.toFixed(1)} %</p>
                            : <p className="text-lg font-semibold text-black dark:text-white">No Data</p>} 
                        </div>                        
                    </div>
                </>)
                }
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    </div>)    
}</>);
}