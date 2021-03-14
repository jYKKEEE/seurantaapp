export const linkStyling = (state, number) => {
  if (state === number) {
    return 'text-green-500 mr-2 focus:outline-none cursor-pointer';
  } else {
    return 'mr-2 hover:text-green-100 focus:outline-none focus:text-white cursor-pointer';
  }
};
