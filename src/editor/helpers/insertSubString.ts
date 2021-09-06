const insertSubString = (str: string, subStr: String, position: number) => {
  return str.substring(0, position) + subStr + str.substring(position);
};

export default insertSubString;
