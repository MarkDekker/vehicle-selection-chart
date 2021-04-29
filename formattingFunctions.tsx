const getLocale = () => {
  if (navigator.languages != undefined) return navigator.languages[0];
  return navigator.language;
};

export default {
  currency: (n: number) => {
    return new Intl.NumberFormat(getLocale(), {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    }).format(n);
  },

  mileage: (n: number) => {
    return new Intl.NumberFormat(getLocale(), {
      style: "unit",
      unit: "kilometer"
    }).format(n);
  },

  date: (n: number) => {
    const d = new Date(n);

    let month = "" + (d.getMonth() + 1);
    const year = d.getFullYear();

    month = month.length < 2 ? "0" + month : month;

    return [month, year].join("/");
  }
};
