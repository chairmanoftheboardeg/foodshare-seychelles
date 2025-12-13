import React from 'react';

const InventoryManagement = () => {
  // Placeholder data for the inventory table
  const inventoryItems = [
    { id: 1, name: 'Canned Beans', quantity: 150, expiry: '2026-10-01' },
    { id: 2, name: 'Rice (5kg bags)', quantity: 45, expiry: 'N/A' },
    // More items would be fetched from an API
  ];

  return (
    <div className="page-container">
      <h2>🚛 Inventory Management</h2>
      <button className="btn-primary">Add New Item</button>
      
      <p>This is where the Admin tracks all food stock, quantities, and expiration dates.</p>

      <table className="data-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity (Units)</th>
            <th>Expiration Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventoryItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.expiry}</td>
              <td>
                <button>Edit</button> | <button>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryManagement;
