export function addSpaceToCamelCase(text: string) {
  return text.replace(/([a-z])([A-Z])/g, "$1 $2");
}

export const convertToTitleCase = (word: string) => {
  return (
    addSpaceToCamelCase(word)[0].toUpperCase() +
    addSpaceToCamelCase(word).slice(1)
  );
};

export const formatTime = (dateString: string): string => {
  const date = new Date(dateString);

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour to 12-hour format
  hours = hours % 12 || 12; // The `|| 12` ensures 12-hour format (12 instead of 0)

  // Format minutes to always have two digits
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${formattedMinutes} ${ampm}`; // 09: 28 PM
};

export const calculateElapsedMinutes = (otime: string): number => {
  const orderTime = new Date(otime); // Convert the input string to a Date object
  const currentTime = new Date(); // Get the current time

  const elapsedMilliseconds = currentTime.getTime() - orderTime.getTime(); // Difference in milliseconds
  const elapsedMinutes = Math.floor(elapsedMilliseconds / (1000 * 60)); // Convert milliseconds to minutes

  return elapsedMinutes; // Return the total minutes elapsed //47 mint
};
