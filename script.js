let currentExpression = ''; // Aktualne wyrażenie matematyczne

// Funkcja do aktualizacji pola tekstowego
function updateResult() {
  const resultField = document.getElementById('result');
  resultField.value = currentExpression;
}

// Funkcja do dodawania wartości do aktualnego wyrażenia
function appendValue(value) {
  currentExpression += value;
  updateResult();
}

// Funkcja do dodawania operatora do aktualnego wyrażenia
function appendOperator(operator) {
  currentExpression += operator;
  updateResult();
}

// Funkcja do czyszczenia aktualnego wyrażenia
function clearResult() {
  currentExpression = '';
  updateResult();
}

// Funkcja do obliczania wyniku
function calculate() {
  const resultField = document.getElementById('result');
  let result;

  try {
    result = eval(currentExpression); // Wykorzystanie funkcji eval() do obliczenia wyrażenia
  } catch (error) {
    result = 'Błąd';
  }

  resultField.value = result;
  currentExpression = ''; // Zresetowanie wyrażenia po obliczeniach
}
