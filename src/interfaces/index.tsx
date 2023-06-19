import { ReactNode } from "react";

export interface IInput {
  title?: string;
  placeholder?: string;
  name: string;
  id?: string;
  type: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export interface IButton {
  contained?: boolean;
  children: ReactNode;
  onClick?: () => void;
  submit?: boolean;
}

export interface IIndicators {
  indicator: string;
  value: string | number;
  percentage?: number;
  earnings?: boolean;
}

export interface ILogoutButton {
  onClick: () => void;
}

interface IReportStructure {
  averageTicket: number;
  topTicket: number;
  topPaymentMethod: string;
  revenuePerHour: number[];
}

export interface IReports {
  averageTicket: number;
  topTicket: number;
  topPaymentMethod: string;
  revenuePerHour: number[];
  previousDay: IReportStructure;
}
