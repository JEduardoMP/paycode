import { API } from "../const";

export const userAPI = async (token: string | null) => {
  try {
    const res = await fetch(`${API.PAYCODE}/me`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: "GET",
    });
    const result = await res.json();
    return { result };
  } catch (error) {
    return { error };
  }
};
