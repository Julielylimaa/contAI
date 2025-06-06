export const maskCurrency = (valueInput: string, setValue: (value: number) => void) => {
    valueInput = valueInput.replace(/[^\d,-]/g, "");
    const numericValue = (parseFloat(valueInput) / 100)
        .toFixed(2)
        .replace(",", ".");
    setValue(parseFloat(numericValue));
    valueInput = `R$ ${numericValue}`;
    return valueInput;
};