const getImageApi = async () => {
  const response = await fetch(
    "https://picsum.photos/v2/list?page=2&limit=100"
  );
  return await response.json();
};

export default getImageApi;
