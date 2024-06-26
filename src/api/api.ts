import axios, { AxiosInstance } from "axios";
import CountriesAPI from "./countries.api";

const BASE_URL = import.meta.env.VITE_COUNTRY_URL;

class API {
  private axios: AxiosInstance;

  public countries;

  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL,
    });
    this.countries = new CountriesAPI(this.axios);
  }
}

const api = new API();

export default api;
