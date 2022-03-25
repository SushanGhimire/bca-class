export const errorHandler = (property, value) => {
  if (property === "title") {
    if (value === "" || value.length < 5) {
      return "Title muist be 5 character long";
    } else {
      return "";
    }
  } else if (property === "description") {
    if (value === "" || value.length < 15) {
      return "Des 15 character long";
    } else {
      return "";
    }
  } else {
    return "";
  }
};
