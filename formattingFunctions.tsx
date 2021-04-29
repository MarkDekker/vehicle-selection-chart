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

  powerkW: (n: number) => {
    return `${n.toString()} kW`;
  },

  powerHP: (n: number) => {
    return `${n.toString()} PS`;
  },

  date: (n: number) => {
    const d = new Date(n);

    let month = "" + (d.getMonth() + 1);
    const year = d.getFullYear();

    month = month.length < 2 ? "0" + month : month;

    return [month, year].join("/");
  },

  titleCase: (str: string) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  },

  unchanged: (n: string | number) => {
    return n.toString;
  },

  items: (n: string | number) => {
    if (n === 1 || n === "1") `${n.toString()} Item`;
    return `${n.toString()} Items`;
  }
};
