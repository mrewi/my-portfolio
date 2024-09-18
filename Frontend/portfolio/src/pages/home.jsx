// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Box, Typography, Paper, Button } from '@mui/material'

const home = () => {
  return (
    <div style={{
      display: 'flex'
    }}>
      {/* row container */}
      <Box sx={{
        // backgroundColor: 'pink',
        marginTop: '1.5rem',
        height: '32rem',
        width: '100vw',
        borderBottom: '2px solid white'
        // alignItems:
      }}>
        {/* fullstack box */}
        <Paper sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: {xs: 'center', sm: 'center', md: 'start', lg: 'start', xl: 'start'},
          marginTop: {xs: '8.5rem', sm: '8.5rem', md: '5rem', lg: '9rem', xl: '9rem'},
          marginLeft: {md: '2.5rem', lg: '3rem', xl: '15rem'},
          width: {md: '29%', lg: '53%', xl: '45%'},
          backgroundColor: 'transparent'
        }}>
        <Typography sx={{
          fontSize: {xs: '34px', sm: '35px', md: '44px', lg: '50px', xl: '50px'},
          fontFamily: 'Roboto Mono, monospace',
          // fontSize: {xs: '', sm: '', md: '', lg: '', xl: ''},
          fontWeight: 'bold',
          display: 'flex',
          marginLeft: {md: '0.1rem', lg: '0.1rem', xl: '0.1rem'},
          color: 'white' 
          }}>Full Stack Developer</Typography>
        </Paper>

        {/* elevating box */}

        <Paper sx={{
          display: 'flex',
          justifyContent: {xs: 'center', sm: 'center', md: 'start', lg: 'start', xl: 'start'},
          alignItems: 'center',
          marginTop: '1rem',
          marginLeft: {xs:'1rem', sm: '23%', md: '2.5rem', lg: '3rem', xl: '15rem'},
          width: {xs:'93%', sm:'53%', md: '36%', lg: '28%', xl: '21%'},
          border: '1px solid grey',
          borderRadius: '10px',
          backgroundColor: 'transparent'
        }}>
        <Typography sx={{
          // marginLeft: {lg: '15rem'},
          fontSize: {xs: '14px', sm: '10px', md: '13px', lg: '13px', xl: '13px'},
          textAlign: { xs: 'center', sm: 'center', md: 'left' },
          fontFamily: 'Roboto Mono, monospace',
          // fontWeight: 'bold',
          marginLeft: '0.1rem',
          color: 'white'

        }}>Elevating User Experience with Creative UI/UX Design</Typography>
        </Paper>
        {/* crafting box */}
        <Paper sx={{
          display: 'flex',
          justifyContent: {xs: 'center', sm: 'center', md: 'start', lg: 'start', xl: 'start'},
          alignItems: 'center',
          marginTop: '1rem',
          marginLeft: {xs:'10%', sm:'20%', md: '2.5rem', lg: '3rem', xl: '15rem'},
          // marginLeft: {lg: '15rem'},
          width: { xs: '80%', sm: '60%', md: '36%', lg: '34%', xl: '25%' },
          border: '1px solid black',
          backgroundColor: 'transparent'
        }}>
        <Typography sx={{
          // marginLeft: {lg: '15rem'},
          fontSize: {xs: '19px', sm: '19px', md: '15px', lg: '15px', xl: ''},
          fontFamily: 'Roboto Mono, monospace',
          textAlign: { xs: 'center', sm: 'center', md: 'left' },
          fontWeight: 'bold',
          // marginLeft: '0.1rem',
          color: 'grey'

        }}>Crafting innovative web solutions that seamlessly integrate creativity with functionality, delivering captivating digital experiences.</Typography>
        </Paper>
        {/* 2 btns */}
        <Paper className= 'btns' sx={{
          display: 'flex',
          marginTop: '1rem',
          // marginLeft: {lg: '3rem', xl: '15rem'},
          marginLeft: {sm: '34%', md: '2.5rem', lg: '3rem', xl: '15rem'},
          // marginLeft: {lg: '15rem'},
          width: '16.3rem',
          height: {xs:'20%', sm: '20%'},
          backgroundColor: 'grey',
          // backgroundColor: 'transparent'
        }}>
        <Paper sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '1rem',
          // marginLeft: {lg: '15rem'},
          width: {lg: '8rem'},
          border: '1px solid black',
          backgroundColor: 'transparent',
          // borderRadius: '30px'
        }}>
        <Button sx={{
          width: '8rem',
          height: '3rem',
          color: 'black',
          fontWeight: 'bold',
          backgroundColor: 'white',
          // fontFamily: 'Roboto Mono, monospace',
          borderRadius: '30px'
        }}>
          Hire ME
        </Button>
        </Paper>

        <Paper sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '1rem',
          marginLeft: {lg: '2rem'},
          width: {lg: '8rem'},
          border: '1px solid black',
          backgroundColor: 'transparent',
          // borderRadius: '30px'
        }}>
        <Button sx={{
          width: '8rem',
          height: '3rem',
          color: 'white',
          fontWeight: 'bold',
          backgroundColor: 'black',
          // fontFamily: 'Roboto Mono, monospace',
          borderRadius: '30px'
        }}>
          Projects
        </Button>
        </Paper>
        </Paper>

      </Box>
    </div>
  )
}

export default home