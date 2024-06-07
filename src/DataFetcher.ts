import { DataConsole } from "./sources";

const opts: RequestInit = { headers: { 'accept-encoding': 'deflate' } };

class DataFetcher {

  public static async fetchCurrentPower(dataConsole: DataConsole): Promise<number> {
    return fetch(dataConsole.ip + "/api/v1/measurements/p", opts)
      .then(async response => {
        const json = await response.json();

        console.log(new Date, 'Current power:', json.value, dataConsole.name)

        return json.value;
      })
      .catch(() => {
        console.error(new Date, 'Error fetching current power', dataConsole.name);
        return null;
      });
  }

  public static async fetchPosTotal(dataConsole: DataConsole): Promise<number> {
    return fetch(dataConsole.ip + "/api/v1/meters/ea-pos-total", opts)
      .then(async response => {
        const json = await response.json();

        console.log(new Date, 'Total power:', json.value, dataConsole.name)

        return json.value;
      })
      .catch(() => {
        console.error(new Date, 'Error fetching total power', dataConsole.name);
        return null;
      });
  }

}

export default DataFetcher;
