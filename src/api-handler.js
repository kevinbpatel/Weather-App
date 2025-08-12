export async function hitApi() {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/toronto?unitGroup=us&key=HT8LVXHCK6U6PQ4X7F2TAJ5EU&contentType=json",
  );
  const weatherData = await response.json();

  const finalData = weatherData.currentConditions.conditions;

  console.log(finalData);

  return finalData;
}
