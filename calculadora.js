function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
    let resultado;
  
    if (isNaN(num1) || isNaN(num2)) {
      resultado = 'Por favor, insira números válidos.';
    } else {
      switch (operacao) {
        case 'soma':
          resultado = num1 + num2;
          break;
        case 'subtracao':
          resultado = num1 - num2;
          break;
        case 'multiplicacao':
          resultado = num1 * num2;
          break;
        case 'divisao':
          if (num2 === 0) {
            resultado = 'Erro: Divisão por zero.';
          } else {
            resultado = num1 / num2;
          }
          break;
        default:
          resultado = 'Operação inválida.';
      }
    }
  
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
  }