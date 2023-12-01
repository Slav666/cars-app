export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "b52e23b949msh78e586cd5ed117ap10af61jsnbd585ff7d7ca",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}
