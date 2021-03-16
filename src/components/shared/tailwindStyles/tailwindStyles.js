export const linkStyling = (state, number) => {
  if (state === number) {
    return 'text-green-500 mr-2 focus:outline-none cursor-pointer';
  } else {
    return 'mr-2 hover:text-green-100 focus:outline-none focus:text-white cursor-pointer';
  }
};
export const listAllStyling = (index) => {
  if (index === 0) {
    return 'text-base text-white flex flex-row justify-between pl-2 pr-2 pt-1';
  } else if (index % 2 === 0) {
    return 'text-base text-white flex flex-row justify-between pl-2 pr-2 pt-1';
  } else {
    return 'text-base text-gray-400 flex flex-row justify-between pl-2 pr-2 pt-1';
  }
};
