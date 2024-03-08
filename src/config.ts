import axios from "axios";
export interface CurrentPowerResponse {
  name: string,
  power: number | null,
}

export interface PosTotalResponse {
  name: string,
  total: number | null,
}

export class DataConsole {
  private name: string;
  private ip: string;

  constructor(name: string, ip: string) {
    this.name = name;
    this.ip = ip;
  }

  public async currentPower(): Promise<CurrentPowerResponse> {
    return axios
      .get(this.ip + "/api/v1/measurements/p", { decompress: false })
      .then((r) => ({
        name: this.name,
        power: r?.data?.value
      }))
      .catch(e => ({
        name: this.name,
        power: null
      }));
  }

  public async posTotal(): Promise<PosTotalResponse> {
    return axios
      .get(this.ip + "/api/v1/meters/ea-pos-total", { decompress: false })
      .then(r => ({
        name: this.name,
        total: r?.data?.value
      }))
      .catch(e => ({
        name: this.name,
        total: null
      }))
  }
}

const consoles = [
  new DataConsole('Liejimas Chilleriai', 'http://10.0.7.131'),
  new DataConsole('Kompesorine', 'http://10.0.7.132'),
  new DataConsole('MAC', 'http://10.0.7.133'),
  new DataConsole('Surinkimas', 'http://10.0.7.134'),
  new DataConsole('Linija 1 liejimas CLF 5488', 'http://10.0.7.135'),
  new DataConsole('Linija 1 kaitintuvas 5488', 'http://10.0.7.136'),
  new DataConsole('Linija 2 liejimas CLF 5489', 'http://10.0.7.137'),
  new DataConsole('Linija 2 kaitintuvas 5489', 'http://10.0.7.138'),
  new DataConsole('Linija 3 liejimas CLF 5528', 'http://10.0.7.139'),
  new DataConsole('Linija 3 kaitintuvas 5528', 'http://10.0.7.140'),
]

export default consoles;