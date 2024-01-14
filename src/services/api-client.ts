import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a7bc78a56fff4204bc8e6db373372a23",
  },
});
