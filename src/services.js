import { API_KEY, URL } from "./client";

export const fetchCreators = async () => {
  try {
    const response = await fetch(`${URL}/rest/v1/creators`, {
      method: "GET",
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.json();
  } catch (error) {
    console.log("Error fetching creators:", error);
  }
};

export const updateCreator = async (id, data) => {
  try {
    const response = await fetch(`${URL}/rest/v1/creators?id=eq.${id}`, {
      method: "PATCH",
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.log(`Error : ${response.statusText}`);
    }
    return;
  } catch (error) {
    console.log("Error while updating creator");
  }
};

export const deleteCreator = async (id) => {
  try {
    const response = await fetch(`${URL}/rest/v1/creators?id=eq.${id}`, {
      method: "DELETE",
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    if (!response.ok) {
      console.log(`Error: ${response.statusText}`);
    }
    return;
  } catch (error) {
    console.log("Error while deleting creator");
  }
};

export const saveCreator = async (data) => {
  try {
    const response = await fetch(`${URL}/rest/v1/creators`, {
      method: "POST",
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation", // This will return newly created object
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      console.log(`Error : ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.log("Error while saving creator");
  }
};
