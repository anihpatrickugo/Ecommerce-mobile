export const addComma = (value:number) => {
    // adding commas to every last three digits of a price
    const stringValue = value.toString()
    const finalValue = stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return finalValue
  };