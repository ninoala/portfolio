import { useState } from 'react';

const CopyEmailButton = () => {
/*function creates a new temporary textarea element, sets its inner text to my email address, 
appends it to the document.body and executes copy command, as well as changes the text content of the button*/

  const [clicked, setClicked] = useState(false);

  const handleCopy = () => {

    const email = 'yegor.nino@gmail.com';
    const textField = document.createElement('textarea');
    textField.innerText = email;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();

    //update button text when email is copied
    setClicked(true);

    //reset button text after 3 seconds
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  };

  return (
    <button className='btn btn--copy' onClick={handleCopy}>
         <span>{clicked ? 'Email copied' : 'Say hello'}</span>
    </button>
  );
};

export default CopyEmailButton