const checkDay = (day) => {
  if (day < 10) {
    day = day.slice(1);
  } else {
    day = day;
  }
};

export default checkDay;
