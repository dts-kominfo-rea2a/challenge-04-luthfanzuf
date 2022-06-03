// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
// const mockDates = ["2022-01-01 UTC+7", "2021-12-31 00:00:00 UTC+2"];
const createDate = (arr, index) => {
  let stringEpochSeconds = ""
  arr.sort()
  function changeFormat(msNonEpochDate){
    return Math.ceil(Date.parse(msNonEpochDate) / 1000)
  }
  if (index === undefined) {
    for(let i = 0; i < arr.length; i++) {
      let str1 = changeFormat(arr[i])
      stringEpochSeconds = stringEpochSeconds+"-"+str1
    } 
  } else {
      let str2 = changeFormat(arr[index])
      stringEpochSeconds = stringEpochSeconds+"-"+str2
  }
  return stringEpochSeconds.substring(1)
}

console.log(createDate(dates))

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
