import moment from "moment";

export function formatDate(date: string | Date) {
  return moment(date).format("DD/MM/YYYY [às] HH:mm");
}
