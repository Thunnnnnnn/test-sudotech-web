import api from "~/utils/http";

const getAllTheatre = async () => {
  const response = await api.get("/theaters");
  return response;
};

const getOneTheatre = async (theatreId: string) => {
  const response = await api.get(`/theaters/${theatreId}`);
  return response;
};

const bookSeats = async (seatId: string) => {
  const response = await api.post(`/seats/book/${seatId}`);
  return response;
};

export { getAllTheatre, getOneTheatre, bookSeats };
