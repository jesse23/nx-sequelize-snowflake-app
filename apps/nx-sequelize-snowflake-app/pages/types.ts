
export interface User {
  id: number,
  userName: string,
  email: string,
  zipCode: string,
}

export interface Forecast {
  postCode: string,
  date: Date,
  minTemp: number,
  avgTemp: number,
  maxTemp: number,
}
