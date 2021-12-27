import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// import { useStyles } from './DropDownMenu.styles';

export default function DropDownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const { dropdownBtn, menu } = useStyles();
  return (
    <div>
      <Button
        // className={dropdownBtn}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        SERVICES
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id="simple-menu"
        // className={menu}
        anchorEl={anchorEl}
        elevation={8}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>-Sell your Home</MenuItem>
        <MenuItem onClick={handleClose}>-Buy A Home</MenuItem>
        <MenuItem onClick={handleClose}>-Private Lender</MenuItem>
      </Menu>
    </div>
  );
}
