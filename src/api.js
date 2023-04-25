import axios from "axios";

const amiiboApi = axios.create({
  baseURL: "https://amiiboapi.com/api",
});

const yesNoApi = axios.create({
  baseURL: "https://yesno.wtf",
});

export const fetchAmiibos = async (character) => {
  try {
    const response = await amiiboApi.get(`/amiibo/?name=${character}`);
    return response.data.amiibo;
  } catch (error) {
    console.error("Error fetching amiibos:", error);
    return [];
  }
};

export const fetchPurchaseDecision = async () => {
  try {
    const response = await yesNoApi.get("/api");
    return response.data.answer;
  } catch (error) {
    console.error("Error fetching decision:", error);
    return null;
  }
};
