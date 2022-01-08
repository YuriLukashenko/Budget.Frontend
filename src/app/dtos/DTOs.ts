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

export interface IChartData {
  date: Date,
  value: number
}
