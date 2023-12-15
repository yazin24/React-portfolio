import React from 'react'

const SubmitSuccessMessage = (show, handleCloseMessage) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${show ? 'visible' : 'invisible'}`}>
    <div className="bg-white p-8 rounded shadow-md">
       <h2 className="text-2xl font-bold mb-4">Submission Successful</h2>
       <p>Your form has been submitted successfully!</p>
       <button
          onClick={handleCloseMessage}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
       >
          Close
       </button>
    </div>
 </div>
  );
};

export default SubmitSuccessMessage