import React from 'react'
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Select } from "@mui/material";

interface MenuProps {
   selectedItem: number;
   setSelectedItem?: React.Dispatch<React.SetStateAction<number>>;
   labelText: string;
   setLabelText?: React.Dispatch<React.SetStateAction<string>>;
   icon?: JSX.Element;
   setIcon?: React.Dispatch<React.SetStateAction<JSX.Element>>;
}

const menuItems = [
   { text: 'Overview' },
   { text: 'Change delivery details' },
   { text: 'Order history' },
   { text: 'Change password' },
];

const Menu = ({ selectedItem, setSelectedItem, labelText, setLabelText, icon, setIcon }: MenuProps) => {

   // const handleMenuItemClick = (index: number) => {
   //    setSelectedItem(index);
   //    setLabelText(menuItems[index].text);
   //    setIcon(menuItems[index].icon)
   // };

   return (
      <Select
         labelId="demo-simple-select-label"
         id="demo-simple-select"
         value={selectedItem}
         label={selectedItem}
         style={{ padding: 0, background: '#FFFFFF', borderRadius: '8px' }}
      >
         <MenuList style={{ padding: 0 }}>
            <MenuItem style={{ height: 60 }}>
               <ListItemText >My information</ListItemText>
            </MenuItem>
            <Divider style={{ margin: 0 }} />
            {menuItems.map((menuItem, index) => (
               <MenuItem key={index} selected={selectedItem === index}
               // onClick={() => handleMenuItemClick(index)}
               >
                  {/* <ListItemIcon >{menuItem.icon}</ListItemIcon> */}
                  <ListItemText >{menuItem.text}</ListItemText>
               </MenuItem>
            ))}
         </MenuList>
      </Select >
   )
}

export default Menu