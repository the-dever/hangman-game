const getPuzzle = async function (wordCount) {
  const response = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status !== 200) throw new Error('Unable to get puzzle');
  const data = await response.json();
  return data.puzzle;
};

const getCountry = async function (countryCode) {
  const response = await fetch(`//restcountries.eu/rest/v2/all`);
  if (response.status !== 200) throw new Error('Unable to fetch data');
  const data = await response.json();
  return data.find(d => d.alpha2Code === countryCode);
};

const getLocation = async function () {
  const response = await fetch('//ipinfo.io/json?token=10dfc2a0ac2631');
  if (response.status !== 200) throw new Error('Unable to fetch data');
  return response.json();
};

const getCurrentCountry = async function () {
  const location = await getLocation();
  return getCountry(location.country);
};
