export const fetchCountry = (id: number) => {
    return { type: "FETCH_COUNTRY", payload: id };
};
  
export const fetchRegion = (id: number) => {
    return { type: "FETCH_REGION", payload: id };
};