function parseLocalDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function formatMonths(totalMonths) {
  const months = Math.max(0, totalMonths);
  const years = Math.floor(months / 12);
  const remainder = months % 12;
  const parts = [];

  if (years) parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  if (remainder) parts.push(`${remainder} ${remainder === 1 ? "month" : "months"}`);

  return parts.join(" ") || "Less than a month";
}

export function getDuration(startDate, endDate) {
  const start = parseLocalDate(startDate);
  const end = endDate ? parseLocalDate(endDate) : new Date();
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

  if (end.getDate() < start.getDate()) months -= 1;

  months = Math.max(0, months);
  return { months, label: formatMonths(months) };
}

export function totalExperience(roles) {
  const months = roles.reduce(
    (sum, role) => sum + getDuration(role.startDate, role.endDate).months,
    0,
  );

  return { months, label: formatMonths(months) };
}
