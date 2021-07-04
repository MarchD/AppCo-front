const BASE_URL = 'http://localhost:7000/api/';

export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}users`,
    {
      method: 'GET',
      params: {
        page: 1,
        limit: 16
      }
    }
  )

  return response.json();
}
