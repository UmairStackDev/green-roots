import React, { useState } from 'react';


import "./CategoryRegistration.css"
const CategoryRegistration = () => {
  const [formData, setFormData] = useState({
    CategoryName: '',
    CategoryCode: '',

    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
  };
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="container-fluid my-3 signinform_1" >
        <div className="container">
          <div className="row justify-content-center align-items-center">

            <div className="col-6 form_form_1">
              <div className='pt-2'>
                <div class="gradient-text">Category  Registration</div>
              </div>
              <div className="form">
                <form onSubmit={handleSubmit}>
                    <label>
                    Category Name *
                      <input
                        type="text"
                        name="CategoryName"
                        value={formData.CategoryName}
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <div className="first d-flex gap-4 align-items-end">
                    <label>
                    Category Code *
                      <input
                        type="text"
                        name="CategoryCode"
                        value={formData.CategoryCode}
                        onChange={handleChange}
                        required
                        disabled
                      />
                    </label>
                
                 
                    <label>
                    Status *
                    <select className='select_1'>
                      <option value="">Active </option>
                      <option value="Inactive">Inactive</option>  
                    </select>
                    </label>
                    {/* Add similar fields for other form inputs */}
                    </div>
                  
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryRegistration
