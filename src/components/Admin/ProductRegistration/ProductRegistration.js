import React, { useState } from 'react';
import "./ProductRegistration.css"; // Assuming you have a separate CSS file

const ProductRegistration = () => {
  const [ProductRegitration, setProductRegitration] = useState({
    ProductName: '',
    NetWeight: '',
    ProductCode: '',
    Unit: '',
    Price: '',
    SelectProductImage: '',
    Todate: '',
    Fromdate: '',
    DiscountPercent: '',
    DiscountedAmount: '',
    Description: '',
    Ingredients: '',
    Benefits: '',
    CategoryName: '',
    Status: 'Active',
    Type: 'Dry',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductRegitration({
      ...ProductRegitration,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
  };

  return (
    <>
      <div className="container-fluid my-3 product_form">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-6 product1_form">
              <div className='pt-2'>
                <div className="gradient-text">Product Registration</div>
              </div>
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <div className="first d-flex gap-4 align-items-end first_2 ">
                    <label>
                      Product Name *
                      <input
                        type="text"
                        name="ProductName"
                        value={ProductRegitration.ProductName}
                        onChange={handleChange}
                        required
                        className="productname"
                      />
                    </label>
                    <div className="first d-flex gap-4">
                      <label className='netweight'>
                        Net Weight *
                        <input
                          type="text"
                          name="NetWeight"
                          value={ProductRegitration.NetWeight}
                          onChange={handleChange}
                          required
                          className='netweight'
                        />
                      </label>
                      <label>
                        Product Code *
                        <input
                          type="text"
                          name="ProductCode"
                          value={ProductRegitration.ProductCode}
                          onChange={handleChange}
                          required
                          disabled
                        />
                      </label>
                    </div>
                  </div>

                  <div className="first d-flex gap-4 align-items-end first_2 ">
                    <label>
                      Unit *
                      <input
                        type="text"
                        name="Unit"
                        value={ProductRegitration.Unit}
                        onChange={handleChange}
                        required
                      />
                    </label>

                    <label>
                      Net Weight *
                      <input
                        type="text"
                        name="NetWeight"
                        value={ProductRegitration.NetWeight}
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <label style={{ width: "50%" }}>
                      Type *
                      <select name="Type" onChange={handleChange} className='typeselect'>
                        <option value="">Dry</option>
                        <option value="">Liquid</option>
                      </select>
                    </label>

                  </div>

                  <div className="first d-flex gap-4 align-items-end first_2 ">
                    <label>
                      Price *
                      <input
                        type="text"
                        name="Price"
                        value={ProductRegitration.Price}
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <label>
                      Discount Percent *
                      <input
                        type="text"
                        name="DiscountPercent"
                        value={ProductRegitration.DiscountPercent}
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <div className="first d-flex gap-4">

                      <label>
                        <div className="Discounted" style={{ whiteSpace: "nowrap" }}>
                          Discounted Amount *
                        </div>
                        <input
                          type="text"
                          name="DiscountedAmount"
                          value={ProductRegitration.DiscountedAmount}
                          onChange={handleChange}
                          required
                        />
                      </label>
                    </div>
                  </div>

                  <div className=" d-flex gap-4  ">
                    <label>
                      From Date *
                      <input
                        type="date"
                        name="Fromdate"
                        value={ProductRegitration.Fromdate}
                        onChange={handleChange}
                        required
                        style={{
                          padding: '8px',
                          borderRadius: '4px',
                          border: '1px solid #ccc',
                          fontSize: '16px',
                          width: "100%",
                        }}
                      />
                    </label>

                    <label>
                      <div className="Discounted">
                        To Date *
                      </div>
                      <input
                        type="date"
                        name="Todate"
                        value={ProductRegitration.Todate}
                        onChange={handleChange}
                        required
                        style={{
                          padding: '8px',
                          borderRadius: '4px',
                          border: '1px solid #ccc',
                          fontSize: '16px',
                        }}
                      />
                    </label>
                    <label style={{ width: "100%", marginBottom: "0.5rem", boxSizing: "border-box" }}>
                      Category Name *
                      <select
                        className='typeselect'
                        name="CategoryName"
                        onChange={handleChange}
                        style={{ width: "100%" }}
                      >
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
                    </label>
                  </div>

                  <label>
                    <div className="Discounted" style={{ marginBottom: '10px' }}>
                      Descriptions *
                    </div>
                    <textarea
                      name="Description"
                      value={ProductRegitration.Description}
                      onChange={handleChange}
                      required
                      style={{
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                        width: '100%',
                        minHeight: '100px',
                      }}
                    />
                  </label>

                  <label>
                    <div className="Discounted" style={{ marginBottom: '10px' }}>
                      Ingredients *
                    </div>
                    <textarea
                      name="Ingredients"
                      value={ProductRegitration.Ingredients}
                      onChange={handleChange}
                      required
                      style={{
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                        width: '100%',
                        minHeight: '100px',
                      }}
                    />
                  </label>

                  <label>
                    <div className="Discounted" style={{ marginBottom: '10px' }}>
                      Benefits *
                    </div>
                    <textarea
                      name="Benefits"
                      value={ProductRegitration.Benefits}
                      onChange={handleChange}
                      required
                      style={{
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                        width: '100%',
                        minHeight: '100px',
                      }}
                    />
                  </label>

                  <div className="first d-flex gap-4 align-items-end first_2 ">

                    <label style={{ width: "50%" }}>
                      Status   *
                      <select className='select_2' name="Status" onChange={handleChange}>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </label>
                    <label style={{ width: "50%" }}>
                      Stock Status *
                      <select className='select_2' name="Status" onChange={handleChange}>
                        <option value="Out of stock">Stock Available</option>
                        <option value="Inactive">Out of Stock</option>
                        <option value="Inactive">Discontinue</option>
                      </select>
                    </label>
                  </div>

                  <div className="name" style={{ marginBottom: '0px', fontSize: '16px', fontWeight: 'bold' }}>
                    Select Product Image
                  </div>
                  <input
                    type="file"
                    name="SelectProductImage"
                    value={ProductRegitration.SelectProductImage}
                    onChange={handleChange}
                    required
                    className='my-2'
                    style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />


                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductRegistration;
