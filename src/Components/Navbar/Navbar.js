import React, { useState } from 'react';
import './Navbar.css';
import { ChevronDown, ChevronUp } from 'react-feather';

const Navbar = ({sortingOption, onSortingChange, groupingOption, onGroupingChange}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='nav-bar'>
      <div className='drop-down' onClick={toggleDropdown}>
      <img src="https://cdn-icons-png.flaticon.com/128/8017/8017760.png" className='icon' alt='Menu'/>
        <p className='bold'>Display</p>
        {dropdownOpen ? <ChevronUp className='icon' /> : <ChevronDown className='icon' />}
      </div>
      {dropdownOpen && (
        <div className='dropdown-options'>
          <DropdownOption label="Grouping" value={groupingOption} onChange={onGroupingChange}>
            <option value='status'>Status</option>
            <option value='user'>User</option>
            <option value='priority'>Priority</option>
          </DropdownOption>
          <DropdownOption label="Ordering" value={sortingOption} onChange={onSortingChange}>
            <option value='priority'>Priority</option>
            <option value='title'>Title</option>
          </DropdownOption>
        </div>
      )}
    </div>
  );
};

const DropdownOption = ({ label, value, onChange, children }) => {
  return (
    <div className='dd-option'>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {children}
      </select>
    </div>
  );
};

export default Navbar;
