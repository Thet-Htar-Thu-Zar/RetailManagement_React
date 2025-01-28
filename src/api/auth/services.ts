import type { LoginPayload } from "./types";
import axios from "axios";

const baseUrl = "/User";

const login = async (credentials: LoginPayload) => {
  const request = await axios.post(`${baseUrl}/LoginUser`, credentials);
  return request.data;
};

export default { login };
