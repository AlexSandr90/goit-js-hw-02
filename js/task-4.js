function getShippingCost(country) {
  const countriesShippingCost = [
    { countryName: 'China', const: 100 },
    { countryName: 'Chile', const: 250 },
    { countryName: 'Australia', const: 170 },
    { countryName: 'Jamaica', const: 120 },
  ];

  const currentCountryObj = countriesShippingCost.find(
    (countryObject) => countryObject.countryName === country
  );

  return currentCountryObj
    ? `Shipping to ${currentCountryObj.countryName} will cost ${currentCountryObj.const} credits`
    : 'Sorry, there is no delivery to your country';
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
