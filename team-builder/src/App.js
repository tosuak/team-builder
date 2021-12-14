import React, { useState } from 'react';
import Form from './Form.js'
import './App.css';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
};

function App() {
  const [members, setMembers] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
  }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form 
        values={formValues}
        updates={updateForm}
        submit={submitForm}
      />
    </div>
  );
}

export default App;
