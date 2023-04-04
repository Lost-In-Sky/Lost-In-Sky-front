import axios from "axios";
import { apiUrl } from "../config";

export const getReservationById = async (id) => {
  const data = await axios.get(`${apiUrl}/reservation/${id}`);

  return data;
}