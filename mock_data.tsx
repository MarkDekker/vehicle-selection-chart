export interface ListingSummary {
  classified_guid: number;
  price: number;
  mileage: number;
  registrationDate: number;
  equipmentCount: number;
  makeID: number;
  modelID: number;
  priceEvaluationID: string;
}

export interface ListingSummaryDTO {
  classifiedGuid: string;
  price: number;
  mileage: number;
  registrationDate: string;
  equipmentCount: number;
  makeID: number;
  modelID: number;
  priceEvaluationID: string;
  customerTypeID: number;
  power: number;
  bodyTypeID: number;
  fuelTypeID: number;
  changeDate: string;
  colorID: number;
}

export const listings: ListingSummary[] = [
  {
    classified_guid: 1,
    price: 42651,
    mileage: 77257,
    registrationDate: 2010,
    equipmentCount: 19,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 2,
    price: 54433,
    mileage: 245930,
    registrationDate: 2011,
    equipmentCount: 37,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 3,
    price: 61643,
    mileage: 60228,
    registrationDate: 2002,
    equipmentCount: 26,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 4,
    price: 41291,
    mileage: 247363,
    registrationDate: 2003,
    equipmentCount: 5,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 5,
    price: 87396,
    mileage: 16591,
    registrationDate: 2002,
    equipmentCount: 20,
    makeID: "Audi A5",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 6,
    price: 34775,
    mileage: 14469,
    registrationDate: 1986,
    equipmentCount: 30,
    makeID: "Audi A3",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 7,
    price: 52712,
    mileage: 180769,
    registrationDate: 1990,
    equipmentCount: 35,
    makeID: "Audi A3",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 8,
    price: 30074,
    mileage: 226525,
    registrationDate: 2013,
    equipmentCount: 39,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 9,
    price: 81272,
    mileage: 6248,
    registrationDate: 2010,
    equipmentCount: 36,
    makeID: "Ford Mustang",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 10,
    price: 21043,
    mileage: 90388,
    registrationDate: 2002,
    equipmentCount: 23,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 11,
    price: 31017,
    mileage: 87896,
    registrationDate: 2015,
    equipmentCount: 13,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 12,
    price: 98055,
    mileage: 213844,
    registrationDate: 2010,
    equipmentCount: 5,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 13,
    price: 20298,
    mileage: 172761,
    registrationDate: 2009,
    equipmentCount: 6,
    makeID: "Toyota Supra",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 14,
    price: 30052,
    mileage: 243706,
    registrationDate: 1990,
    equipmentCount: 13,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 15,
    price: 49624,
    mileage: 130479,
    registrationDate: 1982,
    equipmentCount: 16,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 16,
    price: 59863,
    mileage: 227070,
    registrationDate: 2001,
    equipmentCount: 29,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 17,
    price: 12769,
    mileage: 52970,
    registrationDate: 1981,
    equipmentCount: 27,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 18,
    price: 18346,
    mileage: 41498,
    registrationDate: 1981,
    equipmentCount: 16,
    makeID: "Audi A5",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 19,
    price: 69600,
    mileage: 215347,
    registrationDate: 2010,
    equipmentCount: 14,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 20,
    price: 47147,
    mileage: 95053,
    registrationDate: 1982,
    equipmentCount: 16,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 21,
    price: 56241,
    mileage: 229747,
    registrationDate: 2012,
    equipmentCount: 7,
    makeID: "Toyota Supra",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 22,
    price: 43066,
    mileage: 226468,
    registrationDate: 2018,
    equipmentCount: 9,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 23,
    price: 86639,
    mileage: 17090,
    registrationDate: 2006,
    equipmentCount: 29,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 24,
    price: 75684,
    mileage: 41292,
    registrationDate: 2012,
    equipmentCount: 6,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 25,
    price: 27133,
    mileage: 158958,
    registrationDate: 2000,
    equipmentCount: 25,
    makeID: "Audi A3",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 26,
    price: 69698,
    mileage: 234153,
    registrationDate: 2019,
    equipmentCount: 9,
    makeID: "Audi A3",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 27,
    price: 36003,
    mileage: 164818,
    registrationDate: 1989,
    equipmentCount: 13,
    makeID: "Toyota Supra",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 28,
    price: 79704,
    mileage: 154385,
    registrationDate: 2011,
    equipmentCount: 16,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 29,
    price: 84201,
    mileage: 133460,
    registrationDate: 2021,
    equipmentCount: 34,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 30,
    price: 25183,
    mileage: 24546,
    registrationDate: 1990,
    equipmentCount: 17,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 31,
    price: 43106,
    mileage: 4977,
    registrationDate: 2004,
    equipmentCount: 20,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 32,
    price: 43594,
    mileage: 226118,
    registrationDate: 2019,
    equipmentCount: 10,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 33,
    price: 20716,
    mileage: 223911,
    registrationDate: 2009,
    equipmentCount: 14,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 34,
    price: 81433,
    mileage: 89147,
    registrationDate: 2014,
    equipmentCount: 33,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 35,
    price: 20149,
    mileage: 92062,
    registrationDate: 2008,
    equipmentCount: 27,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 36,
    price: 45042,
    mileage: 175416,
    registrationDate: 1994,
    equipmentCount: 27,
    makeID: "Audi A5",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 37,
    price: 76832,
    mileage: 142162,
    registrationDate: 1998,
    equipmentCount: 26,
    makeID: "Audi A3",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 38,
    price: 75458,
    mileage: 56950,
    registrationDate: 1995,
    equipmentCount: 37,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 39,
    price: 29694,
    mileage: 109239,
    registrationDate: 2001,
    equipmentCount: 40,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 40,
    price: 56883,
    mileage: 132558,
    registrationDate: 2000,
    equipmentCount: 16,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 41,
    price: 3542,
    mileage: 218091,
    registrationDate: 1989,
    equipmentCount: 38,
    makeID: "Ford Mustang",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 42,
    price: 14063,
    mileage: 5073,
    registrationDate: 1988,
    equipmentCount: 16,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 43,
    price: 8009,
    mileage: 40702,
    registrationDate: 1980,
    equipmentCount: 21,
    makeID: "Toyota Supra",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 44,
    price: 78707,
    mileage: 226344,
    registrationDate: 2016,
    equipmentCount: 40,
    makeID: "Ford Mustang",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 45,
    price: 6516,
    mileage: 188656,
    registrationDate: 1990,
    equipmentCount: 40,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 46,
    price: 11715,
    mileage: 214914,
    registrationDate: 1999,
    equipmentCount: 25,
    makeID: "Audi A5",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 47,
    price: 97323,
    mileage: 175114,
    registrationDate: 1986,
    equipmentCount: 14,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 48,
    price: 72047,
    mileage: 131425,
    registrationDate: 2015,
    equipmentCount: 31,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 49,
    price: 78967,
    mileage: 77214,
    registrationDate: 2009,
    equipmentCount: 14,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 50,
    price: 77802,
    mileage: 135840,
    registrationDate: 2015,
    equipmentCount: 10,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 51,
    price: 29758,
    mileage: 187873,
    registrationDate: 2000,
    equipmentCount: 35,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 52,
    price: 95794,
    mileage: 117114,
    registrationDate: 1982,
    equipmentCount: 22,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 53,
    price: 45522,
    mileage: 34097,
    registrationDate: 2003,
    equipmentCount: 16,
    makeID: "Ford Mustang",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 54,
    price: 8669,
    mileage: 199621,
    registrationDate: 2006,
    equipmentCount: 36,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 55,
    price: 81723,
    mileage: 37006,
    registrationDate: 1999,
    equipmentCount: 38,
    makeID: "Audi A5",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 56,
    price: 58843,
    mileage: 214360,
    registrationDate: 1991,
    equipmentCount: 25,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 57,
    price: 29183,
    mileage: 168398,
    registrationDate: 1982,
    equipmentCount: 28,
    makeID: "Audi A5",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 58,
    price: 47029,
    mileage: 83000,
    registrationDate: 2010,
    equipmentCount: 9,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 59,
    price: 69790,
    mileage: 83433,
    registrationDate: 1995,
    equipmentCount: 21,
    makeID: "Audi A5",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 60,
    price: 8020,
    mileage: 240283,
    registrationDate: 2010,
    equipmentCount: 19,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 61,
    price: 35617,
    mileage: 114500,
    registrationDate: 1989,
    equipmentCount: 16,
    makeID: "Audi A5",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 62,
    price: 13487,
    mileage: 107526,
    registrationDate: 1986,
    equipmentCount: 13,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 63,
    price: 71828,
    mileage: 21594,
    registrationDate: 2008,
    equipmentCount: 29,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 64,
    price: 4749,
    mileage: 91052,
    registrationDate: 1992,
    equipmentCount: 19,
    makeID: "Ford Mustang",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 65,
    price: 59734,
    mileage: 194453,
    registrationDate: 2006,
    equipmentCount: 6,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 66,
    price: 72277,
    mileage: 45852,
    registrationDate: 2019,
    equipmentCount: 17,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 67,
    price: 42458,
    mileage: 26537,
    registrationDate: 2010,
    equipmentCount: 39,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 68,
    price: 59761,
    mileage: 186689,
    registrationDate: 2014,
    equipmentCount: 18,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 69,
    price: 63928,
    mileage: 102910,
    registrationDate: 1991,
    equipmentCount: 24,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 70,
    price: 40012,
    mileage: 165266,
    registrationDate: 2018,
    equipmentCount: 25,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 71,
    price: 90675,
    mileage: 45980,
    registrationDate: 1992,
    equipmentCount: 18,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 72,
    price: 53518,
    mileage: 85348,
    registrationDate: 1986,
    equipmentCount: 16,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 73,
    price: 18160,
    mileage: 239030,
    registrationDate: 1999,
    equipmentCount: 24,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 74,
    price: 11248,
    mileage: 89401,
    registrationDate: 2008,
    equipmentCount: 26,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 75,
    price: 3402,
    mileage: 180110,
    registrationDate: 2017,
    equipmentCount: 16,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 76,
    price: 98012,
    mileage: 78556,
    registrationDate: 1998,
    equipmentCount: 23,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 77,
    price: 25797,
    mileage: 7037,
    registrationDate: 1981,
    equipmentCount: 33,
    makeID: "Audi A3",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 78,
    price: 35055,
    mileage: 215015,
    registrationDate: 2005,
    equipmentCount: 15,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 79,
    price: 26765,
    mileage: 77646,
    registrationDate: 2006,
    equipmentCount: 5,
    makeID: "Toyota Supra",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 80,
    price: 48745,
    mileage: 65477,
    registrationDate: 1999,
    equipmentCount: 22,
    makeID: "Audi A5",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 81,
    price: 88514,
    mileage: 158338,
    registrationDate: 2005,
    equipmentCount: 11,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 82,
    price: 79607,
    mileage: 19097,
    registrationDate: 1986,
    equipmentCount: 39,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 83,
    price: 59189,
    mileage: 139453,
    registrationDate: 2018,
    equipmentCount: 24,
    makeID: "Audi A5",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 84,
    price: 15987,
    mileage: 81885,
    registrationDate: 1990,
    equipmentCount: 26,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 85,
    price: 6936,
    mileage: 68715,
    registrationDate: 2008,
    equipmentCount: 5,
    makeID: "Audi A5",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 86,
    price: 47934,
    mileage: 152316,
    registrationDate: 2011,
    equipmentCount: 28,
    makeID: "Ford Mustang",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 87,
    price: 8131,
    mileage: 48421,
    registrationDate: 1992,
    equipmentCount: 27,
    makeID: "Ford Mustang",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 88,
    price: 99244,
    mileage: 223259,
    registrationDate: 1985,
    equipmentCount: 12,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 89,
    price: 60535,
    mileage: 79348,
    registrationDate: 2002,
    equipmentCount: 29,
    makeID: "Audi A5",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 90,
    price: 73745,
    mileage: 58879,
    registrationDate: 2018,
    equipmentCount: 29,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 91,
    price: 33470,
    mileage: 213641,
    registrationDate: 2017,
    equipmentCount: 26,
    makeID: "Toyota Supra",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 92,
    price: 65654,
    mileage: 5914,
    registrationDate: 1985,
    equipmentCount: 24,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 93,
    price: 76584,
    mileage: 117245,
    registrationDate: 2015,
    equipmentCount: 13,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 94,
    price: 11270,
    mileage: 189100,
    registrationDate: 2000,
    equipmentCount: 37,
    makeID: "Toyota Supra",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 95,
    price: 23231,
    mileage: 88015,
    registrationDate: 1990,
    equipmentCount: 11,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 96,
    price: 29843,
    mileage: 184333,
    registrationDate: 2015,
    equipmentCount: 18,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 97,
    price: 88491,
    mileage: 180204,
    registrationDate: 2005,
    equipmentCount: 12,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 98,
    price: 15734,
    mileage: 214076,
    registrationDate: 2014,
    equipmentCount: 6,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 99,
    price: 40862,
    mileage: 25470,
    registrationDate: 1992,
    equipmentCount: 10,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 100,
    price: 10723,
    mileage: 77755,
    registrationDate: 1992,
    equipmentCount: 17,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 101,
    price: 98747,
    mileage: 65770,
    registrationDate: 2007,
    equipmentCount: 30,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 102,
    price: 63297,
    mileage: 104492,
    registrationDate: 1995,
    equipmentCount: 23,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 103,
    price: 40285,
    mileage: 195699,
    registrationDate: 2016,
    equipmentCount: 26,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 104,
    price: 4428,
    mileage: 219772,
    registrationDate: 2001,
    equipmentCount: 16,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 105,
    price: 62237,
    mileage: 122150,
    registrationDate: 1981,
    equipmentCount: 26,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 106,
    price: 33852,
    mileage: 67795,
    registrationDate: 1997,
    equipmentCount: 7,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 107,
    price: 30093,
    mileage: 196691,
    registrationDate: 2004,
    equipmentCount: 25,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 108,
    price: 29393,
    mileage: 195035,
    registrationDate: 2004,
    equipmentCount: 39,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 109,
    price: 16073,
    mileage: 67946,
    registrationDate: 1999,
    equipmentCount: 19,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 110,
    price: 59005,
    mileage: 15440,
    registrationDate: 2011,
    equipmentCount: 33,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 111,
    price: 59089,
    mileage: 189058,
    registrationDate: 1986,
    equipmentCount: 39,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 112,
    price: 3992,
    mileage: 195059,
    registrationDate: 2003,
    equipmentCount: 38,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 113,
    price: 47804,
    mileage: 114643,
    registrationDate: 2001,
    equipmentCount: 21,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 114,
    price: 84620,
    mileage: 151252,
    registrationDate: 2009,
    equipmentCount: 16,
    makeID: "Toyota Supra",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 115,
    price: 18873,
    mileage: 103881,
    registrationDate: 2013,
    equipmentCount: 22,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 116,
    price: 78295,
    mileage: 189563,
    registrationDate: 2009,
    equipmentCount: 36,
    makeID: "Audi A3",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 117,
    price: 5692,
    mileage: 32758,
    registrationDate: 2005,
    equipmentCount: 12,
    makeID: "Ford Mustang",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 118,
    price: 17797,
    mileage: 38643,
    registrationDate: 2000,
    equipmentCount: 30,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 119,
    price: 93337,
    mileage: 175201,
    registrationDate: 2010,
    equipmentCount: 12,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 120,
    price: 12256,
    mileage: 129322,
    registrationDate: 2003,
    equipmentCount: 39,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 121,
    price: 84392,
    mileage: 77121,
    registrationDate: 1984,
    equipmentCount: 27,
    makeID: "Audi A5",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 122,
    price: 43529,
    mileage: 75050,
    registrationDate: 2003,
    equipmentCount: 37,
    makeID: "Audi A5",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 123,
    price: 82517,
    mileage: 161327,
    registrationDate: 1991,
    equipmentCount: 31,
    makeID: "Audi A5",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 124,
    price: 82680,
    mileage: 196757,
    registrationDate: 2013,
    equipmentCount: 26,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 125,
    price: 79295,
    mileage: 70136,
    registrationDate: 2008,
    equipmentCount: 19,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 126,
    price: 31302,
    mileage: 7405,
    registrationDate: 2012,
    equipmentCount: 36,
    makeID: "Ford Mustang",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 127,
    price: 79792,
    mileage: 166936,
    registrationDate: 2021,
    equipmentCount: 23,
    makeID: "Audi A3",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 128,
    price: 17006,
    mileage: 149274,
    registrationDate: 2010,
    equipmentCount: 33,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 129,
    price: 72752,
    mileage: 215229,
    registrationDate: 1984,
    equipmentCount: 18,
    makeID: "Audi A5",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 130,
    price: 15841,
    mileage: 204403,
    registrationDate: 2006,
    equipmentCount: 16,
    makeID: "Audi A5",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 131,
    price: 70791,
    mileage: 101082,
    registrationDate: 2003,
    equipmentCount: 31,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 132,
    price: 28646,
    mileage: 14555,
    registrationDate: 1981,
    equipmentCount: 7,
    makeID: "Audi A5",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 133,
    price: 44155,
    mileage: 96770,
    registrationDate: 2018,
    equipmentCount: 22,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 134,
    price: 59406,
    mileage: 46035,
    registrationDate: 1981,
    equipmentCount: 9,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 135,
    price: 95659,
    mileage: 105971,
    registrationDate: 2007,
    equipmentCount: 17,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 136,
    price: 34354,
    mileage: 122571,
    registrationDate: 2013,
    equipmentCount: 25,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 137,
    price: 10787,
    mileage: 41524,
    registrationDate: 1998,
    equipmentCount: 13,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 138,
    price: 69790,
    mileage: 71553,
    registrationDate: 1989,
    equipmentCount: 20,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 139,
    price: 27547,
    mileage: 87237,
    registrationDate: 2011,
    equipmentCount: 15,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 140,
    price: 61311,
    mileage: 158830,
    registrationDate: 1999,
    equipmentCount: 17,
    makeID: "Audi A3",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 141,
    price: 80901,
    mileage: 103156,
    registrationDate: 2019,
    equipmentCount: 19,
    makeID: "Toyota Supra",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 142,
    price: 94687,
    mileage: 246077,
    registrationDate: 2007,
    equipmentCount: 31,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 143,
    price: 44500,
    mileage: 193009,
    registrationDate: 1981,
    equipmentCount: 12,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 144,
    price: 25933,
    mileage: 112884,
    registrationDate: 2019,
    equipmentCount: 21,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 145,
    price: 50104,
    mileage: 210149,
    registrationDate: 2020,
    equipmentCount: 39,
    makeID: "Toyota Supra",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 146,
    price: 17526,
    mileage: 88865,
    registrationDate: 2009,
    equipmentCount: 38,
    makeID: "Audi A3",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 147,
    price: 6031,
    mileage: 57421,
    registrationDate: 1989,
    equipmentCount: 40,
    makeID: "Ford Mustang",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 148,
    price: 16416,
    mileage: 218311,
    registrationDate: 1995,
    equipmentCount: 24,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 149,
    price: 7601,
    mileage: 161749,
    registrationDate: 2018,
    equipmentCount: 28,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 150,
    price: 38887,
    mileage: 183788,
    registrationDate: 2018,
    equipmentCount: 25,
    makeID: "Ford Mustang",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 151,
    price: 64327,
    mileage: 188435,
    registrationDate: 2008,
    equipmentCount: 37,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 152,
    price: 48998,
    mileage: 74639,
    registrationDate: 1993,
    equipmentCount: 13,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 153,
    price: 10075,
    mileage: 157910,
    registrationDate: 2017,
    equipmentCount: 40,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 154,
    price: 71487,
    mileage: 87984,
    registrationDate: 2017,
    equipmentCount: 31,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 155,
    price: 36916,
    mileage: 243819,
    registrationDate: 2005,
    equipmentCount: 23,
    makeID: "Toyota Supra",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 156,
    price: 9928,
    mileage: 232992,
    registrationDate: 2008,
    equipmentCount: 24,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 157,
    price: 70836,
    mileage: 135412,
    registrationDate: 2008,
    equipmentCount: 24,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 158,
    price: 49969,
    mileage: 133003,
    registrationDate: 2006,
    equipmentCount: 38,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 159,
    price: 79308,
    mileage: 122117,
    registrationDate: 1995,
    equipmentCount: 18,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 160,
    price: 3066,
    mileage: 90504,
    registrationDate: 2014,
    equipmentCount: 15,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 161,
    price: 24789,
    mileage: 208465,
    registrationDate: 1986,
    equipmentCount: 5,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 162,
    price: 73480,
    mileage: 101041,
    registrationDate: 1992,
    equipmentCount: 35,
    makeID: "Ford Mustang",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 163,
    price: 55987,
    mileage: 206800,
    registrationDate: 2001,
    equipmentCount: 18,
    makeID: "Toyota Supra",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 164,
    price: 17605,
    mileage: 103770,
    registrationDate: 1987,
    equipmentCount: 19,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 165,
    price: 19458,
    mileage: 98320,
    registrationDate: 1994,
    equipmentCount: 14,
    makeID: "Audi A3",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 166,
    price: 46205,
    mileage: 73353,
    registrationDate: 1991,
    equipmentCount: 12,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 167,
    price: 93353,
    mileage: 70523,
    registrationDate: 1995,
    equipmentCount: 17,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 168,
    price: 7661,
    mileage: 102767,
    registrationDate: 2007,
    equipmentCount: 7,
    makeID: "Audi A5",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 169,
    price: 49151,
    mileage: 20859,
    registrationDate: 1991,
    equipmentCount: 28,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 170,
    price: 28652,
    mileage: 81282,
    registrationDate: 2018,
    equipmentCount: 19,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 171,
    price: 76050,
    mileage: 103842,
    registrationDate: 2006,
    equipmentCount: 16,
    makeID: "Ford Mustang",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 172,
    price: 26693,
    mileage: 176744,
    registrationDate: 2006,
    equipmentCount: 38,
    makeID: "Audi A5",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 173,
    price: 17793,
    mileage: 42418,
    registrationDate: 1995,
    equipmentCount: 37,
    makeID: "Ford Mustang",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 174,
    price: 4666,
    mileage: 192413,
    registrationDate: 2013,
    equipmentCount: 25,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 175,
    price: 93307,
    mileage: 192345,
    registrationDate: 1985,
    equipmentCount: 14,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 176,
    price: 80685,
    mileage: 13748,
    registrationDate: 2000,
    equipmentCount: 37,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 177,
    price: 6044,
    mileage: 66041,
    registrationDate: 2006,
    equipmentCount: 35,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 178,
    price: 85876,
    mileage: 151046,
    registrationDate: 2009,
    equipmentCount: 36,
    makeID: "Audi A5",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 179,
    price: 39604,
    mileage: 199112,
    registrationDate: 2000,
    equipmentCount: 39,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 180,
    price: 79335,
    mileage: 101412,
    registrationDate: 1993,
    equipmentCount: 33,
    makeID: "Toyota Supra",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 181,
    price: 88950,
    mileage: 104296,
    registrationDate: 2006,
    equipmentCount: 11,
    makeID: "Audi A5",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 182,
    price: 92321,
    mileage: 165010,
    registrationDate: 2004,
    equipmentCount: 31,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 183,
    price: 89313,
    mileage: 170592,
    registrationDate: 2021,
    equipmentCount: 15,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 184,
    price: 91211,
    mileage: 111932,
    registrationDate: 1991,
    equipmentCount: 19,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 185,
    price: 40835,
    mileage: 91247,
    registrationDate: 2008,
    equipmentCount: 14,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 186,
    price: 68473,
    mileage: 150551,
    registrationDate: 2019,
    equipmentCount: 30,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 187,
    price: 46213,
    mileage: 55754,
    registrationDate: 1982,
    equipmentCount: 10,
    makeID: "Audi A5",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 188,
    price: 35440,
    mileage: 220926,
    registrationDate: 1994,
    equipmentCount: 16,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 189,
    price: 36729,
    mileage: 221394,
    registrationDate: 2011,
    equipmentCount: 20,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 190,
    price: 19217,
    mileage: 54301,
    registrationDate: 1992,
    equipmentCount: 36,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 191,
    price: 56163,
    mileage: 99705,
    registrationDate: 2010,
    equipmentCount: 36,
    makeID: "Audi A5",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 192,
    price: 43636,
    mileage: 70400,
    registrationDate: 2008,
    equipmentCount: 26,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 193,
    price: 78267,
    mileage: 67426,
    registrationDate: 1981,
    equipmentCount: 40,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 194,
    price: 84414,
    mileage: 184696,
    registrationDate: 2008,
    equipmentCount: 5,
    makeID: "Audi A3",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 195,
    price: 95292,
    mileage: 242988,
    registrationDate: 1982,
    equipmentCount: 39,
    makeID: "Audi A3",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 196,
    price: 63326,
    mileage: 147409,
    registrationDate: 2001,
    equipmentCount: 40,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 197,
    price: 13723,
    mileage: 212587,
    registrationDate: 2003,
    equipmentCount: 23,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 198,
    price: 58611,
    mileage: 10639,
    registrationDate: 2014,
    equipmentCount: 5,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 199,
    price: 31547,
    mileage: 209180,
    registrationDate: 2006,
    equipmentCount: 36,
    makeID: "Audi A3",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 200,
    price: 77979,
    mileage: 14676,
    registrationDate: 1994,
    equipmentCount: 28,
    makeID: "Audi A3",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 201,
    price: 95954,
    mileage: 166153,
    registrationDate: 2013,
    equipmentCount: 23,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 202,
    price: 14447,
    mileage: 145648,
    registrationDate: 2002,
    equipmentCount: 33,
    makeID: "Ford Mustang",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 203,
    price: 41761,
    mileage: 205103,
    registrationDate: 1986,
    equipmentCount: 15,
    makeID: "Audi A3",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 204,
    price: 83927,
    mileage: 238280,
    registrationDate: 1992,
    equipmentCount: 33,
    makeID: "Audi A5",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 205,
    price: 14256,
    mileage: 210930,
    registrationDate: 1983,
    equipmentCount: 33,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 206,
    price: 57454,
    mileage: 93902,
    registrationDate: 1990,
    equipmentCount: 32,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 207,
    price: 48479,
    mileage: 220388,
    registrationDate: 2002,
    equipmentCount: 14,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 208,
    price: 32626,
    mileage: 20105,
    registrationDate: 2017,
    equipmentCount: 24,
    makeID: "Toyota Supra",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 209,
    price: 61537,
    mileage: 11431,
    registrationDate: 2017,
    equipmentCount: 16,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 210,
    price: 82015,
    mileage: 237683,
    registrationDate: 2013,
    equipmentCount: 9,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 211,
    price: 30646,
    mileage: 68762,
    registrationDate: 2016,
    equipmentCount: 19,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 212,
    price: 76825,
    mileage: 45262,
    registrationDate: 2010,
    equipmentCount: 9,
    makeID: "Audi A5",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 213,
    price: 51012,
    mileage: 184177,
    registrationDate: 2020,
    equipmentCount: 18,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 214,
    price: 96358,
    mileage: 176235,
    registrationDate: 2003,
    equipmentCount: 38,
    makeID: "Audi A3",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 215,
    price: 35108,
    mileage: 156545,
    registrationDate: 2000,
    equipmentCount: 23,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 216,
    price: 15400,
    mileage: 56669,
    registrationDate: 1994,
    equipmentCount: 11,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 217,
    price: 5806,
    mileage: 152917,
    registrationDate: 2013,
    equipmentCount: 14,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 218,
    price: 75848,
    mileage: 108880,
    registrationDate: 2013,
    equipmentCount: 9,
    makeID: "Toyota Supra",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 219,
    price: 54845,
    mileage: 241159,
    registrationDate: 2002,
    equipmentCount: 23,
    makeID: "Ford Mustang",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 220,
    price: 30783,
    mileage: 140553,
    registrationDate: 1986,
    equipmentCount: 35,
    makeID: "Toyota Supra",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 221,
    price: 4318,
    mileage: 238311,
    registrationDate: 1992,
    equipmentCount: 10,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 222,
    price: 83758,
    mileage: 76785,
    registrationDate: 1985,
    equipmentCount: 33,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 223,
    price: 86766,
    mileage: 224983,
    registrationDate: 1990,
    equipmentCount: 5,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 224,
    price: 66102,
    mileage: 54462,
    registrationDate: 1986,
    equipmentCount: 5,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 225,
    price: 93861,
    mileage: 140960,
    registrationDate: 1999,
    equipmentCount: 24,
    makeID: "Ford Mustang",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 226,
    price: 12059,
    mileage: 39351,
    registrationDate: 1982,
    equipmentCount: 5,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 227,
    price: 3835,
    mileage: 185892,
    registrationDate: 2008,
    equipmentCount: 19,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 228,
    price: 84910,
    mileage: 204024,
    registrationDate: 2020,
    equipmentCount: 40,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 229,
    price: 84271,
    mileage: 27582,
    registrationDate: 2011,
    equipmentCount: 27,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 230,
    price: 97039,
    mileage: 225224,
    registrationDate: 2019,
    equipmentCount: 14,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 231,
    price: 98575,
    mileage: 192244,
    registrationDate: 1982,
    equipmentCount: 37,
    makeID: "Ford Mustang",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 232,
    price: 4883,
    mileage: 213952,
    registrationDate: 1986,
    equipmentCount: 38,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 233,
    price: 34867,
    mileage: 247090,
    registrationDate: 2012,
    equipmentCount: 12,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 234,
    price: 28793,
    mileage: 18801,
    registrationDate: 1980,
    equipmentCount: 6,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 235,
    price: 48387,
    mileage: 47515,
    registrationDate: 2003,
    equipmentCount: 18,
    makeID: "Ford Mustang",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 236,
    price: 14189,
    mileage: 243052,
    registrationDate: 1989,
    equipmentCount: 11,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 237,
    price: 5269,
    mileage: 237076,
    registrationDate: 1987,
    equipmentCount: 27,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 238,
    price: 42015,
    mileage: 151399,
    registrationDate: 2020,
    equipmentCount: 27,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 239,
    price: 95912,
    mileage: 108606,
    registrationDate: 2002,
    equipmentCount: 12,
    makeID: "Audi A3",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 240,
    price: 78645,
    mileage: 113466,
    registrationDate: 2017,
    equipmentCount: 5,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 241,
    price: 85671,
    mileage: 72189,
    registrationDate: 1992,
    equipmentCount: 19,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 242,
    price: 51549,
    mileage: 50579,
    registrationDate: 2006,
    equipmentCount: 34,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 243,
    price: 16425,
    mileage: 92852,
    registrationDate: 1985,
    equipmentCount: 8,
    makeID: "Ford Mustang",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 244,
    price: 32561,
    mileage: 18298,
    registrationDate: 2001,
    equipmentCount: 34,
    makeID: "Toyota Supra",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 245,
    price: 21718,
    mileage: 98476,
    registrationDate: 1986,
    equipmentCount: 40,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 246,
    price: 85605,
    mileage: 167632,
    registrationDate: 1989,
    equipmentCount: 33,
    makeID: "Toyota Supra",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 247,
    price: 63469,
    mileage: 64206,
    registrationDate: 2015,
    equipmentCount: 23,
    makeID: "Audi A5",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 248,
    price: 23586,
    mileage: 8265,
    registrationDate: 1998,
    equipmentCount: 34,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 249,
    price: 50140,
    mileage: 79366,
    registrationDate: 2016,
    equipmentCount: 16,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 250,
    price: 21383,
    mileage: 90911,
    registrationDate: 1983,
    equipmentCount: 7,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 251,
    price: 58343,
    mileage: 118979,
    registrationDate: 2013,
    equipmentCount: 11,
    makeID: "Audi A5",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 252,
    price: 32626,
    mileage: 66111,
    registrationDate: 1988,
    equipmentCount: 10,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 253,
    price: 40746,
    mileage: 236962,
    registrationDate: 2004,
    equipmentCount: 10,
    makeID: "Audi A3",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 254,
    price: 44800,
    mileage: 150844,
    registrationDate: 1992,
    equipmentCount: 10,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 255,
    price: 17040,
    mileage: 192074,
    registrationDate: 1997,
    equipmentCount: 29,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 256,
    price: 96484,
    mileage: 51397,
    registrationDate: 2015,
    equipmentCount: 38,
    makeID: "Audi A5",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 257,
    price: 92823,
    mileage: 55156,
    registrationDate: 2019,
    equipmentCount: 29,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 258,
    price: 71816,
    mileage: 193053,
    registrationDate: 1987,
    equipmentCount: 24,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 259,
    price: 43509,
    mileage: 180875,
    registrationDate: 1983,
    equipmentCount: 33,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 260,
    price: 69665,
    mileage: 71212,
    registrationDate: 1990,
    equipmentCount: 8,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 261,
    price: 79781,
    mileage: 16551,
    registrationDate: 2019,
    equipmentCount: 17,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 262,
    price: 48982,
    mileage: 84987,
    registrationDate: 2004,
    equipmentCount: 8,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 263,
    price: 68181,
    mileage: 13732,
    registrationDate: 2000,
    equipmentCount: 37,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 264,
    price: 52200,
    mileage: 32416,
    registrationDate: 2019,
    equipmentCount: 29,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 265,
    price: 22276,
    mileage: 187863,
    registrationDate: 2018,
    equipmentCount: 6,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 266,
    price: 76983,
    mileage: 112063,
    registrationDate: 2001,
    equipmentCount: 24,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 267,
    price: 28022,
    mileage: 57139,
    registrationDate: 1993,
    equipmentCount: 15,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 268,
    price: 25655,
    mileage: 234029,
    registrationDate: 2002,
    equipmentCount: 8,
    makeID: "Ford Mustang",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 269,
    price: 49204,
    mileage: 80557,
    registrationDate: 1983,
    equipmentCount: 16,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 270,
    price: 82202,
    mileage: 56757,
    registrationDate: 2009,
    equipmentCount: 16,
    makeID: "Ford Mustang",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 271,
    price: 44498,
    mileage: 145837,
    registrationDate: 2008,
    equipmentCount: 6,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 272,
    price: 3791,
    mileage: 146463,
    registrationDate: 1985,
    equipmentCount: 5,
    makeID: "Toyota Supra",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 273,
    price: 19823,
    mileage: 79318,
    registrationDate: 2016,
    equipmentCount: 10,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 274,
    price: 51603,
    mileage: 248121,
    registrationDate: 1995,
    equipmentCount: 14,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 275,
    price: 30690,
    mileage: 227575,
    registrationDate: 1997,
    equipmentCount: 8,
    makeID: "Ford Mustang",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 276,
    price: 68069,
    mileage: 92611,
    registrationDate: 2020,
    equipmentCount: 10,
    makeID: "Ford Mustang",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 277,
    price: 5064,
    mileage: 192674,
    registrationDate: 2010,
    equipmentCount: 17,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 278,
    price: 42037,
    mileage: 101482,
    registrationDate: 1990,
    equipmentCount: 9,
    makeID: "Ford Mustang",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 279,
    price: 95100,
    mileage: 73312,
    registrationDate: 2013,
    equipmentCount: 6,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 280,
    price: 72748,
    mileage: 111856,
    registrationDate: 1983,
    equipmentCount: 39,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 281,
    price: 71282,
    mileage: 101970,
    registrationDate: 1998,
    equipmentCount: 12,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 282,
    price: 4451,
    mileage: 53319,
    registrationDate: 1987,
    equipmentCount: 34,
    makeID: "Audi A3",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 283,
    price: 11373,
    mileage: 221919,
    registrationDate: 2021,
    equipmentCount: 17,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 284,
    price: 38646,
    mileage: 233545,
    registrationDate: 2011,
    equipmentCount: 34,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 285,
    price: 47349,
    mileage: 126083,
    registrationDate: 1992,
    equipmentCount: 38,
    makeID: "Audi A5",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 286,
    price: 5288,
    mileage: 53671,
    registrationDate: 2014,
    equipmentCount: 5,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 287,
    price: 48022,
    mileage: 224561,
    registrationDate: 2000,
    equipmentCount: 30,
    makeID: "Ford Mustang",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 288,
    price: 5935,
    mileage: 6349,
    registrationDate: 1996,
    equipmentCount: 37,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 289,
    price: 28255,
    mileage: 30003,
    registrationDate: 1983,
    equipmentCount: 14,
    makeID: "Audi A5",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 290,
    price: 32809,
    mileage: 105119,
    registrationDate: 1991,
    equipmentCount: 10,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 291,
    price: 70444,
    mileage: 232466,
    registrationDate: 2000,
    equipmentCount: 11,
    makeID: "Ford Mustang",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 292,
    price: 65248,
    mileage: 76447,
    registrationDate: 2001,
    equipmentCount: 36,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 293,
    price: 20073,
    mileage: 149047,
    registrationDate: 1982,
    equipmentCount: 26,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 294,
    price: 48923,
    mileage: 169470,
    registrationDate: 1989,
    equipmentCount: 25,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 295,
    price: 22412,
    mileage: 144954,
    registrationDate: 1990,
    equipmentCount: 40,
    makeID: "Toyota Supra",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 296,
    price: 9946,
    mileage: 217816,
    registrationDate: 2004,
    equipmentCount: 23,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 297,
    price: 39140,
    mileage: 28732,
    registrationDate: 2001,
    equipmentCount: 32,
    makeID: "Audi A5",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 298,
    price: 23325,
    mileage: 218428,
    registrationDate: 2018,
    equipmentCount: 36,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 299,
    price: 53065,
    mileage: 176371,
    registrationDate: 1990,
    equipmentCount: 6,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 300,
    price: 56978,
    mileage: 186055,
    registrationDate: 2004,
    equipmentCount: 33,
    makeID: "Toyota Supra",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 301,
    price: 40203,
    mileage: 180363,
    registrationDate: 2012,
    equipmentCount: 34,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 302,
    price: 69200,
    mileage: 168763,
    registrationDate: 2004,
    equipmentCount: 8,
    makeID: "Audi A5",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 303,
    price: 68582,
    mileage: 91566,
    registrationDate: 1987,
    equipmentCount: 16,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 304,
    price: 89265,
    mileage: 51417,
    registrationDate: 2006,
    equipmentCount: 22,
    makeID: "Audi A3",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 305,
    price: 16560,
    mileage: 80526,
    registrationDate: 2019,
    equipmentCount: 37,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 306,
    price: 3794,
    mileage: 194966,
    registrationDate: 1983,
    equipmentCount: 24,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 307,
    price: 19064,
    mileage: 186363,
    registrationDate: 2014,
    equipmentCount: 13,
    makeID: "Audi A5",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 308,
    price: 37679,
    mileage: 24931,
    registrationDate: 2018,
    equipmentCount: 14,
    makeID: "Audi A3",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 309,
    price: 21994,
    mileage: 22154,
    registrationDate: 1988,
    equipmentCount: 6,
    makeID: "Toyota Supra",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 310,
    price: 95670,
    mileage: 178385,
    registrationDate: 2008,
    equipmentCount: 10,
    makeID: "Ford Mustang",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 311,
    price: 26189,
    mileage: 131917,
    registrationDate: 2003,
    equipmentCount: 6,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 312,
    price: 39327,
    mileage: 236443,
    registrationDate: 1988,
    equipmentCount: 9,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 313,
    price: 59041,
    mileage: 111459,
    registrationDate: 2010,
    equipmentCount: 19,
    makeID: "Toyota Supra",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 314,
    price: 46461,
    mileage: 207378,
    registrationDate: 1996,
    equipmentCount: 27,
    makeID: "Toyota Supra",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 315,
    price: 76631,
    mileage: 222947,
    registrationDate: 1992,
    equipmentCount: 25,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 316,
    price: 68044,
    mileage: 26854,
    registrationDate: 1985,
    equipmentCount: 17,
    makeID: "Toyota Supra",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 317,
    price: 44652,
    mileage: 134743,
    registrationDate: 2015,
    equipmentCount: 13,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 318,
    price: 65672,
    mileage: 153946,
    registrationDate: 1997,
    equipmentCount: 6,
    makeID: "Audi A3",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 319,
    price: 29867,
    mileage: 103480,
    registrationDate: 1992,
    equipmentCount: 19,
    makeID: "Audi A3",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 320,
    price: 59165,
    mileage: 51735,
    registrationDate: 2014,
    equipmentCount: 25,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 321,
    price: 83067,
    mileage: 166510,
    registrationDate: 2000,
    equipmentCount: 36,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 322,
    price: 28978,
    mileage: 74727,
    registrationDate: 1999,
    equipmentCount: 31,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 323,
    price: 8688,
    mileage: 173619,
    registrationDate: 1994,
    equipmentCount: 14,
    makeID: "Audi A3",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 324,
    price: 12808,
    mileage: 121250,
    registrationDate: 2010,
    equipmentCount: 17,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 325,
    price: 93583,
    mileage: 141546,
    registrationDate: 1988,
    equipmentCount: 30,
    makeID: "Toyota Supra",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 326,
    price: 21095,
    mileage: 51506,
    registrationDate: 1994,
    equipmentCount: 21,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 327,
    price: 55551,
    mileage: 150694,
    registrationDate: 1980,
    equipmentCount: 20,
    makeID: "Toyota Supra",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 328,
    price: 49448,
    mileage: 228117,
    registrationDate: 1989,
    equipmentCount: 20,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 329,
    price: 13093,
    mileage: 139080,
    registrationDate: 2000,
    equipmentCount: 14,
    makeID: "Ford Mustang",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 330,
    price: 17675,
    mileage: 115484,
    registrationDate: 2016,
    equipmentCount: 30,
    makeID: "Audi A5",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 331,
    price: 28128,
    mileage: 236161,
    registrationDate: 2012,
    equipmentCount: 36,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 332,
    price: 49957,
    mileage: 163999,
    registrationDate: 2009,
    equipmentCount: 22,
    makeID: "Ford Mustang",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 333,
    price: 74275,
    mileage: 221567,
    registrationDate: 2004,
    equipmentCount: 14,
    makeID: "Audi A3",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 334,
    price: 33347,
    mileage: 155277,
    registrationDate: 2006,
    equipmentCount: 26,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 335,
    price: 52970,
    mileage: 131177,
    registrationDate: 2002,
    equipmentCount: 7,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 336,
    price: 32193,
    mileage: 223236,
    registrationDate: 1985,
    equipmentCount: 14,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 337,
    price: 83524,
    mileage: 67347,
    registrationDate: 1992,
    equipmentCount: 13,
    makeID: "Audi A5",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 338,
    price: 90440,
    mileage: 128673,
    registrationDate: 1983,
    equipmentCount: 26,
    makeID: "Ford Mustang",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 339,
    price: 29579,
    mileage: 52283,
    registrationDate: 1983,
    equipmentCount: 39,
    makeID: "Audi A3",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 340,
    price: 79364,
    mileage: 27439,
    registrationDate: 2017,
    equipmentCount: 32,
    makeID: "Ford Mustang",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 341,
    price: 78189,
    mileage: 1992,
    registrationDate: 1998,
    equipmentCount: 40,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 342,
    price: 94643,
    mileage: 202300,
    registrationDate: 1995,
    equipmentCount: 14,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 343,
    price: 5839,
    mileage: 159812,
    registrationDate: 2021,
    equipmentCount: 12,
    makeID: "Toyota Supra",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 344,
    price: 16323,
    mileage: 207315,
    registrationDate: 2002,
    equipmentCount: 33,
    makeID: "Audi A5",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 345,
    price: 36201,
    mileage: 150211,
    registrationDate: 1994,
    equipmentCount: 35,
    makeID: "Ford Mustang",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 346,
    price: 6222,
    mileage: 93591,
    registrationDate: 1996,
    equipmentCount: 28,
    makeID: "Toyota Supra",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 347,
    price: 89588,
    mileage: 226245,
    registrationDate: 2012,
    equipmentCount: 6,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 348,
    price: 63536,
    mileage: 113089,
    registrationDate: 1994,
    equipmentCount: 40,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 349,
    price: 8925,
    mileage: 111824,
    registrationDate: 1987,
    equipmentCount: 25,
    makeID: "Audi A3",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 350,
    price: 56520,
    mileage: 3513,
    registrationDate: 2008,
    equipmentCount: 15,
    makeID: "Audi A3",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 351,
    price: 99430,
    mileage: 167946,
    registrationDate: 1993,
    equipmentCount: 20,
    makeID: "Ford Mustang",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 352,
    price: 29129,
    mileage: 40952,
    registrationDate: 2016,
    equipmentCount: 9,
    makeID: "Audi A5",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 353,
    price: 8404,
    mileage: 104116,
    registrationDate: 1981,
    equipmentCount: 38,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 354,
    price: 10846,
    mileage: 43187,
    registrationDate: 1982,
    equipmentCount: 13,
    makeID: "Ford Mustang",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 355,
    price: 6517,
    mileage: 25733,
    registrationDate: 1997,
    equipmentCount: 14,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 356,
    price: 4801,
    mileage: 190044,
    registrationDate: 2001,
    equipmentCount: 13,
    makeID: "Ford Mustang",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 357,
    price: 61369,
    mileage: 218949,
    registrationDate: 1998,
    equipmentCount: 30,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 358,
    price: 8073,
    mileage: 153497,
    registrationDate: 1990,
    equipmentCount: 37,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 359,
    price: 39730,
    mileage: 32463,
    registrationDate: 1996,
    equipmentCount: 6,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 360,
    price: 99601,
    mileage: 162781,
    registrationDate: 1980,
    equipmentCount: 32,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 361,
    price: 33588,
    mileage: 116038,
    registrationDate: 2002,
    equipmentCount: 39,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 362,
    price: 88980,
    mileage: 77389,
    registrationDate: 2002,
    equipmentCount: 6,
    makeID: "Toyota Supra",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 363,
    price: 93733,
    mileage: 150172,
    registrationDate: 2019,
    equipmentCount: 20,
    makeID: "Audi A3",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 364,
    price: 3404,
    mileage: 147212,
    registrationDate: 2012,
    equipmentCount: 37,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 365,
    price: 97731,
    mileage: 72452,
    registrationDate: 1995,
    equipmentCount: 9,
    makeID: "Ford Mustang",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 366,
    price: 92591,
    mileage: 116549,
    registrationDate: 2008,
    equipmentCount: 20,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 367,
    price: 49396,
    mileage: 127742,
    registrationDate: 2001,
    equipmentCount: 35,
    makeID: "Toyota Supra",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 368,
    price: 56813,
    mileage: 63504,
    registrationDate: 1983,
    equipmentCount: 6,
    makeID: "Ford Mustang",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 369,
    price: 29783,
    mileage: 169778,
    registrationDate: 1982,
    equipmentCount: 39,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 370,
    price: 53978,
    mileage: 67571,
    registrationDate: 2015,
    equipmentCount: 36,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 371,
    price: 96361,
    mileage: 225259,
    registrationDate: 2012,
    equipmentCount: 38,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 372,
    price: 7574,
    mileage: 190884,
    registrationDate: 1981,
    equipmentCount: 25,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 373,
    price: 82173,
    mileage: 196180,
    registrationDate: 2007,
    equipmentCount: 5,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 374,
    price: 58825,
    mileage: 37096,
    registrationDate: 1980,
    equipmentCount: 14,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 375,
    price: 99219,
    mileage: 197320,
    registrationDate: 1995,
    equipmentCount: 9,
    makeID: "Audi A5",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 376,
    price: 86591,
    mileage: 7298,
    registrationDate: 1990,
    equipmentCount: 35,
    makeID: "Audi A5",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 377,
    price: 84939,
    mileage: 88563,
    registrationDate: 1981,
    equipmentCount: 13,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 378,
    price: 26001,
    mileage: 161865,
    registrationDate: 1981,
    equipmentCount: 13,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 379,
    price: 32431,
    mileage: 74040,
    registrationDate: 2005,
    equipmentCount: 22,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 380,
    price: 45980,
    mileage: 238212,
    registrationDate: 2017,
    equipmentCount: 9,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 381,
    price: 20165,
    mileage: 70646,
    registrationDate: 2005,
    equipmentCount: 19,
    makeID: "Toyota Supra",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 382,
    price: 37757,
    mileage: 15209,
    registrationDate: 1997,
    equipmentCount: 34,
    makeID: "Mercedes-Benz SLK",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 383,
    price: 88416,
    mileage: 52386,
    registrationDate: 2010,
    equipmentCount: 24,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 384,
    price: 31783,
    mileage: 1285,
    registrationDate: 1985,
    equipmentCount: 24,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 385,
    price: 94871,
    mileage: 20605,
    registrationDate: 2000,
    equipmentCount: 28,
    makeID: "BMW 4-Series",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 386,
    price: 68920,
    mileage: 135232,
    registrationDate: 2013,
    equipmentCount: 15,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Etwas Teuer"
  },
  {
    classified_guid: 387,
    price: 32328,
    mileage: 176167,
    registrationDate: 1999,
    equipmentCount: 8,
    makeID: "Audi A3",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 388,
    price: 11085,
    mileage: 60402,
    registrationDate: 1980,
    equipmentCount: 11,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 389,
    price: 75501,
    mileage: 87408,
    registrationDate: 1995,
    equipmentCount: 24,
    makeID: "Porsche Boxter",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 390,
    price: 84368,
    mileage: 203031,
    registrationDate: 2012,
    equipmentCount: 37,
    makeID: "Toyota Supra",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 391,
    price: 17261,
    mileage: 87265,
    registrationDate: 2017,
    equipmentCount: 29,
    makeID: "BMW 2-Series",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 392,
    price: 62630,
    mileage: 223990,
    registrationDate: 2009,
    equipmentCount: 28,
    makeID: "Audi A3",
    priceEvaluationID: "Keine Angabe"
  },
  {
    classified_guid: 393,
    price: 56510,
    mileage: 157121,
    registrationDate: 2007,
    equipmentCount: 16,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 394,
    price: 97488,
    mileage: 65437,
    registrationDate: 1981,
    equipmentCount: 13,
    makeID: "Porsche Cayman",
    priceEvaluationID: "Gutes Angebot"
  },
  {
    classified_guid: 395,
    price: 10027,
    mileage: 29133,
    registrationDate: 2011,
    equipmentCount: 34,
    makeID: "Audi A3",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 396,
    price: 62688,
    mileage: 235409,
    registrationDate: 1997,
    equipmentCount: 11,
    makeID: "Ford Mustang",
    priceEvaluationID: "Top Angebot"
  },
  {
    classified_guid: 397,
    price: 32194,
    mileage: 10740,
    registrationDate: 1983,
    equipmentCount: 14,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Teuer"
  },
  {
    classified_guid: 398,
    price: 85646,
    mileage: 240851,
    registrationDate: 1994,
    equipmentCount: 34,
    makeID: "Mercedes-Benz C-Class",
    priceEvaluationID: "Faires Angebot"
  },
  {
    classified_guid: 399,
    price: 59905,
    mileage: 139931,
    registrationDate: 2017,
    equipmentCount: 37,
    makeID: "Ford Mustang",
    priceEvaluationID: "Teuer"
  }
];
