import { Radio, Label } from 'flowbite-react';
import { useState } from 'react';


interface ChildProps {
    updateSource: (newValue: string) => void;
}

export const BaseMapComponent: React.FC<ChildProps> = ({updateSource}) => {
    const [source, setSource] = useState("mapbox://styles/mapbox/dark-v9");

    const changeBaseMap = (event: any) => {
        setSource(event.currentTarget.value);
        updateSource(event.currentTarget.value);
    }    

    return (
        <div className="w-78 text-sm text-gray-500 dark:text-gray-400 z-[100]">
            <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">Base Maps</h3>
            </div>
            <div className="px-3 py-2">
                <ul className="grid w-full gap-6 md:grid-cols-3">                    
                    <li>
                        <Radio id="source-dark" name="source" value="mapbox://styles/mapbox/dark-v9" className="hidden peer" defaultChecked={source == "mapbox://styles/mapbox/dark-v9"} onChange={changeBaseMap}/>
                        <Label htmlFor="source-dark" className="source-dark inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full mt-5 px-3" id="dark-size">Dark</div>
                            </div>
                        </Label>                        
                    </li>
                    <li>
                        <Radio id="source-light" name="source" value="mapbox://styles/mapbox/light-v9" className="hidden peer" defaultChecked={source == "mapbox://styles/mapbox/light-v9"} onChange={changeBaseMap}/>
                        <Label htmlFor="source-light" className="source-light inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full mt-5 px-3" id="light-size">Light</div>
                            </div>
                        </Label>                        
                    </li>
                    <li>
                        <Radio id="source-osm" name="source" value="mapbox://styles/mapbox/streets-v9" className="hidden peer" defaultChecked={source == "mapbox://styles/mapbox/streets-v9"} onChange={changeBaseMap}/>
                        <Label htmlFor="source-osm" className="source-osm inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full mt-5 px-3" id="osm-size">OSM</div>
                            </div>
                        </Label>
                  </li>
                </ul>
            </div>
        </div>
    )
}