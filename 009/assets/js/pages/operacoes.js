export const operacoes = (numero1, numero2, op) => {
  switch (op) {
    case "soma":
      return numero1 + numero2;
      break;
    case "div":
      return numero1 / numero2;
      break;
    case "sub":
      return numero1 - numero2;
      break;
    case "mult":
      return numero1 * numero2;
      break;
    default:
      return "Iválido";
      break;
  }
};
