import React, { useState } from 'react';
import { MdOutlineRadioButtonChecked } from 'react-icons/md';

const OrderForm = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [wilaya, setWilaya] = useState('');
  const [commune, setCommune] = useState('');

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with form data (e.g., send to server)
    console.log('Form submitted:', { name, phoneNumber, address, wilaya, commune });
  };

  return (
    <div className='flex flex-col justify-center items-center mt-4 mb-4 '>
      <h2 className='text-3xl mb-4 '>Valider votre commande</h2>
      <form action='#' onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-5'>
        <input type="text" value={name} placeholder='Nom' className='border border-gray-400 py-1 px-2 rounded-lg'
         onChange={(e) => setName(e.target.value)} required />
         <input type="text" value={prenom} placeholder='Prénom' className='border border-gray-400 py-1 px-2 rounded-lg' 
         onChange={(e) => setPrenom(e.target.value)} required />
        </div>
        <div className='grid grid-cols-1 mt-4'>
         <input type="tel" value={phoneNumber} placeholder='N° Tél' className='border border-gray-400 py-1 px-2 rounded-lg '
          onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div className='grid grid-cols-1 mt-4'>
         <input type="text" value={address} placeholder='Adresse compléte' className='border border-gray-400 py-1 px-2 rounded-lg'
          onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className='grid grid-cols-1 mt-4'>
          <select value={wilaya}  className="border border-gray-400 py-1 px-2 rounded-lg" 
          onChange={(e) => setWilaya(e.target.value)} required>
              <option value="">Select Wilaya</option>
              <option value="">Alger</option>
              {/* Add wilaya options here */}
            </select>
        </div>
        <div className='grid grid-cols-1 mt-4'>
            <select value={commune} className="border border-gray-400 py-1 px-2 rounded-lg" 
            onChange={(e) => setCommune(e.target.value)} required>
                <option value="">Select Commune</option>
                <option value="">Cheraga</option>
                {/* Add commune options here */}
              </select>
        </div>
        <div className=' flex flex-row justify-evenly items-end mt-5 mb-5'>
                <div className='flex items-center justify-center
                bg-orange-500 hover:bg-gray-200 h-10 w-40 cursor-pointer rounded-lg'>
                  <button   type="submit"  
                   className='flex font-semibold flex-row items-center justify-center'>
                    Confirmer</button>
                </div>
            </div>
      </form>
    </div>
  );
};

export default OrderForm;
