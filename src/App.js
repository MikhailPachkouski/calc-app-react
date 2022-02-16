import { useState } from 'react';

function App() {
	const [calc, setCalc] = useState('');
	const [result, setResult] = useState('');

	const operators = ['/', '*', '+', '-', '.'];

	const concatCalc = value => {
		if (
			(operators.includes(value) && calc === '') ||
			(operators.includes(value) && operators.includes(calc.slice(-1)))
		) {
			return;
		}

		setCalc(calc + value);

		if (!operators.includes(value)) {
			setResult(eval(calc + value).toString());
		}
	};

	const calculate = () => {
		setCalc(eval(calc).toString());
	};

	const backSpace = () => {
		if (calc === '') {
			return;
		}

		setCalc(calc.slice(0, -1));
		setResult(eval(calc.slice(0, -1)).toString());
	};

  const allClear = () => {
    setCalc("")
    setResult("")
  }

	return (
		<div className='App'>
			<div className='calculator'>
				<div className='display'>
					{result ? <span>({result})</span> : ''}&nbsp;
					{calc || '0'}
				</div>

				<div className='operators'>
					<button onClick={() => concatCalc('/')}>/</button>
					<button onClick={() => concatCalc('*')}>*</button>
					<button onClick={() => concatCalc('+')}>+</button>
					<button onClick={() => concatCalc('-')}>-</button>

					<button onClick={backSpace}>&#8592;</button>
					<button onClick={allClear}>AC</button>
				</div>

				<div className='digits'>
					<button onClick={() => concatCalc('1')}>1</button>
					<button onClick={() => concatCalc('2')}>2</button>
					<button onClick={() => concatCalc('3')}>3</button>
					<button onClick={() => concatCalc('4')}>4</button>
					<button onClick={() => concatCalc('5')}>5</button>
					<button onClick={() => concatCalc('6')}>6</button>
					<button onClick={() => concatCalc('7')}>7</button>
					<button onClick={() => concatCalc('8')}>8</button>
					<button onClick={() => concatCalc('9')}>9</button>
					<button onClick={() => concatCalc('0')}>0</button>
					<button onClick={() => concatCalc('.')}>.</button>
					<button onClick={calculate}>=</button>
				</div>
			</div>
		</div>
	);
}

export default App;
