interface IDateProvider {
  dateNow(): Date;
  compareInHours(start_date: Date, end_date: Date): number;
  convertToUTC(start_date: Date): string;

}

export { IDateProvider };
