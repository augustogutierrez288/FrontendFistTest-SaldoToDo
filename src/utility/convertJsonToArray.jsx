export function convertJsonToArray(jsonData) {
  const dataObject = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
  
  const arrayOfObjects = [];
  
  for (const key in dataObject) {
    if (dataObject.hasOwnProperty(key)) {
      const currencyData = dataObject[key];
      const currencyObject = {
        id: key,
        ...currencyData,
      };

      arrayOfObjects.push(currencyObject);
    }
  }
  
  return arrayOfObjects;
}