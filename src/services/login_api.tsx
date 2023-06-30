export const loginApi = async (email, password) => {
  const URL = `${process.env.REACT_APP_API_BASE_URL}/sessions`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  const response = await fetch(URL, requestOptions);

  if (response.status === 404) {
    throw new Error('Not found');
  }
  if (response.status === 422) {
    throw new Error('Unprocessable Entity');
  }
  if (response.status === 500) {
    throw new Error('Internal Server Error');
  }

  const jsonResponse = await response.json();

  return jsonResponse;
};

