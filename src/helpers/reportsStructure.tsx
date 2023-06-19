// Interfaces
import { IReports } from "../interfaces";

interface IGetPercentageResponse {
  earnings: boolean;
  percentage: number;
}

interface IReportStructureResponse {
  indicator: string;
  value: number | string;
  percentage?: number | undefined;
  earnings?: boolean;
}

const getPercentage = (
  currVal: number,
  prevVal: number,
): IGetPercentageResponse => {
  let subtract = 0;
  let earnings = true;
  let percentage = 0;

  if (currVal > prevVal) {
    subtract = currVal - prevVal;
  } else {
    subtract = prevVal - currVal;
    earnings = false;
  }
  percentage = parseFloat(((subtract * 100) / prevVal).toFixed(2));
  return { earnings, percentage };
};

export const reportsStructure = (res: {
  result: IReports;
}): IReportStructureResponse[] => {
  const { result } = res;
  const avgTicket: IReportStructureResponse = {
    indicator: "Ticket promedio",
    value: result.averageTicket.toLocaleString("en-US"),
    percentage: getPercentage(
      result.averageTicket,
      result.previousDay.averageTicket,
    ).percentage,
    earnings: getPercentage(
      result.averageTicket,
      result.previousDay.averageTicket,
    ).earnings,
  };
  const topTicket: IReportStructureResponse = {
    indicator: "Ticket tope",
    value: result.topTicket.toLocaleString("en-US"),
    percentage: getPercentage(result.topTicket, result.previousDay.topTicket)
      .percentage,
    earnings: getPercentage(result.topTicket, result.previousDay.topTicket)
      .earnings,
  };
  const topPayment: IReportStructureResponse = {
    indicator: "Método de pago más usado",
    value:
      result.topPaymentMethod === "card" ? "Tarjeta de crédito/débito" : "card",
    percentage: undefined,
  };
  const report = [avgTicket, topTicket, topPayment];
  return report;
};
