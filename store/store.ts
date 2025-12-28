import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LocationStore {
  locations: Location[];
  selectedLocation: Location | null;
  selectLocation: (location: Location) => void;
}

interface Location {
  name: string;
  address: string;
}

export const useLocationStore = create<LocationStore>()((set) => ({
  locations: [
    {
      address: "Holderäckerstraße, 70499 Stuttgart",
      name: "Studio Fitness Weilimdorf Stuttgart",
    },
    {
      address: "Fabrikstraße, 70794 Filderstadt",
      name: "Power Play Fitnessstudio Bonlanden",
    },
    {
      address: "Julius-Hölder-Straße 8 , 70597 Stuttgart",
      name: "jumpers fitness - Stuttgart Degerloch",
    },
    {
      address: "Riedwiesenstraße 1, 71229 Leonberg",
      name: "Studio Fitness Leonberg",
    },
  ],
  selectedLocation: {
    address: "Riedwiesenstraße 1, 71229 Leonber",
    name: "Studio Fitness Leonberg",
  },
  selectLocation: (location: Location) =>
    set(() => ({ selectedLocation: location })),
}));
