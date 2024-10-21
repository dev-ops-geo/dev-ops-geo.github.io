import { useCallback, useState } from "react";
import axios from "axios";
import { CountryInfoComponent } from "../components/CountryInfo";
import MapComponent from "../components/Map/Map";
import Navbar from "../components/Navbar";
export const HomePage = () => {
    const [countryInfo, setCountryInfo] = useState();
    const [countryData, setCountryData] =  useState();
    const [nutritionData, setNutritionData] = useState();


    const countryClickCallback = useCallback((info: any) => {
        setCountryInfo(info);
        axios
          .get(`https://api.hungermapdata.org/v2/adm0/${info.adm0_id}/countryData.json`)
          .then(function (res) {
            setCountryData(res.data);
          })
          .catch((err) => console.log(err));

        axios
          .get(`https://api.hungermapdata.org/v2/iso3/${info.iso3}/countryIso3Data.json`)
          .then(function (res) {
            setNutritionData(res.data);
          })
          .catch((err) => console.log(err));

      }, []);

    return (
    <>
    <Navbar/>
    <MapComponent initialLatitude={0.0} initialLongitude={0.0} zoom={2} updateCountryInfo={countryClickCallback}/>
    <CountryInfoComponent countryInfo={countryInfo} countryData={countryData} nutritionData={nutritionData}></CountryInfoComponent>
    </>
    )
}