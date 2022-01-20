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
