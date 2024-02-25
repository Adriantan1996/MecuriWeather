const fahrenheitToCelsius = (fahrenheit: number): number => {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return Math.floor(celsius);
};
export default fahrenheitToCelsius;
