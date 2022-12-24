import axios from "axios";

export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchListContact = async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
