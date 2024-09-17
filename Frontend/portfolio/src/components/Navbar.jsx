// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Box, Button} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

  return (
    <div >
      <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '4rem',
        borderBottom: '1px solid white',
      }}>
        <Button href='/home' sx={{color:'white'}}>Home</Button>
        <Button href='/about' sx={{color:'white'}}>About</Button>
        <Button href='/skills' sx={{color:'white'}}>Skills</Button>
        <Button href='/project' sx={{color:'white'}}>Project</Button>
        <Button href='/contact' sx={{color:'white'}}>Contact</Button>
        {/* <Button variant="contained" href='/contact' sx={{color:'black', backgroundColor: 'white', borderRadius:'30px' }}>Resume</Button> */}
      </Box>

      <Box 
      sx={{
        display: 'flex', 
        justifyContent: 'end',
        marginTop: '-3.5rem',
        marginRight: '10rem'}}> 
        <Button 
          variant="contained" 
          sx={{
            color:'black', 
            backgroundColor: 'white', 
            borderRadius:'30px', }}>Resume</Button>
        </Box>
        <Box sx={{
          display: 'flex', 
          justifyContent: 'end',
          marginTop: '-2.2rem',
          marginRight: '4rem'
        }}>
        <Button 
        variant='contained' 
        sx={{
          borderRadius: '10rem',
          width: '1rem',
          backgroundColor: 'black',

        }}><FontAwesomeIcon fontSize={23} icon={faMoon} /></Button>
        </Box>
    </div>
  )
}

export default Navbar