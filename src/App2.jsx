import React, { useRef, useState } from 'react';

const App2 = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const nameInputRef = useRef(null);

  const surnameInputRef = useRef(null);

  const handlekeyup1 = (e) => {
    console.log(e);
    if (e.key === 'Enter') {
      surnameInputRef.current.focus();
    }
  };

  const handlekeyup2 = (e) => {
    if (e.key === 'Enter') {
      nameInputRef.current.focus();
    }
  };

  console.log(nameInputRef);
  return (
    <div>
      <form>
        <label htmlFor='myName'>Name</label>
        <input
          id='myName'
          ref={nameInputRef}
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onKeyUp={handlekeyup1}
        />

        <label htmlFor='mySurname'>surname</label>
        <input
          id='mySurname'
          ref={surnameInputRef}
          type='text'
          placeholder='surname'
          value={surname}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onKeyUp={handlekeyup2}
        />
      </form>
    </div>
  );
};

export default App2;
