import { getAllTheatre, getOneTheatre } from "../infrastructure/TheatreService";

interface IState {
  data: any[];
  theater: any;
}

const useTheaterStore = defineStore("TheaterStore", {
  state: (): IState => ({
    data: [],
    theater: {
      id: "",
      name: "",
      all_row: 0,
      all_col: 0,
      seats: [],
    },
  }),
  actions: {
    async getAllTheaters() {
      const response = await getAllTheatre();

      if (response && response.data.code === 200) {
        this.data = response.data.data;
      }
    },

    async getTheaterById(theaterId: string) {
      const response = await getOneTheatre(theaterId);
      if (response && response.data.code === 200) {
        this.theater = response.data.data;
      }
    },
  },
});

export default useTheaterStore;
