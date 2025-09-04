// edit this so it takes an actual location (consult docs for this)
export async function hitApi(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=HT8LVXHCK6U6PQ4X7F2TAJ5EU&contentType=json`,
  );
  const weatherData = await response.json();
  const finalData = await weatherData.currentConditions.conditions;

  console.log(finalData);

  return finalData;
}
