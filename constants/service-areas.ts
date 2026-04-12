export type ServiceAreaCity = {
  id: string;
  label: string;
};

export type ServiceAreaProvince = {
  cities: ServiceAreaCity[];
  id: string;
  label: string;
};

export type ServiceAreaRegion = {
  id: string;
  label: string;
  provinces: ServiceAreaProvince[];
};

export const allowedServiceAreas: ServiceAreaRegion[] = [
  {
    id: "region-x",
    label: "Region X",
    provinces: [
      {
        id: "misamis-occidental",
        label: "Misamis Occidental",
        cities: [
          { id: "ozamiz-city", label: "Ozamiz City" },
          { id: "tangub-city", label: "Tangub City" },
          { id: "oroquieta-city", label: "Oroquieta City" },
        ],
      },
      {
        id: "misamis-oriental",
        label: "Misamis Oriental",
        cities: [
          { id: "cagayan-de-oro-city", label: "Cagayan de Oro City" },
          { id: "el-salvador-city", label: "El Salvador City" },
        ],
      },
      {
        id: "lanao-del-norte",
        label: "Lanao del Norte",
        cities: [
          { id: "iligan-city", label: "Iligan City" }
        ],
      },
      {
        id: "bukidnon",
        label: "Bukidnon",
        cities: [
          { id: "malaybalay-city", label: "Malaybalay City" },
          { id: "valencia-city", label: "Valencia City" },
        ],
      },
    ],
  },
  {
    id: "region-xi",
    label: "Region XI (Davao Region)",
    provinces: [
      {
        id: "davao-del-sur",
        label: "Davao del Sur",
        cities: [{ id: "davao-city", label: "Davao City" }],
      },
    ],
  },
  {
    id: "region-xiii",
    label: "Region XIII (Caraga)",
    provinces: [
      {
        id: "agusan-del-norte",
        label: "Agusan del Norte",
        cities: [{ id: "butuan-city", label: "Butuan City" }],
      },
      {
        id: "agusan-del-sur",
        label: "Agusan del Sur",
        cities: [{ id: "bayugan-city", label: "Bayugan City" }],
      },
    ],
  },
];
