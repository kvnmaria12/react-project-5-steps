import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Jonas" });

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }

    // BAD PRACTICE
    // test.name = "Fred";
    // setTest({ name: "Fred" });
  }

  return (
    <div>
      {isOpen ? (
        <button className='close' onClick={() => setIsOpen((is) => !is)}>
          &times;
        </button>
      ) : (
        <button className='open' onClick={() => setIsOpen(!isOpen)}>
          &#x271B;
        </button>
      )}

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          {/* step message */}
          <TheStepMessage step={step}>{messages[step - 1]}</TheStepMessage>

          <div className='buttons'>
            <Button bgColor='#7950f2' textColor='#fff' onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor='#7950f2' textColor='#fff' onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

//
function TheStepMessage({ step, children }) {
  return (
    <div className='message'>
      <h3>Step {step}:</h3>

      {children}
    </div>
  );
}

// building a re-useable buttons
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
