import { API } from "../const";

interface IInputs {
  email: string;
  password: string;
  [key: string]: any;
}
export const loginAPI = async (body: IInputs) => {
  try {
    const res = await fetch(`${API.PAYCODE}/login`, {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(body),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    return { error };
  }
};
