import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  console.log('HabitAddForm');
  return (
    <form ref={formRef} className='add-form' onSubmit={onSubmit}>
      <input ref={inputRef} className='add-input' type='text' />
      <button className='add-button'>Add</button>
    </form>
  );
});

export default HabitAddForm;
