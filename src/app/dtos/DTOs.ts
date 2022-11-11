export interface IUserDTO {
  userId: string,
  firstName: string,
  lastName: string,
  userName: string,
  password: string,
}

export interface IFluxMonthProfit {
  date: Date,
  monthSum: number
}

export interface IFluxMonthSpend {
  date: Date,
  monthSum: number
}

export interface IFluxQuarterProfit {
  date: Date,
  quarterSum: number
}

export interface IFluxYearProfit {
  date: Date,
  yearSum: number
}

export interface IDeltaResponse {
  displayPeriod: string,
  value: number
}

export interface IAverageRate {
  date: Date,
  avgRate: number
}

export interface ISalaryBonusesByType {
  name: string,
  sum: number
}

export interface ISalaryBonusesByMonths {
  seId: string,
  date: Date,
  sum: number
}

export interface ISalaryTotalByMonths {
  seId: string,
  date: Date,
  sum: number
}

export interface ISalaryWorkingHours {
  date: Date,
  sum: number
}

export interface IChartData {
  date: Date,
  value: number
}

export interface IColumnChartData {
  category: string,
  value: number
}

export interface IMenuItem {
  routerLink: string,
  displayName: string
}

export interface RefluxType {
  id: number,
  name: string
}

export interface IRefluxTypeDTO {
  rtId: number
  name: string
  comment: string
}

export interface CashLocationsDTO{
  value: number;
  type: number;
}

export interface IFopDTO {
  fopId: number
  value: number
  type: string
}

export interface IFluxTypes {
  ftId: number,
  name: string,
  comment: string
}

export interface IFluxDTO {
  ftId: number,
  value: number,
  date: string,
  comment: string,
  isAutoConverting: boolean
}

export interface IRefluxDTO {
  rtId: number,
  value: number,
  date: string,
  comment: string,
}

export interface ISalaryConvertingDTO {
  usd: number,
  date: string,
  exRate: number
}

export interface IFopSubtractDTO {
  value: number,
  type: string
}

export interface IRefluxTypes {
  rtId: number,
  name: string,
  comment: string
}

export interface ITotalValuesPercent {
  currencyType: string,
  percent: number
}
