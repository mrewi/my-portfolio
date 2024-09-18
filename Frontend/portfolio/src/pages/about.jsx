// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Paper, Typography, Box, Button } from '@mui/material'
import { faCommentAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import faGithub from '@fortawesome/free-brands-svg-icons'

const about = () => {
  return (
    <div>
      {/* about box */}
      <Box sx={{
        backgroundColor: 'pink',
        marginTop: '1.5rem',
        height: '35rem',
        borderBottom: '2px solid white',
        display: 'flex',
      }}>
        <Paper sx={{
          // marginLeft: {lg: '15rem'},
          marginLeft: {lg: '3rem', xl: '15rem'},
          width: {lg: '14rem'},
          height: '4rem',
          display: 'flex',
          marginTop: '4rem'

        }}>
          <Typography sx={{
            width: {lg: '25rem'},
            fontSize: {lg: '40px'},
            fontWeight: 'bold'

          }}>About Me.</Typography>
        </Paper>
        <Paper sx={{
          marginLeft: {lg: '-14rem'},
          width: {lg: '8rem'},
          height: '2rem',
          display: 'flex',
          marginTop: '9rem'

        }}>
          <Typography sx={{
            width: {lg: '25rem'},
            fontSize: {lg: '18px'},
            fontWeight: 'bold'

          }}>Hi there!👋🏻</Typography>
        </Paper>
        <Paper sx={{
          marginLeft: {lg: '-8rem'},
          width: {lg: '36rem'},
          height: '2rem',
          display: 'flex',
          marginTop: '12rem'

        }}>
          <Typography sx={{
            // width: {lg: '25rem'},
            fontSize: {lg: '18px'},
            fontWeight: 'bold'

          }}>My name is Ewi Damilola! I'm a Full Stack Web Developer!</Typography>
        </Paper>
        <Paper sx={{
          marginLeft: {lg: '-36rem'},
          width: {lg: '65rem'},
          height: '4rem',
          display: 'flex',
          marginTop: '15rem'

        }}>
          <Typography sx={{
            // width: {lg: '25rem'},
            fontSize: {lg: '18px'},
            fontWeight: 'bold'
          }}>I have more than two years of experience in MERN Stack. I specialize in building amazing web applications using NextJs, ReactJs, Tailwind CSS, Typescript, Nodejs, ExpressJs and MongoDB.</Typography>
        </Paper>
        <Paper sx={{
          marginLeft: {lg: '-65rem'},
          width: {lg: '65rem'},
          height: '4rem',
          display: 'flex',
          marginTop: '20rem'

        }}>
          <Typography sx={{
            // width: {lg: '25rem'},
            fontSize: {lg: '18px'},
            fontWeight: 'bold'
          }}>I love turning ideas into reality and making sure everything works smoothly. From creating beautiful, responsive designs to developing powerful backends, I focus on delivering top-quality work that meets your needs.</Typography>
        </Paper>
        <Paper sx={{
          marginLeft: {lg: '-65rem'},
          width: {lg: '32rem'},
          height: '2rem',
          display: 'flex',
          marginTop: '25rem'

        }}>
          <Typography sx={{
            // width: {lg: '25rem'},
            fontSize: {lg: '18px'},
            fontWeight: 'bold'
          }}>Lets team up and create something awesome together!</Typography>
        </Paper>
        {/* <Paper sx={{
          marginLeft: {lg: '-32rem'},
          width: {lg: '65rem'},
          height: '6rem',
          display: 'flex',
          marginTop: '28rem',
          borderTop: '2px solid blue'

        }}>
          <Paper sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '1rem',
          // marginLeft: {lg: '15rem'},
          width: {lg: '9rem'},
          border: '1px solid black',
          backgroundColor: 'green',
          // borderRadius: '30px'
        }}>
        <Button sx={{
          width: '9rem',
          height: '3rem',
          color: 'black',
          fontWeight: 'bold',
          backgroundColor: 'white',
          borderRadius: '10px'
        }}>
          <FontAwesomeIcon icon={faCommentAlt} 
          style={{
            padding: '10px',
            marginLeft: '-1rem'
          }} />
          Contact
        </Button>
        </Paper>

        <Paper sx={{
          backgroundColor: 'orange',
          display: 'flex',
          marginLeft: '45rem',
          width: '10rem'
        }}>
        </Paper>
        </Paper> */}
      </Box>
    </div>
  )
}

export default about