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
        height: '28rem',
        width: '100vw',
        borderBottom: '2px solid white'
        // alignItems:
      }}>
        {/* fullstack box */}
        <Paper sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '9rem',
          marginLeft: {lg: '15rem'},
          width: {lg: '35rem'},
          backgroundColor: 'transparent'
        }}>
        <Typography sx={{
          fontSize: {lg: '50px'},
          fontWeight: 'bold',
          color: 'white' }}>Full Stack Developer</Typography>
        </Paper>

        {/* elevating box */}

        <Paper sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '1rem',
          marginLeft: {lg: '15rem'},
          width: {lg: '20.4rem'},
          border: '1px solid grey',
          backgroundColor: 'transparent'
        }}>
        <Typography sx={{
          // marginLeft: {lg: '15rem'},
          fontSize: {lg: '13px'},
          // fontWeight: 'bold',
          marginLeft: '0.1rem',
          color: 'white'

        }}>Elevating User Experience with Creative UI/UX Design</Typography>
        </Paper>
        {/* crafting box */}
        <Paper sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '1rem',
          marginLeft: {lg: '15rem'},
          width: {lg: '28rem'},
          border: '1px solid black',
          backgroundColor: 'transparent'
        }}>
        <Typography sx={{
          // marginLeft: {lg: '15rem'},
          fontSize: {lg: '15px'},
          // fontWeight: 'bold',
          marginLeft: '0.1rem',
          color: 'white'

        }}>Crafting innovative web solutions that seamlessly integrate creativity with functionality, delivering captivating digital experiences.</Typography>
        </Paper>
        {/* 2 btns */}
        <Paper className= 'btns' sx={{
          display: 'flex',
          marginTop: '1rem',
          marginLeft: {lg: '15rem'},
          width: '20rem',
          // backgroundColor: 'grey'
          backgroundColor: 'transparent'
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