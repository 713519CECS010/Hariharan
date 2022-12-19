import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { useNavigate} from "react-router-dom"
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Button } from '@mui/material';
import { useContext } from "react";
import { cartCtx} from '../../App';
import { useState } from 'react';

import {
  Typography, 
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";



export function Navbar(){
  const [usercart,admincart, updateCart, setUserCart,setAdminCart,usertotalQty,admintotalQty] = useContext(cartCtx);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    
    const [Name] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <div>
        <AppBar position="sticky" style={{padding:'0px'}}>
         <Toolbar>
               
                <Button  style={{color:"white"}} onClick={()=>navigate('/admin')}>Home</Button>
                <Button  style={{color:"white"}} onClick={()=>navigate('/admin/product')}>Product</Button>
                <Button  style={{color:"white"}} onClick={()=>navigate('/admin/addmobile')}>Add Mobile</Button>
                <IconButton
                        sx={{ marginLeft: "auto" }}
                        className="avatar"
                        onClick={handleClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                      >
                        <Avatar alt={Name ? Name : user.username} src="" />
                      </IconButton>
                            <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{ "aria-labelledby": "basic-button" }}
                      >
                        <MenuItem>
                          <Typography>{Name ? Name : user.username}</Typography>
                        </MenuItem>
                        
                        <MenuItem
                          onClick={() => {
                            localStorage.clear();
                            window.location.reload(false);
                            window.location.href = "/";
                          }}
                        >
                          Log Out
                        </MenuItem>
                      </Menu>
            <IconButton  style={{marginLeft:'auto'}} color='inherit' aria-label='Cart' onClick={()=>navigate("/admin/cart")}>
                <Badge badgeContent={admintotalQty} color="success">
                     <ShoppingCartCheckoutIcon color="action" />
                </Badge>
                
            </IconButton>
        </Toolbar>
      </AppBar>

      
      </div>
    )
}