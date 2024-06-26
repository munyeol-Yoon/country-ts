import { AxiosInstance } from "axios";
import { Country } from "../types/Country.type";

class CountriesAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getCountries() {
    const response = await this.axios.get<Country[]>("/all");

    const result = response.data;

    return result;
  }
}

export default CountriesAPI;
