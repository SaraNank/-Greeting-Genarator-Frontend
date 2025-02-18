//import * as React from 'react';
import { useEffect, useState } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export default function SelectionButton({label}:{label:string}) {
  const theme = useTheme();
  const [choice, setChoice] = useState<string[]>([]);
  const [disabled , setDisabled ] = useState(false);
 
  useEffect(()=>{
    //להביא מmobx את את המערך
  },[choice])

  // useEffect(()=>{
  //   setDisplay(false);
  //   //צריך להאזין למשתנה בmobx
  // },[])


  const handleChange = (event: SelectChangeEvent<typeof choice>) => {
    const {
      target: { value },
    } = event;
    setChoice(
      typeof value === 'string' ? value.split(',') : value,
    );
   
   
  };

  return (
    <div  >
    
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"

          value={choice}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
          disabled={disabled}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, choice, theme)}
            >
              {name}
            </MenuItem>
           
          ))}
        </Select>
      </FormControl>
      
    </div>
  );
}