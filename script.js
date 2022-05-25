//nightmare 있는 버전

const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  if (operator === "+") {
      result = parseFloat(n1) + parseFloat(n2);
  }
  if (operator === "-") {
      result = parseFloat(n1) - parseFloat(n2);
  }
  if (operator === "*") {
      result = parseFloat(n1) * parseFloat(n2);
  }
  if (operator === "/") {
      result = parseFloat(n1) / parseFloat(n2);
  }
  return String(result);
}


buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.

      console.log('숫자 ' + buttonContent + ' 버튼'); 

      // 1. 넘버 버튼을 누른다
      // 2. buttonContent 값을 firstOperend.textcontent 값으로 한다
      if (display.textContent === '0' || previousKey === 'operator' || previousKey === 'calculate') {
          return secondOperend.textContent = Number(secondOperend.textContent + buttonContent);
      }
      else {
        previousKey = "number"
        return firstOperend.textContent = Number(firstOperend.textContent + buttonContent);
      }
    }

    if (action === 'operator') {
      //console.log('연산자 ' + buttonContent + ' 버튼');
      return operator.textContent = buttonContent;
    }

    if (action === 'decimal') {
      // console.log('소수점 버튼');
    }

    if (action === 'clear') {
      console.log('초기화 버튼');
      firstOperend.textContent = 0;
      operator.textContent = "+";
      secondOperend.textContent = 0;
      calculatedResult.textContent = 0;
      return 
    }

    if (action === 'calculate') {
      console.log('계산 버튼');
      return calculatedResult.textContent = calculate(Number(firstOperend.textContent), operator.textContent, Number(secondOperend.textContent));
    }
  }
});



const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
        if (previousKey === 'operator') {
          return display.textContent = buttonContent;   
        }
        if (display.textContent === '0') {
          return display.textContent = buttonContent;
        } 
        if (display.textContent !== "0"){
          return display.textContent = display.textContent.concat(buttonContent);
        }
        previousKey = "number"
    }

    if (action === 'operator') {  
        target.classList.add('isPressed');
        operatorForAdvanced = buttonContent;
        previousKey = 'operator';
        firstNum = display.textContent
    }

    if (action === 'decimal') {
        if (display.textContent === '0') {
            return display.textContent = display.textContent.concat(buttonContent);
        } 
        previousKey = "decimal"
    }

    if (action === 'clear') {
        console.log('초기화 버튼');

        previousKey = 'clear';
        firstNum = '0';
        operatorForAdvanced = '0';
        previousNum = '0';
        display.textContent = 0;
    }

    if (action === 'calculate') {
        console.log('계산 버튼');
        // 계산기의 화면에 calculate 함수의 결과를 출력합니다.
        if (operatorForAdvanced === undefined) {
          previousKey = "number"
          firstNum = display.textContent
          return display.textContent;
        }

        if (previousKey === 'calculate') {
          if (operatorForAdvanced === undefined) {
            previousKey = "number"
            firstNum = display.textContents
            return display.textContent;
          }
          else{
            firstNum = display.textContent
            return display.textContent = calculate(parseFloat(firstNum), operatorForAdvanced, parseFloat(previousNum))
          }
        }

        else {
          previousKey = "calculate"
          previousNum = display.textContent
          return display.textContent = calculate(parseFloat(firstNum), operatorForAdvanced, parseFloat(previousNum))
        }
    }
}

});