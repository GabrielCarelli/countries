export interface Country{
    name:{
        common:string;
        oficial: string;
    };
    flags:{
        png: string;
        svg: string;
    };
    population: number;
    region: string;
    capital?:string[];
    cca2: string;
}

const BASE_URL = "https://restcountries.com/v3.1";

export const  getAllCountries = async(): Promise<Country[]> =>{
    try{
       const response = await fetch(`${BASE_URL}/all?fields=name,flags,population,region,capital,cca2`) 
        if(!response.ok){
            throw new Error("Erro ao buscar os países");
        }
        return await response.json();
    } catch(error){
        console.error("Erro ao buscar países", error);
        return[];
    }
};

export const getCountryByName = async(name: string): Promise <Country | null> =>{
    try{
        const response = await fetch(`${BASE_URL}/name/${name}?fullText=true&fields=name,flags,population,region,capital,cca2`)
        if(!response.ok){
            throw new Error("País não encontrado");
        }
        const data = await response.json();
        return data[0] ?? null;
    }catch(error){
        console.error(`Erro ao buscar pais ${name}: `, error);
        return null;
    }
}