export default function dateFilter(value) {
  const options = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("ru-RU", options).format(new Date(value));
}