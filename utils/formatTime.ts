const months = "JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC".split(" ");

export function formatTime(sites: TypeStation[]) {
  return sites.map((site) => {
    const date = new Date(Date.now() + parseInt(site.timeZoneOffset));
    const ampm = date.getUTCHours() >= 12 ? 'PM' : 'AM';
    return {
      ...site,
      formattedDate: `${months[date.getUTCMonth()]} ${date.getUTCDate().toString().padStart(2, '0')}`,
      hours: `${(date.getUTCHours() % 12 || 12).toString().padStart(2, '0')}:${date.getUTCMinutes().toString().padStart(2, '0')} ${ampm}`,
    };
  });
}