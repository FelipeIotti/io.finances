import moment from "moment";

export function formatMinutesToDuration(minutes: number): string {
  const duration = moment.duration(minutes, "minutes");

  const days = Math.floor(duration.asDays());
  const hours = duration.hours();
  const mins = duration.minutes();
  const secs = duration.seconds();

  const components = [
    { value: days, label: "d" },
    { value: hours, label: "h" },
    { value: mins, label: "min" },
    { value: secs, label: "s" },
  ];

  const firstNonZeroIndex = components.findIndex((comp) => comp.value > 0);
  const filtered =
    firstNonZeroIndex !== -1
      ? components.slice(firstNonZeroIndex)
      : [{ value: 0, label: "min" }];

  return filtered.map(({ value, label }) => `${value}${label}`).join(" ");
}
