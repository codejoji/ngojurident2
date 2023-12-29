import React,{useState} from 'react'
import Header from './ReusableComponents/Header'
import Footer from './ReusableComponents/Footer'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';


const ContactUs = () => {
    const navigate=useNavigate();
    const [name,setname]=useState('')
    const [city,setcity]=useState('')
    const [email,setemail]=useState('')
    const [phone,setphone]=useState('')
    const [comments,setcomments]=useState('')
    const [reason,setreason]=useState('')
    const [orgname,setorgname]=useState('')


  


  return (
    <div>
        <Header/>
            <div className='choice1' style={{fontFamily:'Times New Roman', padding:"30px"}}>
                <u><h1>CONTACT US</h1></u>
            </div>
            <div style={{backgroundColor:"white", paddingBottom:"20px"}}>
                <Grid container spacing={0} className='choice1'>
                    <Grid item xs={4}>
                        <Box sx={{maxWidth: '100%',padding:"20px"}}>
                            <TextField onChange={(e)=>setname(e.target.value)}fullWidth label="Your Name*" id="fullWidth" />
                        </Box>
                        <Box sx={{maxWidth: '100%',padding:"20px"}}>
                            <TextField onChange={(e)=>setemail(e.target.value)} fullWidth label="Email-ID*" id="fullWidth" />
                        </Box>
                        <Box sx={{maxWidth: '100%',padding:"20px"}}>
                            <TextField
                            onChange={(e)=>setcomments(e.target.value)}
                                fullWidth
                                id="fullWidth"
                                multiline
                                rows={4}
                                label="Comments"/>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{maxWidth: '100%',padding:"15px"}}>
                            <TextField onChange={(e)=>setcity(e.target.value)}fullWidth label="City*" id="fullWidth" />
                        </Box>
                        <Box sx={{maxWidth: '100%',padding:"15px"}}>
                            <TextField onChange={(e)=>setphone(e.target.value)} fullWidth label="Phone*" id="fullWidth" />
                        </Box>
                        <Box sx={{maxWidth: '100%',padding:"15px"}}>
                            <TextField onChange={(e)=>setreason(e.target.value)}fullWidth label="Reason to Contact*" id="fullWidth" />
                        </Box>
                        <Box sx={{maxWidth: '100%',padding:"15px"}}>
                            <TextField onChange={(e)=>setorgname(e.target.value)}fullWidth label="organisation Name*" id="fullWidth" />
                        </Box>
                    </Grid>
                </Grid>

                <div className='choice1'>
                <button className='loginbutton' style={{padding:"10px 20px"}}>Submit</button>
                </div>
            </div>

            <div>
                <Grid container spacing={2} className='choice1'>
                    <Grid item xs={12} sm={12} md={6} lg={4} className='choice1'>
                        <div>
                            <h2 style={{fontFamily:'Times New Roman'}}>India's first free helpline number</h2>
                            <h1 style={{color:"red",fontFamily:'Times New Roman'}}>+91 6788865786</h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}  className='choice1'>
                        <div>
                            <h2 style={{fontFamily:'Times New Roman'}}>Drop Us a Mail @</h2>
                            <h1 style={{color:"red",fontFamily:'Times New Roman'}}>ngo@gmail.com</h1>
                            <h3></h3>
                        </div>
                    </Grid>
                </Grid>
            </div>

        <Footer/>
    </div>
  )
}

export default ContactUs