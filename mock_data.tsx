export interface ListingSummary {
  classified_guid: number;
  Price: number;
  Mileage: number;
  Registration: number;
  EquipmentCount: number;
  Make: string;
  PriceLabel: string;
}

export interface ListingSummaryDTO {
  classifiedGuid: string;
  price: number;
  mileage: number;
  registrationDate: string;
  equipmentCount: number;
  makeID: number;
  modelID: number;
  priceScoreID: string;
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
    Price: 42651,
    Mileage: 77257,
    Registration: 2010,
    EquipmentCount: 19,
    Make: "Porsche Boxter",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 2,
    Price: 54433,
    Mileage: 245930,
    Registration: 2011,
    EquipmentCount: 37,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 3,
    Price: 61643,
    Mileage: 60228,
    Registration: 2002,
    EquipmentCount: 26,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 4,
    Price: 41291,
    Mileage: 247363,
    Registration: 2003,
    EquipmentCount: 5,
    Make: "Porsche Boxter",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 5,
    Price: 87396,
    Mileage: 16591,
    Registration: 2002,
    EquipmentCount: 20,
    Make: "Audi A5",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 6,
    Price: 34775,
    Mileage: 14469,
    Registration: 1986,
    EquipmentCount: 30,
    Make: "Audi A3",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 7,
    Price: 52712,
    Mileage: 180769,
    Registration: 1990,
    EquipmentCount: 35,
    Make: "Audi A3",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 8,
    Price: 30074,
    Mileage: 226525,
    Registration: 2013,
    EquipmentCount: 39,
    Make: "BMW 2-Series",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 9,
    Price: 81272,
    Mileage: 6248,
    Registration: 2010,
    EquipmentCount: 36,
    Make: "Ford Mustang",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 10,
    Price: 21043,
    Mileage: 90388,
    Registration: 2002,
    EquipmentCount: 23,
    Make: "BMW 2-Series",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 11,
    Price: 31017,
    Mileage: 87896,
    Registration: 2015,
    EquipmentCount: 13,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 12,
    Price: 98055,
    Mileage: 213844,
    Registration: 2010,
    EquipmentCount: 5,
    Make: "BMW 4-Series",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 13,
    Price: 20298,
    Mileage: 172761,
    Registration: 2009,
    EquipmentCount: 6,
    Make: "Toyota Supra",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 14,
    Price: 30052,
    Mileage: 243706,
    Registration: 1990,
    EquipmentCount: 13,
    Make: "BMW 2-Series",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 15,
    Price: 49624,
    Mileage: 130479,
    Registration: 1982,
    EquipmentCount: 16,
    Make: "Porsche Boxter",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 16,
    Price: 59863,
    Mileage: 227070,
    Registration: 2001,
    EquipmentCount: 29,
    Make: "Porsche Boxter",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 17,
    Price: 12769,
    Mileage: 52970,
    Registration: 1981,
    EquipmentCount: 27,
    Make: "BMW 2-Series",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 18,
    Price: 18346,
    Mileage: 41498,
    Registration: 1981,
    EquipmentCount: 16,
    Make: "Audi A5",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 19,
    Price: 69600,
    Mileage: 215347,
    Registration: 2010,
    EquipmentCount: 14,
    Make: "BMW 4-Series",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 20,
    Price: 47147,
    Mileage: 95053,
    Registration: 1982,
    EquipmentCount: 16,
    Make: "Porsche Cayman",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 21,
    Price: 56241,
    Mileage: 229747,
    Registration: 2012,
    EquipmentCount: 7,
    Make: "Toyota Supra",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 22,
    Price: 43066,
    Mileage: 226468,
    Registration: 2018,
    EquipmentCount: 9,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 23,
    Price: 86639,
    Mileage: 17090,
    Registration: 2006,
    EquipmentCount: 29,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 24,
    Price: 75684,
    Mileage: 41292,
    Registration: 2012,
    EquipmentCount: 6,
    Make: "BMW 4-Series",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 25,
    Price: 27133,
    Mileage: 158958,
    Registration: 2000,
    EquipmentCount: 25,
    Make: "Audi A3",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 26,
    Price: 69698,
    Mileage: 234153,
    Registration: 2019,
    EquipmentCount: 9,
    Make: "Audi A3",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 27,
    Price: 36003,
    Mileage: 164818,
    Registration: 1989,
    EquipmentCount: 13,
    Make: "Toyota Supra",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 28,
    Price: 79704,
    Mileage: 154385,
    Registration: 2011,
    EquipmentCount: 16,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 29,
    Price: 84201,
    Mileage: 133460,
    Registration: 2021,
    EquipmentCount: 34,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 30,
    Price: 25183,
    Mileage: 24546,
    Registration: 1990,
    EquipmentCount: 17,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 31,
    Price: 43106,
    Mileage: 4977,
    Registration: 2004,
    EquipmentCount: 20,
    Make: "Porsche Cayman",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 32,
    Price: 43594,
    Mileage: 226118,
    Registration: 2019,
    EquipmentCount: 10,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 33,
    Price: 20716,
    Mileage: 223911,
    Registration: 2009,
    EquipmentCount: 14,
    Make: "Porsche Boxter",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 34,
    Price: 81433,
    Mileage: 89147,
    Registration: 2014,
    EquipmentCount: 33,
    Make: "BMW 4-Series",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 35,
    Price: 20149,
    Mileage: 92062,
    Registration: 2008,
    EquipmentCount: 27,
    Make: "BMW 4-Series",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 36,
    Price: 45042,
    Mileage: 175416,
    Registration: 1994,
    EquipmentCount: 27,
    Make: "Audi A5",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 37,
    Price: 76832,
    Mileage: 142162,
    Registration: 1998,
    EquipmentCount: 26,
    Make: "Audi A3",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 38,
    Price: 75458,
    Mileage: 56950,
    Registration: 1995,
    EquipmentCount: 37,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 39,
    Price: 29694,
    Mileage: 109239,
    Registration: 2001,
    EquipmentCount: 40,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 40,
    Price: 56883,
    Mileage: 132558,
    Registration: 2000,
    EquipmentCount: 16,
    Make: "Porsche Cayman",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 41,
    Price: 3542,
    Mileage: 218091,
    Registration: 1989,
    EquipmentCount: 38,
    Make: "Ford Mustang",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 42,
    Price: 14063,
    Mileage: 5073,
    Registration: 1988,
    EquipmentCount: 16,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 43,
    Price: 8009,
    Mileage: 40702,
    Registration: 1980,
    EquipmentCount: 21,
    Make: "Toyota Supra",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 44,
    Price: 78707,
    Mileage: 226344,
    Registration: 2016,
    EquipmentCount: 40,
    Make: "Ford Mustang",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 45,
    Price: 6516,
    Mileage: 188656,
    Registration: 1990,
    EquipmentCount: 40,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 46,
    Price: 11715,
    Mileage: 214914,
    Registration: 1999,
    EquipmentCount: 25,
    Make: "Audi A5",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 47,
    Price: 97323,
    Mileage: 175114,
    Registration: 1986,
    EquipmentCount: 14,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 48,
    Price: 72047,
    Mileage: 131425,
    Registration: 2015,
    EquipmentCount: 31,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 49,
    Price: 78967,
    Mileage: 77214,
    Registration: 2009,
    EquipmentCount: 14,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 50,
    Price: 77802,
    Mileage: 135840,
    Registration: 2015,
    EquipmentCount: 10,
    Make: "Porsche Cayman",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 51,
    Price: 29758,
    Mileage: 187873,
    Registration: 2000,
    EquipmentCount: 35,
    Make: "BMW 4-Series",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 52,
    Price: 95794,
    Mileage: 117114,
    Registration: 1982,
    EquipmentCount: 22,
    Make: "BMW 2-Series",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 53,
    Price: 45522,
    Mileage: 34097,
    Registration: 2003,
    EquipmentCount: 16,
    Make: "Ford Mustang",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 54,
    Price: 8669,
    Mileage: 199621,
    Registration: 2006,
    EquipmentCount: 36,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 55,
    Price: 81723,
    Mileage: 37006,
    Registration: 1999,
    EquipmentCount: 38,
    Make: "Audi A5",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 56,
    Price: 58843,
    Mileage: 214360,
    Registration: 1991,
    EquipmentCount: 25,
    Make: "Porsche Boxter",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 57,
    Price: 29183,
    Mileage: 168398,
    Registration: 1982,
    EquipmentCount: 28,
    Make: "Audi A5",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 58,
    Price: 47029,
    Mileage: 83000,
    Registration: 2010,
    EquipmentCount: 9,
    Make: "BMW 4-Series",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 59,
    Price: 69790,
    Mileage: 83433,
    Registration: 1995,
    EquipmentCount: 21,
    Make: "Audi A5",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 60,
    Price: 8020,
    Mileage: 240283,
    Registration: 2010,
    EquipmentCount: 19,
    Make: "BMW 4-Series",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 61,
    Price: 35617,
    Mileage: 114500,
    Registration: 1989,
    EquipmentCount: 16,
    Make: "Audi A5",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 62,
    Price: 13487,
    Mileage: 107526,
    Registration: 1986,
    EquipmentCount: 13,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 63,
    Price: 71828,
    Mileage: 21594,
    Registration: 2008,
    EquipmentCount: 29,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 64,
    Price: 4749,
    Mileage: 91052,
    Registration: 1992,
    EquipmentCount: 19,
    Make: "Ford Mustang",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 65,
    Price: 59734,
    Mileage: 194453,
    Registration: 2006,
    EquipmentCount: 6,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 66,
    Price: 72277,
    Mileage: 45852,
    Registration: 2019,
    EquipmentCount: 17,
    Make: "BMW 4-Series",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 67,
    Price: 42458,
    Mileage: 26537,
    Registration: 2010,
    EquipmentCount: 39,
    Make: "BMW 2-Series",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 68,
    Price: 59761,
    Mileage: 186689,
    Registration: 2014,
    EquipmentCount: 18,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 69,
    Price: 63928,
    Mileage: 102910,
    Registration: 1991,
    EquipmentCount: 24,
    Make: "Porsche Cayman",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 70,
    Price: 40012,
    Mileage: 165266,
    Registration: 2018,
    EquipmentCount: 25,
    Make: "Porsche Boxter",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 71,
    Price: 90675,
    Mileage: 45980,
    Registration: 1992,
    EquipmentCount: 18,
    Make: "Porsche Boxter",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 72,
    Price: 53518,
    Mileage: 85348,
    Registration: 1986,
    EquipmentCount: 16,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 73,
    Price: 18160,
    Mileage: 239030,
    Registration: 1999,
    EquipmentCount: 24,
    Make: "Porsche Boxter",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 74,
    Price: 11248,
    Mileage: 89401,
    Registration: 2008,
    EquipmentCount: 26,
    Make: "Porsche Boxter",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 75,
    Price: 3402,
    Mileage: 180110,
    Registration: 2017,
    EquipmentCount: 16,
    Make: "BMW 2-Series",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 76,
    Price: 98012,
    Mileage: 78556,
    Registration: 1998,
    EquipmentCount: 23,
    Make: "Porsche Boxter",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 77,
    Price: 25797,
    Mileage: 7037,
    Registration: 1981,
    EquipmentCount: 33,
    Make: "Audi A3",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 78,
    Price: 35055,
    Mileage: 215015,
    Registration: 2005,
    EquipmentCount: 15,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 79,
    Price: 26765,
    Mileage: 77646,
    Registration: 2006,
    EquipmentCount: 5,
    Make: "Toyota Supra",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 80,
    Price: 48745,
    Mileage: 65477,
    Registration: 1999,
    EquipmentCount: 22,
    Make: "Audi A5",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 81,
    Price: 88514,
    Mileage: 158338,
    Registration: 2005,
    EquipmentCount: 11,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 82,
    Price: 79607,
    Mileage: 19097,
    Registration: 1986,
    EquipmentCount: 39,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 83,
    Price: 59189,
    Mileage: 139453,
    Registration: 2018,
    EquipmentCount: 24,
    Make: "Audi A5",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 84,
    Price: 15987,
    Mileage: 81885,
    Registration: 1990,
    EquipmentCount: 26,
    Make: "BMW 4-Series",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 85,
    Price: 6936,
    Mileage: 68715,
    Registration: 2008,
    EquipmentCount: 5,
    Make: "Audi A5",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 86,
    Price: 47934,
    Mileage: 152316,
    Registration: 2011,
    EquipmentCount: 28,
    Make: "Ford Mustang",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 87,
    Price: 8131,
    Mileage: 48421,
    Registration: 1992,
    EquipmentCount: 27,
    Make: "Ford Mustang",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 88,
    Price: 99244,
    Mileage: 223259,
    Registration: 1985,
    EquipmentCount: 12,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 89,
    Price: 60535,
    Mileage: 79348,
    Registration: 2002,
    EquipmentCount: 29,
    Make: "Audi A5",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 90,
    Price: 73745,
    Mileage: 58879,
    Registration: 2018,
    EquipmentCount: 29,
    Make: "Porsche Boxter",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 91,
    Price: 33470,
    Mileage: 213641,
    Registration: 2017,
    EquipmentCount: 26,
    Make: "Toyota Supra",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 92,
    Price: 65654,
    Mileage: 5914,
    Registration: 1985,
    EquipmentCount: 24,
    Make: "BMW 2-Series",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 93,
    Price: 76584,
    Mileage: 117245,
    Registration: 2015,
    EquipmentCount: 13,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 94,
    Price: 11270,
    Mileage: 189100,
    Registration: 2000,
    EquipmentCount: 37,
    Make: "Toyota Supra",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 95,
    Price: 23231,
    Mileage: 88015,
    Registration: 1990,
    EquipmentCount: 11,
    Make: "Porsche Cayman",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 96,
    Price: 29843,
    Mileage: 184333,
    Registration: 2015,
    EquipmentCount: 18,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 97,
    Price: 88491,
    Mileage: 180204,
    Registration: 2005,
    EquipmentCount: 12,
    Make: "BMW 4-Series",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 98,
    Price: 15734,
    Mileage: 214076,
    Registration: 2014,
    EquipmentCount: 6,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 99,
    Price: 40862,
    Mileage: 25470,
    Registration: 1992,
    EquipmentCount: 10,
    Make: "Porsche Boxter",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 100,
    Price: 10723,
    Mileage: 77755,
    Registration: 1992,
    EquipmentCount: 17,
    Make: "Porsche Boxter",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 101,
    Price: 98747,
    Mileage: 65770,
    Registration: 2007,
    EquipmentCount: 30,
    Make: "BMW 2-Series",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 102,
    Price: 63297,
    Mileage: 104492,
    Registration: 1995,
    EquipmentCount: 23,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 103,
    Price: 40285,
    Mileage: 195699,
    Registration: 2016,
    EquipmentCount: 26,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 104,
    Price: 4428,
    Mileage: 219772,
    Registration: 2001,
    EquipmentCount: 16,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 105,
    Price: 62237,
    Mileage: 122150,
    Registration: 1981,
    EquipmentCount: 26,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 106,
    Price: 33852,
    Mileage: 67795,
    Registration: 1997,
    EquipmentCount: 7,
    Make: "Porsche Cayman",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 107,
    Price: 30093,
    Mileage: 196691,
    Registration: 2004,
    EquipmentCount: 25,
    Make: "Porsche Cayman",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 108,
    Price: 29393,
    Mileage: 195035,
    Registration: 2004,
    EquipmentCount: 39,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 109,
    Price: 16073,
    Mileage: 67946,
    Registration: 1999,
    EquipmentCount: 19,
    Make: "BMW 2-Series",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 110,
    Price: 59005,
    Mileage: 15440,
    Registration: 2011,
    EquipmentCount: 33,
    Make: "BMW 4-Series",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 111,
    Price: 59089,
    Mileage: 189058,
    Registration: 1986,
    EquipmentCount: 39,
    Make: "BMW 2-Series",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 112,
    Price: 3992,
    Mileage: 195059,
    Registration: 2003,
    EquipmentCount: 38,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 113,
    Price: 47804,
    Mileage: 114643,
    Registration: 2001,
    EquipmentCount: 21,
    Make: "BMW 4-Series",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 114,
    Price: 84620,
    Mileage: 151252,
    Registration: 2009,
    EquipmentCount: 16,
    Make: "Toyota Supra",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 115,
    Price: 18873,
    Mileage: 103881,
    Registration: 2013,
    EquipmentCount: 22,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 116,
    Price: 78295,
    Mileage: 189563,
    Registration: 2009,
    EquipmentCount: 36,
    Make: "Audi A3",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 117,
    Price: 5692,
    Mileage: 32758,
    Registration: 2005,
    EquipmentCount: 12,
    Make: "Ford Mustang",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 118,
    Price: 17797,
    Mileage: 38643,
    Registration: 2000,
    EquipmentCount: 30,
    Make: "Porsche Boxter",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 119,
    Price: 93337,
    Mileage: 175201,
    Registration: 2010,
    EquipmentCount: 12,
    Make: "Porsche Boxter",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 120,
    Price: 12256,
    Mileage: 129322,
    Registration: 2003,
    EquipmentCount: 39,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 121,
    Price: 84392,
    Mileage: 77121,
    Registration: 1984,
    EquipmentCount: 27,
    Make: "Audi A5",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 122,
    Price: 43529,
    Mileage: 75050,
    Registration: 2003,
    EquipmentCount: 37,
    Make: "Audi A5",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 123,
    Price: 82517,
    Mileage: 161327,
    Registration: 1991,
    EquipmentCount: 31,
    Make: "Audi A5",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 124,
    Price: 82680,
    Mileage: 196757,
    Registration: 2013,
    EquipmentCount: 26,
    Make: "Porsche Cayman",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 125,
    Price: 79295,
    Mileage: 70136,
    Registration: 2008,
    EquipmentCount: 19,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 126,
    Price: 31302,
    Mileage: 7405,
    Registration: 2012,
    EquipmentCount: 36,
    Make: "Ford Mustang",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 127,
    Price: 79792,
    Mileage: 166936,
    Registration: 2021,
    EquipmentCount: 23,
    Make: "Audi A3",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 128,
    Price: 17006,
    Mileage: 149274,
    Registration: 2010,
    EquipmentCount: 33,
    Make: "Porsche Cayman",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 129,
    Price: 72752,
    Mileage: 215229,
    Registration: 1984,
    EquipmentCount: 18,
    Make: "Audi A5",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 130,
    Price: 15841,
    Mileage: 204403,
    Registration: 2006,
    EquipmentCount: 16,
    Make: "Audi A5",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 131,
    Price: 70791,
    Mileage: 101082,
    Registration: 2003,
    EquipmentCount: 31,
    Make: "BMW 4-Series",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 132,
    Price: 28646,
    Mileage: 14555,
    Registration: 1981,
    EquipmentCount: 7,
    Make: "Audi A5",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 133,
    Price: 44155,
    Mileage: 96770,
    Registration: 2018,
    EquipmentCount: 22,
    Make: "BMW 2-Series",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 134,
    Price: 59406,
    Mileage: 46035,
    Registration: 1981,
    EquipmentCount: 9,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 135,
    Price: 95659,
    Mileage: 105971,
    Registration: 2007,
    EquipmentCount: 17,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 136,
    Price: 34354,
    Mileage: 122571,
    Registration: 2013,
    EquipmentCount: 25,
    Make: "BMW 4-Series",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 137,
    Price: 10787,
    Mileage: 41524,
    Registration: 1998,
    EquipmentCount: 13,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 138,
    Price: 69790,
    Mileage: 71553,
    Registration: 1989,
    EquipmentCount: 20,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 139,
    Price: 27547,
    Mileage: 87237,
    Registration: 2011,
    EquipmentCount: 15,
    Make: "Porsche Boxter",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 140,
    Price: 61311,
    Mileage: 158830,
    Registration: 1999,
    EquipmentCount: 17,
    Make: "Audi A3",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 141,
    Price: 80901,
    Mileage: 103156,
    Registration: 2019,
    EquipmentCount: 19,
    Make: "Toyota Supra",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 142,
    Price: 94687,
    Mileage: 246077,
    Registration: 2007,
    EquipmentCount: 31,
    Make: "Porsche Boxter",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 143,
    Price: 44500,
    Mileage: 193009,
    Registration: 1981,
    EquipmentCount: 12,
    Make: "Porsche Cayman",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 144,
    Price: 25933,
    Mileage: 112884,
    Registration: 2019,
    EquipmentCount: 21,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 145,
    Price: 50104,
    Mileage: 210149,
    Registration: 2020,
    EquipmentCount: 39,
    Make: "Toyota Supra",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 146,
    Price: 17526,
    Mileage: 88865,
    Registration: 2009,
    EquipmentCount: 38,
    Make: "Audi A3",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 147,
    Price: 6031,
    Mileage: 57421,
    Registration: 1989,
    EquipmentCount: 40,
    Make: "Ford Mustang",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 148,
    Price: 16416,
    Mileage: 218311,
    Registration: 1995,
    EquipmentCount: 24,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 149,
    Price: 7601,
    Mileage: 161749,
    Registration: 2018,
    EquipmentCount: 28,
    Make: "BMW 4-Series",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 150,
    Price: 38887,
    Mileage: 183788,
    Registration: 2018,
    EquipmentCount: 25,
    Make: "Ford Mustang",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 151,
    Price: 64327,
    Mileage: 188435,
    Registration: 2008,
    EquipmentCount: 37,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 152,
    Price: 48998,
    Mileage: 74639,
    Registration: 1993,
    EquipmentCount: 13,
    Make: "BMW 4-Series",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 153,
    Price: 10075,
    Mileage: 157910,
    Registration: 2017,
    EquipmentCount: 40,
    Make: "BMW 2-Series",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 154,
    Price: 71487,
    Mileage: 87984,
    Registration: 2017,
    EquipmentCount: 31,
    Make: "BMW 4-Series",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 155,
    Price: 36916,
    Mileage: 243819,
    Registration: 2005,
    EquipmentCount: 23,
    Make: "Toyota Supra",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 156,
    Price: 9928,
    Mileage: 232992,
    Registration: 2008,
    EquipmentCount: 24,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 157,
    Price: 70836,
    Mileage: 135412,
    Registration: 2008,
    EquipmentCount: 24,
    Make: "BMW 2-Series",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 158,
    Price: 49969,
    Mileage: 133003,
    Registration: 2006,
    EquipmentCount: 38,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 159,
    Price: 79308,
    Mileage: 122117,
    Registration: 1995,
    EquipmentCount: 18,
    Make: "BMW 4-Series",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 160,
    Price: 3066,
    Mileage: 90504,
    Registration: 2014,
    EquipmentCount: 15,
    Make: "BMW 4-Series",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 161,
    Price: 24789,
    Mileage: 208465,
    Registration: 1986,
    EquipmentCount: 5,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 162,
    Price: 73480,
    Mileage: 101041,
    Registration: 1992,
    EquipmentCount: 35,
    Make: "Ford Mustang",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 163,
    Price: 55987,
    Mileage: 206800,
    Registration: 2001,
    EquipmentCount: 18,
    Make: "Toyota Supra",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 164,
    Price: 17605,
    Mileage: 103770,
    Registration: 1987,
    EquipmentCount: 19,
    Make: "Porsche Boxter",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 165,
    Price: 19458,
    Mileage: 98320,
    Registration: 1994,
    EquipmentCount: 14,
    Make: "Audi A3",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 166,
    Price: 46205,
    Mileage: 73353,
    Registration: 1991,
    EquipmentCount: 12,
    Make: "BMW 4-Series",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 167,
    Price: 93353,
    Mileage: 70523,
    Registration: 1995,
    EquipmentCount: 17,
    Make: "Porsche Cayman",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 168,
    Price: 7661,
    Mileage: 102767,
    Registration: 2007,
    EquipmentCount: 7,
    Make: "Audi A5",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 169,
    Price: 49151,
    Mileage: 20859,
    Registration: 1991,
    EquipmentCount: 28,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 170,
    Price: 28652,
    Mileage: 81282,
    Registration: 2018,
    EquipmentCount: 19,
    Make: "BMW 2-Series",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 171,
    Price: 76050,
    Mileage: 103842,
    Registration: 2006,
    EquipmentCount: 16,
    Make: "Ford Mustang",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 172,
    Price: 26693,
    Mileage: 176744,
    Registration: 2006,
    EquipmentCount: 38,
    Make: "Audi A5",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 173,
    Price: 17793,
    Mileage: 42418,
    Registration: 1995,
    EquipmentCount: 37,
    Make: "Ford Mustang",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 174,
    Price: 4666,
    Mileage: 192413,
    Registration: 2013,
    EquipmentCount: 25,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 175,
    Price: 93307,
    Mileage: 192345,
    Registration: 1985,
    EquipmentCount: 14,
    Make: "Porsche Boxter",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 176,
    Price: 80685,
    Mileage: 13748,
    Registration: 2000,
    EquipmentCount: 37,
    Make: "BMW 2-Series",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 177,
    Price: 6044,
    Mileage: 66041,
    Registration: 2006,
    EquipmentCount: 35,
    Make: "BMW 4-Series",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 178,
    Price: 85876,
    Mileage: 151046,
    Registration: 2009,
    EquipmentCount: 36,
    Make: "Audi A5",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 179,
    Price: 39604,
    Mileage: 199112,
    Registration: 2000,
    EquipmentCount: 39,
    Make: "Porsche Boxter",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 180,
    Price: 79335,
    Mileage: 101412,
    Registration: 1993,
    EquipmentCount: 33,
    Make: "Toyota Supra",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 181,
    Price: 88950,
    Mileage: 104296,
    Registration: 2006,
    EquipmentCount: 11,
    Make: "Audi A5",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 182,
    Price: 92321,
    Mileage: 165010,
    Registration: 2004,
    EquipmentCount: 31,
    Make: "Porsche Cayman",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 183,
    Price: 89313,
    Mileage: 170592,
    Registration: 2021,
    EquipmentCount: 15,
    Make: "Porsche Cayman",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 184,
    Price: 91211,
    Mileage: 111932,
    Registration: 1991,
    EquipmentCount: 19,
    Make: "Porsche Boxter",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 185,
    Price: 40835,
    Mileage: 91247,
    Registration: 2008,
    EquipmentCount: 14,
    Make: "Porsche Boxter",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 186,
    Price: 68473,
    Mileage: 150551,
    Registration: 2019,
    EquipmentCount: 30,
    Make: "Porsche Boxter",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 187,
    Price: 46213,
    Mileage: 55754,
    Registration: 1982,
    EquipmentCount: 10,
    Make: "Audi A5",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 188,
    Price: 35440,
    Mileage: 220926,
    Registration: 1994,
    EquipmentCount: 16,
    Make: "BMW 2-Series",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 189,
    Price: 36729,
    Mileage: 221394,
    Registration: 2011,
    EquipmentCount: 20,
    Make: "Porsche Boxter",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 190,
    Price: 19217,
    Mileage: 54301,
    Registration: 1992,
    EquipmentCount: 36,
    Make: "BMW 2-Series",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 191,
    Price: 56163,
    Mileage: 99705,
    Registration: 2010,
    EquipmentCount: 36,
    Make: "Audi A5",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 192,
    Price: 43636,
    Mileage: 70400,
    Registration: 2008,
    EquipmentCount: 26,
    Make: "BMW 2-Series",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 193,
    Price: 78267,
    Mileage: 67426,
    Registration: 1981,
    EquipmentCount: 40,
    Make: "Porsche Cayman",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 194,
    Price: 84414,
    Mileage: 184696,
    Registration: 2008,
    EquipmentCount: 5,
    Make: "Audi A3",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 195,
    Price: 95292,
    Mileage: 242988,
    Registration: 1982,
    EquipmentCount: 39,
    Make: "Audi A3",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 196,
    Price: 63326,
    Mileage: 147409,
    Registration: 2001,
    EquipmentCount: 40,
    Make: "BMW 4-Series",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 197,
    Price: 13723,
    Mileage: 212587,
    Registration: 2003,
    EquipmentCount: 23,
    Make: "Porsche Cayman",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 198,
    Price: 58611,
    Mileage: 10639,
    Registration: 2014,
    EquipmentCount: 5,
    Make: "BMW 2-Series",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 199,
    Price: 31547,
    Mileage: 209180,
    Registration: 2006,
    EquipmentCount: 36,
    Make: "Audi A3",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 200,
    Price: 77979,
    Mileage: 14676,
    Registration: 1994,
    EquipmentCount: 28,
    Make: "Audi A3",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 201,
    Price: 95954,
    Mileage: 166153,
    Registration: 2013,
    EquipmentCount: 23,
    Make: "BMW 4-Series",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 202,
    Price: 14447,
    Mileage: 145648,
    Registration: 2002,
    EquipmentCount: 33,
    Make: "Ford Mustang",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 203,
    Price: 41761,
    Mileage: 205103,
    Registration: 1986,
    EquipmentCount: 15,
    Make: "Audi A3",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 204,
    Price: 83927,
    Mileage: 238280,
    Registration: 1992,
    EquipmentCount: 33,
    Make: "Audi A5",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 205,
    Price: 14256,
    Mileage: 210930,
    Registration: 1983,
    EquipmentCount: 33,
    Make: "BMW 4-Series",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 206,
    Price: 57454,
    Mileage: 93902,
    Registration: 1990,
    EquipmentCount: 32,
    Make: "Porsche Boxter",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 207,
    Price: 48479,
    Mileage: 220388,
    Registration: 2002,
    EquipmentCount: 14,
    Make: "Porsche Cayman",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 208,
    Price: 32626,
    Mileage: 20105,
    Registration: 2017,
    EquipmentCount: 24,
    Make: "Toyota Supra",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 209,
    Price: 61537,
    Mileage: 11431,
    Registration: 2017,
    EquipmentCount: 16,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 210,
    Price: 82015,
    Mileage: 237683,
    Registration: 2013,
    EquipmentCount: 9,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 211,
    Price: 30646,
    Mileage: 68762,
    Registration: 2016,
    EquipmentCount: 19,
    Make: "Porsche Cayman",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 212,
    Price: 76825,
    Mileage: 45262,
    Registration: 2010,
    EquipmentCount: 9,
    Make: "Audi A5",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 213,
    Price: 51012,
    Mileage: 184177,
    Registration: 2020,
    EquipmentCount: 18,
    Make: "Porsche Boxter",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 214,
    Price: 96358,
    Mileage: 176235,
    Registration: 2003,
    EquipmentCount: 38,
    Make: "Audi A3",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 215,
    Price: 35108,
    Mileage: 156545,
    Registration: 2000,
    EquipmentCount: 23,
    Make: "Porsche Boxter",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 216,
    Price: 15400,
    Mileage: 56669,
    Registration: 1994,
    EquipmentCount: 11,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 217,
    Price: 5806,
    Mileage: 152917,
    Registration: 2013,
    EquipmentCount: 14,
    Make: "Porsche Cayman",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 218,
    Price: 75848,
    Mileage: 108880,
    Registration: 2013,
    EquipmentCount: 9,
    Make: "Toyota Supra",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 219,
    Price: 54845,
    Mileage: 241159,
    Registration: 2002,
    EquipmentCount: 23,
    Make: "Ford Mustang",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 220,
    Price: 30783,
    Mileage: 140553,
    Registration: 1986,
    EquipmentCount: 35,
    Make: "Toyota Supra",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 221,
    Price: 4318,
    Mileage: 238311,
    Registration: 1992,
    EquipmentCount: 10,
    Make: "Porsche Cayman",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 222,
    Price: 83758,
    Mileage: 76785,
    Registration: 1985,
    EquipmentCount: 33,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 223,
    Price: 86766,
    Mileage: 224983,
    Registration: 1990,
    EquipmentCount: 5,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 224,
    Price: 66102,
    Mileage: 54462,
    Registration: 1986,
    EquipmentCount: 5,
    Make: "BMW 2-Series",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 225,
    Price: 93861,
    Mileage: 140960,
    Registration: 1999,
    EquipmentCount: 24,
    Make: "Ford Mustang",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 226,
    Price: 12059,
    Mileage: 39351,
    Registration: 1982,
    EquipmentCount: 5,
    Make: "Porsche Boxter",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 227,
    Price: 3835,
    Mileage: 185892,
    Registration: 2008,
    EquipmentCount: 19,
    Make: "Porsche Boxter",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 228,
    Price: 84910,
    Mileage: 204024,
    Registration: 2020,
    EquipmentCount: 40,
    Make: "Porsche Boxter",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 229,
    Price: 84271,
    Mileage: 27582,
    Registration: 2011,
    EquipmentCount: 27,
    Make: "Porsche Cayman",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 230,
    Price: 97039,
    Mileage: 225224,
    Registration: 2019,
    EquipmentCount: 14,
    Make: "BMW 4-Series",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 231,
    Price: 98575,
    Mileage: 192244,
    Registration: 1982,
    EquipmentCount: 37,
    Make: "Ford Mustang",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 232,
    Price: 4883,
    Mileage: 213952,
    Registration: 1986,
    EquipmentCount: 38,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 233,
    Price: 34867,
    Mileage: 247090,
    Registration: 2012,
    EquipmentCount: 12,
    Make: "Porsche Cayman",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 234,
    Price: 28793,
    Mileage: 18801,
    Registration: 1980,
    EquipmentCount: 6,
    Make: "Porsche Boxter",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 235,
    Price: 48387,
    Mileage: 47515,
    Registration: 2003,
    EquipmentCount: 18,
    Make: "Ford Mustang",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 236,
    Price: 14189,
    Mileage: 243052,
    Registration: 1989,
    EquipmentCount: 11,
    Make: "BMW 2-Series",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 237,
    Price: 5269,
    Mileage: 237076,
    Registration: 1987,
    EquipmentCount: 27,
    Make: "BMW 2-Series",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 238,
    Price: 42015,
    Mileage: 151399,
    Registration: 2020,
    EquipmentCount: 27,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 239,
    Price: 95912,
    Mileage: 108606,
    Registration: 2002,
    EquipmentCount: 12,
    Make: "Audi A3",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 240,
    Price: 78645,
    Mileage: 113466,
    Registration: 2017,
    EquipmentCount: 5,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 241,
    Price: 85671,
    Mileage: 72189,
    Registration: 1992,
    EquipmentCount: 19,
    Make: "BMW 4-Series",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 242,
    Price: 51549,
    Mileage: 50579,
    Registration: 2006,
    EquipmentCount: 34,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 243,
    Price: 16425,
    Mileage: 92852,
    Registration: 1985,
    EquipmentCount: 8,
    Make: "Ford Mustang",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 244,
    Price: 32561,
    Mileage: 18298,
    Registration: 2001,
    EquipmentCount: 34,
    Make: "Toyota Supra",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 245,
    Price: 21718,
    Mileage: 98476,
    Registration: 1986,
    EquipmentCount: 40,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 246,
    Price: 85605,
    Mileage: 167632,
    Registration: 1989,
    EquipmentCount: 33,
    Make: "Toyota Supra",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 247,
    Price: 63469,
    Mileage: 64206,
    Registration: 2015,
    EquipmentCount: 23,
    Make: "Audi A5",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 248,
    Price: 23586,
    Mileage: 8265,
    Registration: 1998,
    EquipmentCount: 34,
    Make: "BMW 4-Series",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 249,
    Price: 50140,
    Mileage: 79366,
    Registration: 2016,
    EquipmentCount: 16,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 250,
    Price: 21383,
    Mileage: 90911,
    Registration: 1983,
    EquipmentCount: 7,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 251,
    Price: 58343,
    Mileage: 118979,
    Registration: 2013,
    EquipmentCount: 11,
    Make: "Audi A5",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 252,
    Price: 32626,
    Mileage: 66111,
    Registration: 1988,
    EquipmentCount: 10,
    Make: "Porsche Cayman",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 253,
    Price: 40746,
    Mileage: 236962,
    Registration: 2004,
    EquipmentCount: 10,
    Make: "Audi A3",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 254,
    Price: 44800,
    Mileage: 150844,
    Registration: 1992,
    EquipmentCount: 10,
    Make: "BMW 4-Series",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 255,
    Price: 17040,
    Mileage: 192074,
    Registration: 1997,
    EquipmentCount: 29,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 256,
    Price: 96484,
    Mileage: 51397,
    Registration: 2015,
    EquipmentCount: 38,
    Make: "Audi A5",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 257,
    Price: 92823,
    Mileage: 55156,
    Registration: 2019,
    EquipmentCount: 29,
    Make: "BMW 2-Series",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 258,
    Price: 71816,
    Mileage: 193053,
    Registration: 1987,
    EquipmentCount: 24,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 259,
    Price: 43509,
    Mileage: 180875,
    Registration: 1983,
    EquipmentCount: 33,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 260,
    Price: 69665,
    Mileage: 71212,
    Registration: 1990,
    EquipmentCount: 8,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 261,
    Price: 79781,
    Mileage: 16551,
    Registration: 2019,
    EquipmentCount: 17,
    Make: "Porsche Boxter",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 262,
    Price: 48982,
    Mileage: 84987,
    Registration: 2004,
    EquipmentCount: 8,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 263,
    Price: 68181,
    Mileage: 13732,
    Registration: 2000,
    EquipmentCount: 37,
    Make: "Porsche Cayman",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 264,
    Price: 52200,
    Mileage: 32416,
    Registration: 2019,
    EquipmentCount: 29,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 265,
    Price: 22276,
    Mileage: 187863,
    Registration: 2018,
    EquipmentCount: 6,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 266,
    Price: 76983,
    Mileage: 112063,
    Registration: 2001,
    EquipmentCount: 24,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 267,
    Price: 28022,
    Mileage: 57139,
    Registration: 1993,
    EquipmentCount: 15,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 268,
    Price: 25655,
    Mileage: 234029,
    Registration: 2002,
    EquipmentCount: 8,
    Make: "Ford Mustang",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 269,
    Price: 49204,
    Mileage: 80557,
    Registration: 1983,
    EquipmentCount: 16,
    Make: "Porsche Boxter",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 270,
    Price: 82202,
    Mileage: 56757,
    Registration: 2009,
    EquipmentCount: 16,
    Make: "Ford Mustang",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 271,
    Price: 44498,
    Mileage: 145837,
    Registration: 2008,
    EquipmentCount: 6,
    Make: "BMW 4-Series",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 272,
    Price: 3791,
    Mileage: 146463,
    Registration: 1985,
    EquipmentCount: 5,
    Make: "Toyota Supra",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 273,
    Price: 19823,
    Mileage: 79318,
    Registration: 2016,
    EquipmentCount: 10,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 274,
    Price: 51603,
    Mileage: 248121,
    Registration: 1995,
    EquipmentCount: 14,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 275,
    Price: 30690,
    Mileage: 227575,
    Registration: 1997,
    EquipmentCount: 8,
    Make: "Ford Mustang",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 276,
    Price: 68069,
    Mileage: 92611,
    Registration: 2020,
    EquipmentCount: 10,
    Make: "Ford Mustang",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 277,
    Price: 5064,
    Mileage: 192674,
    Registration: 2010,
    EquipmentCount: 17,
    Make: "BMW 2-Series",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 278,
    Price: 42037,
    Mileage: 101482,
    Registration: 1990,
    EquipmentCount: 9,
    Make: "Ford Mustang",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 279,
    Price: 95100,
    Mileage: 73312,
    Registration: 2013,
    EquipmentCount: 6,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 280,
    Price: 72748,
    Mileage: 111856,
    Registration: 1983,
    EquipmentCount: 39,
    Make: "BMW 4-Series",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 281,
    Price: 71282,
    Mileage: 101970,
    Registration: 1998,
    EquipmentCount: 12,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 282,
    Price: 4451,
    Mileage: 53319,
    Registration: 1987,
    EquipmentCount: 34,
    Make: "Audi A3",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 283,
    Price: 11373,
    Mileage: 221919,
    Registration: 2021,
    EquipmentCount: 17,
    Make: "Porsche Boxter",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 284,
    Price: 38646,
    Mileage: 233545,
    Registration: 2011,
    EquipmentCount: 34,
    Make: "Porsche Cayman",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 285,
    Price: 47349,
    Mileage: 126083,
    Registration: 1992,
    EquipmentCount: 38,
    Make: "Audi A5",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 286,
    Price: 5288,
    Mileage: 53671,
    Registration: 2014,
    EquipmentCount: 5,
    Make: "BMW 2-Series",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 287,
    Price: 48022,
    Mileage: 224561,
    Registration: 2000,
    EquipmentCount: 30,
    Make: "Ford Mustang",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 288,
    Price: 5935,
    Mileage: 6349,
    Registration: 1996,
    EquipmentCount: 37,
    Make: "BMW 4-Series",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 289,
    Price: 28255,
    Mileage: 30003,
    Registration: 1983,
    EquipmentCount: 14,
    Make: "Audi A5",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 290,
    Price: 32809,
    Mileage: 105119,
    Registration: 1991,
    EquipmentCount: 10,
    Make: "Porsche Boxter",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 291,
    Price: 70444,
    Mileage: 232466,
    Registration: 2000,
    EquipmentCount: 11,
    Make: "Ford Mustang",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 292,
    Price: 65248,
    Mileage: 76447,
    Registration: 2001,
    EquipmentCount: 36,
    Make: "BMW 2-Series",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 293,
    Price: 20073,
    Mileage: 149047,
    Registration: 1982,
    EquipmentCount: 26,
    Make: "BMW 4-Series",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 294,
    Price: 48923,
    Mileage: 169470,
    Registration: 1989,
    EquipmentCount: 25,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 295,
    Price: 22412,
    Mileage: 144954,
    Registration: 1990,
    EquipmentCount: 40,
    Make: "Toyota Supra",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 296,
    Price: 9946,
    Mileage: 217816,
    Registration: 2004,
    EquipmentCount: 23,
    Make: "Porsche Boxter",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 297,
    Price: 39140,
    Mileage: 28732,
    Registration: 2001,
    EquipmentCount: 32,
    Make: "Audi A5",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 298,
    Price: 23325,
    Mileage: 218428,
    Registration: 2018,
    EquipmentCount: 36,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 299,
    Price: 53065,
    Mileage: 176371,
    Registration: 1990,
    EquipmentCount: 6,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 300,
    Price: 56978,
    Mileage: 186055,
    Registration: 2004,
    EquipmentCount: 33,
    Make: "Toyota Supra",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 301,
    Price: 40203,
    Mileage: 180363,
    Registration: 2012,
    EquipmentCount: 34,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 302,
    Price: 69200,
    Mileage: 168763,
    Registration: 2004,
    EquipmentCount: 8,
    Make: "Audi A5",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 303,
    Price: 68582,
    Mileage: 91566,
    Registration: 1987,
    EquipmentCount: 16,
    Make: "BMW 2-Series",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 304,
    Price: 89265,
    Mileage: 51417,
    Registration: 2006,
    EquipmentCount: 22,
    Make: "Audi A3",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 305,
    Price: 16560,
    Mileage: 80526,
    Registration: 2019,
    EquipmentCount: 37,
    Make: "Porsche Boxter",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 306,
    Price: 3794,
    Mileage: 194966,
    Registration: 1983,
    EquipmentCount: 24,
    Make: "BMW 4-Series",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 307,
    Price: 19064,
    Mileage: 186363,
    Registration: 2014,
    EquipmentCount: 13,
    Make: "Audi A5",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 308,
    Price: 37679,
    Mileage: 24931,
    Registration: 2018,
    EquipmentCount: 14,
    Make: "Audi A3",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 309,
    Price: 21994,
    Mileage: 22154,
    Registration: 1988,
    EquipmentCount: 6,
    Make: "Toyota Supra",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 310,
    Price: 95670,
    Mileage: 178385,
    Registration: 2008,
    EquipmentCount: 10,
    Make: "Ford Mustang",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 311,
    Price: 26189,
    Mileage: 131917,
    Registration: 2003,
    EquipmentCount: 6,
    Make: "BMW 4-Series",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 312,
    Price: 39327,
    Mileage: 236443,
    Registration: 1988,
    EquipmentCount: 9,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 313,
    Price: 59041,
    Mileage: 111459,
    Registration: 2010,
    EquipmentCount: 19,
    Make: "Toyota Supra",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 314,
    Price: 46461,
    Mileage: 207378,
    Registration: 1996,
    EquipmentCount: 27,
    Make: "Toyota Supra",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 315,
    Price: 76631,
    Mileage: 222947,
    Registration: 1992,
    EquipmentCount: 25,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 316,
    Price: 68044,
    Mileage: 26854,
    Registration: 1985,
    EquipmentCount: 17,
    Make: "Toyota Supra",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 317,
    Price: 44652,
    Mileage: 134743,
    Registration: 2015,
    EquipmentCount: 13,
    Make: "BMW 2-Series",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 318,
    Price: 65672,
    Mileage: 153946,
    Registration: 1997,
    EquipmentCount: 6,
    Make: "Audi A3",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 319,
    Price: 29867,
    Mileage: 103480,
    Registration: 1992,
    EquipmentCount: 19,
    Make: "Audi A3",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 320,
    Price: 59165,
    Mileage: 51735,
    Registration: 2014,
    EquipmentCount: 25,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 321,
    Price: 83067,
    Mileage: 166510,
    Registration: 2000,
    EquipmentCount: 36,
    Make: "Porsche Boxter",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 322,
    Price: 28978,
    Mileage: 74727,
    Registration: 1999,
    EquipmentCount: 31,
    Make: "BMW 4-Series",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 323,
    Price: 8688,
    Mileage: 173619,
    Registration: 1994,
    EquipmentCount: 14,
    Make: "Audi A3",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 324,
    Price: 12808,
    Mileage: 121250,
    Registration: 2010,
    EquipmentCount: 17,
    Make: "Porsche Cayman",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 325,
    Price: 93583,
    Mileage: 141546,
    Registration: 1988,
    EquipmentCount: 30,
    Make: "Toyota Supra",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 326,
    Price: 21095,
    Mileage: 51506,
    Registration: 1994,
    EquipmentCount: 21,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 327,
    Price: 55551,
    Mileage: 150694,
    Registration: 1980,
    EquipmentCount: 20,
    Make: "Toyota Supra",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 328,
    Price: 49448,
    Mileage: 228117,
    Registration: 1989,
    EquipmentCount: 20,
    Make: "Porsche Boxter",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 329,
    Price: 13093,
    Mileage: 139080,
    Registration: 2000,
    EquipmentCount: 14,
    Make: "Ford Mustang",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 330,
    Price: 17675,
    Mileage: 115484,
    Registration: 2016,
    EquipmentCount: 30,
    Make: "Audi A5",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 331,
    Price: 28128,
    Mileage: 236161,
    Registration: 2012,
    EquipmentCount: 36,
    Make: "Porsche Boxter",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 332,
    Price: 49957,
    Mileage: 163999,
    Registration: 2009,
    EquipmentCount: 22,
    Make: "Ford Mustang",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 333,
    Price: 74275,
    Mileage: 221567,
    Registration: 2004,
    EquipmentCount: 14,
    Make: "Audi A3",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 334,
    Price: 33347,
    Mileage: 155277,
    Registration: 2006,
    EquipmentCount: 26,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 335,
    Price: 52970,
    Mileage: 131177,
    Registration: 2002,
    EquipmentCount: 7,
    Make: "Porsche Cayman",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 336,
    Price: 32193,
    Mileage: 223236,
    Registration: 1985,
    EquipmentCount: 14,
    Make: "Porsche Boxter",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 337,
    Price: 83524,
    Mileage: 67347,
    Registration: 1992,
    EquipmentCount: 13,
    Make: "Audi A5",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 338,
    Price: 90440,
    Mileage: 128673,
    Registration: 1983,
    EquipmentCount: 26,
    Make: "Ford Mustang",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 339,
    Price: 29579,
    Mileage: 52283,
    Registration: 1983,
    EquipmentCount: 39,
    Make: "Audi A3",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 340,
    Price: 79364,
    Mileage: 27439,
    Registration: 2017,
    EquipmentCount: 32,
    Make: "Ford Mustang",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 341,
    Price: 78189,
    Mileage: 1992,
    Registration: 1998,
    EquipmentCount: 40,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 342,
    Price: 94643,
    Mileage: 202300,
    Registration: 1995,
    EquipmentCount: 14,
    Make: "Porsche Cayman",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 343,
    Price: 5839,
    Mileage: 159812,
    Registration: 2021,
    EquipmentCount: 12,
    Make: "Toyota Supra",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 344,
    Price: 16323,
    Mileage: 207315,
    Registration: 2002,
    EquipmentCount: 33,
    Make: "Audi A5",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 345,
    Price: 36201,
    Mileage: 150211,
    Registration: 1994,
    EquipmentCount: 35,
    Make: "Ford Mustang",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 346,
    Price: 6222,
    Mileage: 93591,
    Registration: 1996,
    EquipmentCount: 28,
    Make: "Toyota Supra",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 347,
    Price: 89588,
    Mileage: 226245,
    Registration: 2012,
    EquipmentCount: 6,
    Make: "BMW 4-Series",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 348,
    Price: 63536,
    Mileage: 113089,
    Registration: 1994,
    EquipmentCount: 40,
    Make: "BMW 2-Series",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 349,
    Price: 8925,
    Mileage: 111824,
    Registration: 1987,
    EquipmentCount: 25,
    Make: "Audi A3",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 350,
    Price: 56520,
    Mileage: 3513,
    Registration: 2008,
    EquipmentCount: 15,
    Make: "Audi A3",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 351,
    Price: 99430,
    Mileage: 167946,
    Registration: 1993,
    EquipmentCount: 20,
    Make: "Ford Mustang",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 352,
    Price: 29129,
    Mileage: 40952,
    Registration: 2016,
    EquipmentCount: 9,
    Make: "Audi A5",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 353,
    Price: 8404,
    Mileage: 104116,
    Registration: 1981,
    EquipmentCount: 38,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 354,
    Price: 10846,
    Mileage: 43187,
    Registration: 1982,
    EquipmentCount: 13,
    Make: "Ford Mustang",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 355,
    Price: 6517,
    Mileage: 25733,
    Registration: 1997,
    EquipmentCount: 14,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 356,
    Price: 4801,
    Mileage: 190044,
    Registration: 2001,
    EquipmentCount: 13,
    Make: "Ford Mustang",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 357,
    Price: 61369,
    Mileage: 218949,
    Registration: 1998,
    EquipmentCount: 30,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 358,
    Price: 8073,
    Mileage: 153497,
    Registration: 1990,
    EquipmentCount: 37,
    Make: "Porsche Boxter",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 359,
    Price: 39730,
    Mileage: 32463,
    Registration: 1996,
    EquipmentCount: 6,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 360,
    Price: 99601,
    Mileage: 162781,
    Registration: 1980,
    EquipmentCount: 32,
    Make: "Porsche Cayman",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 361,
    Price: 33588,
    Mileage: 116038,
    Registration: 2002,
    EquipmentCount: 39,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 362,
    Price: 88980,
    Mileage: 77389,
    Registration: 2002,
    EquipmentCount: 6,
    Make: "Toyota Supra",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 363,
    Price: 93733,
    Mileage: 150172,
    Registration: 2019,
    EquipmentCount: 20,
    Make: "Audi A3",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 364,
    Price: 3404,
    Mileage: 147212,
    Registration: 2012,
    EquipmentCount: 37,
    Make: "BMW 2-Series",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 365,
    Price: 97731,
    Mileage: 72452,
    Registration: 1995,
    EquipmentCount: 9,
    Make: "Ford Mustang",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 366,
    Price: 92591,
    Mileage: 116549,
    Registration: 2008,
    EquipmentCount: 20,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 367,
    Price: 49396,
    Mileage: 127742,
    Registration: 2001,
    EquipmentCount: 35,
    Make: "Toyota Supra",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 368,
    Price: 56813,
    Mileage: 63504,
    Registration: 1983,
    EquipmentCount: 6,
    Make: "Ford Mustang",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 369,
    Price: 29783,
    Mileage: 169778,
    Registration: 1982,
    EquipmentCount: 39,
    Make: "Porsche Cayman",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 370,
    Price: 53978,
    Mileage: 67571,
    Registration: 2015,
    EquipmentCount: 36,
    Make: "Porsche Boxter",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 371,
    Price: 96361,
    Mileage: 225259,
    Registration: 2012,
    EquipmentCount: 38,
    Make: "BMW 2-Series",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 372,
    Price: 7574,
    Mileage: 190884,
    Registration: 1981,
    EquipmentCount: 25,
    Make: "Porsche Boxter",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 373,
    Price: 82173,
    Mileage: 196180,
    Registration: 2007,
    EquipmentCount: 5,
    Make: "BMW 4-Series",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 374,
    Price: 58825,
    Mileage: 37096,
    Registration: 1980,
    EquipmentCount: 14,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 375,
    Price: 99219,
    Mileage: 197320,
    Registration: 1995,
    EquipmentCount: 9,
    Make: "Audi A5",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 376,
    Price: 86591,
    Mileage: 7298,
    Registration: 1990,
    EquipmentCount: 35,
    Make: "Audi A5",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 377,
    Price: 84939,
    Mileage: 88563,
    Registration: 1981,
    EquipmentCount: 13,
    Make: "Porsche Boxter",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 378,
    Price: 26001,
    Mileage: 161865,
    Registration: 1981,
    EquipmentCount: 13,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 379,
    Price: 32431,
    Mileage: 74040,
    Registration: 2005,
    EquipmentCount: 22,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 380,
    Price: 45980,
    Mileage: 238212,
    Registration: 2017,
    EquipmentCount: 9,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 381,
    Price: 20165,
    Mileage: 70646,
    Registration: 2005,
    EquipmentCount: 19,
    Make: "Toyota Supra",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 382,
    Price: 37757,
    Mileage: 15209,
    Registration: 1997,
    EquipmentCount: 34,
    Make: "Mercedes-Benz SLK",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 383,
    Price: 88416,
    Mileage: 52386,
    Registration: 2010,
    EquipmentCount: 24,
    Make: "BMW 4-Series",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 384,
    Price: 31783,
    Mileage: 1285,
    Registration: 1985,
    EquipmentCount: 24,
    Make: "BMW 2-Series",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 385,
    Price: 94871,
    Mileage: 20605,
    Registration: 2000,
    EquipmentCount: 28,
    Make: "BMW 4-Series",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 386,
    Price: 68920,
    Mileage: 135232,
    Registration: 2013,
    EquipmentCount: 15,
    Make: "BMW 2-Series",
    PriceLabel: "Etwas Teuer"
  },
  {
    classified_guid: 387,
    Price: 32328,
    Mileage: 176167,
    Registration: 1999,
    EquipmentCount: 8,
    Make: "Audi A3",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 388,
    Price: 11085,
    Mileage: 60402,
    Registration: 1980,
    EquipmentCount: 11,
    Make: "Porsche Cayman",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 389,
    Price: 75501,
    Mileage: 87408,
    Registration: 1995,
    EquipmentCount: 24,
    Make: "Porsche Boxter",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 390,
    Price: 84368,
    Mileage: 203031,
    Registration: 2012,
    EquipmentCount: 37,
    Make: "Toyota Supra",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 391,
    Price: 17261,
    Mileage: 87265,
    Registration: 2017,
    EquipmentCount: 29,
    Make: "BMW 2-Series",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 392,
    Price: 62630,
    Mileage: 223990,
    Registration: 2009,
    EquipmentCount: 28,
    Make: "Audi A3",
    PriceLabel: "Keine Angabe"
  },
  {
    classified_guid: 393,
    Price: 56510,
    Mileage: 157121,
    Registration: 2007,
    EquipmentCount: 16,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 394,
    Price: 97488,
    Mileage: 65437,
    Registration: 1981,
    EquipmentCount: 13,
    Make: "Porsche Cayman",
    PriceLabel: "Gutes Angebot"
  },
  {
    classified_guid: 395,
    Price: 10027,
    Mileage: 29133,
    Registration: 2011,
    EquipmentCount: 34,
    Make: "Audi A3",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 396,
    Price: 62688,
    Mileage: 235409,
    Registration: 1997,
    EquipmentCount: 11,
    Make: "Ford Mustang",
    PriceLabel: "Top Angebot"
  },
  {
    classified_guid: 397,
    Price: 32194,
    Mileage: 10740,
    Registration: 1983,
    EquipmentCount: 14,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Teuer"
  },
  {
    classified_guid: 398,
    Price: 85646,
    Mileage: 240851,
    Registration: 1994,
    EquipmentCount: 34,
    Make: "Mercedes-Benz C-Class",
    PriceLabel: "Faires Angebot"
  },
  {
    classified_guid: 399,
    Price: 59905,
    Mileage: 139931,
    Registration: 2017,
    EquipmentCount: 37,
    Make: "Ford Mustang",
    PriceLabel: "Teuer"
  }
];
