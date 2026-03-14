export default function formatDate(dateStr) {
  if (!dateStr) return "Tarih Yok";
  return dateStr.split("-").reverse().join(" ");
}