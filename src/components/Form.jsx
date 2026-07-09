import React, { useState, useEffect } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
const [inputValue, setInputValue] = useState('');
const [error, setError] = useState('');

useEffect(() => {
if (itemToEdit) {
setInputValue(itemToEdit.value);
setError('');
} else {
setInputValue('');
}
}, [itemToEdit]);

const handleSubmit = (e) => {
e.preventDefault();

if (!inputValue.trim()) {
setError('No puedes agregar un elemento vacío.');
return;
}

addOrUpdateItem(inputValue.trim());
setInputValue('');
setError('');
};

return (
<form className="form" onSubmit={handleSubmit}>
<input
className="input"
type="text"
placeholder="Escribe un elemento"
value={inputValue}
onChange={(e) => setInputValue(e.target.value)}
/>

<button className="add-btn" type="submit">
{itemToEdit ? 'Actualizar' : 'Agregar'}
</button>

{error && <p className="error-message">{error}</p>}
</form>
);
}

export default Form;