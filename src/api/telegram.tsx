const baseUrl =
  'https://api.telegram.org/bot6668666199:AAGHMmXVcxlkZrtE27vZnFSDQCTwQvKFKaw/';

export const sendMessage = async (message: string): Promise<void> => {
  const url: string = `${baseUrl}sendMessage?chat_id=-1001870437452&text=${message}`;
  const response: Response = await fetch(url);

  if (!response.ok) {
    const error = await response.json();

    await Promise.reject(error.description || 'Шось пішло не так');
  }
};