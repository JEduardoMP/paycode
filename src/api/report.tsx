import { API } from "../const";

export const reportAPI = async (token: string | null) => {
  try {
    const res = await fetch(`${API.PAYCODE}/report`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    return { result };
  } catch (error) {
    return { error };
  }
};
