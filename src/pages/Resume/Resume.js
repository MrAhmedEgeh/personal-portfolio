import './Resume.css';
import React from 'react';
import {Grid, Typography, Icon, Paper, TextField} from "@material-ui/core";
import resumeData from '../../utils/resumeData';
import CustomTimeLine, {CustomTimeLineSeparator} from '../../components/Timeline/Timeline';
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CustomButton from '../../components/Button/Button'

const Resume = () => {
    return(
        <>
        {/*ABOUT ME*/}
        <Grid container className="section pb_45 pt_45"> 
            <Grid item className="section-title mb_30">
                <span></span>
                <h6 className="section_title_text">About Me</h6>
            </Grid>
            <Grid item xs={12}>
                <Typography varient='body2' className="aboutme-text">{resumeData.aboutme}</Typography>
            </Grid>
        </Grid>
        {/*Education and experience*/}
        <Grid container className="section">
        <Grid item className="section-title mb_30">
                <span></span>
                <h6 className="section_title_text">Resume</h6>
            </Grid>
            <Grid item xs={12}>
                <Grid container className="resume_timeline">
                    {/*EXPERIENCES */}
                    <Grid item sm={12} md={6}>
                        <CustomTimeLine title='Work Experience' icon={<WorkIcon />}>
                            {resumeData.experiences.map((experience) => (
                                <TimelineItem>
                                    <CustomTimeLineSeparator />
                                    <TimelineContent className="timeline_content">
                                        <Typography className="timeline_title" >{experience.title}</Typography>
                                        <Typography variant="caption" className="timeline_place">{experience.place}</Typography><br/>
                                        <Typography variant="caption" className="timeline_date">{experience.date}</Typography>
                                        <Typography variant="body2" className="timeline_description">{experience.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </CustomTimeLine>
                    </Grid>
                     {/*EDUCATION */}
                     <Grid item sm={12} md={6}>
                        <CustomTimeLine title='Education' icon={<SchoolIcon />}>
                            {resumeData.education.map((edu) => (
                                <TimelineItem>
                                    <CustomTimeLineSeparator />
                                    <TimelineContent className="timeline_content">
                                        <Typography className="timeline_title" >{edu.title}</Typography>
                                        <Typography variant="caption" className="timeline_place">{edu.place}</Typography><br/>
                                        <Typography variant="caption" className="timeline_date">{edu.date}</Typography>
                                        <Typography variant="body2" className="timeline_description">{edu.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </CustomTimeLine>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        {/*Services*/}
        <Grid container className="section pb_45">
        <Grid item className="section-title mb_30">
                <span></span>
                <h6 className="section_title_text">My Services</h6>
            </Grid>    
            <Grid item xs={12}>
                <Grid container spacing={3} justify='space-around'>
                    {resumeData.services.map(service => (
                        <Grid item xs={12} sm={6} md={3}>
                            <div className="service">
                                <Icon className="service_icon">{service.icon}</Icon>
                                <Typography className="service_title" variant="h6">{service.title}</Typography>
                                <Typography className="service_description" variant="body2">{service.description}</Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
         </Grid>
        {/*Skills*/}
        <Grid container className="section graybg pb_45 p_50"> 
        <Grid item xs={12}>
            <Grid container justify="space-between" spacing={3}>
            {resumeData.skilles.map(skill => (
              <Grid item xs={12} sm={6} md={3}>
                  <Paper elevation={0} className="skill">
                      <Typography variant="h6" className="skill_title">
                        {skill.title}
                      </Typography>
                      {skill.description.map(el => (
                          <Typography variant='body2' className='skill_description'>
                              <TimelineDot variant={'outlined'} className='timeline_dot'/>
                              {el}
                          </Typography>
                      ))}
                  </Paper>
              </Grid>
          ))}
            </Grid>
        </Grid>
        </Grid>
        {/*Contact*/}
        <Grid container spacing={6} className="section pt_45 pb_45">
               {/*Contact Form*/}
            <Grid item xs={12} lg={6}>
            <form name="contact" method="post"  data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
                <Grid container >
                    <Grid item className="section_title mb_30">
                        <span></span>
                        <h6 className="section_title_text">Contact Form</h6>
                    </Grid>
                    <Grid item  xs={12}>
                        <Grid container spacing={3}>
                       
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth type="text" name="name" label='Name' required/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth type="email" name="email" label='E-mail' required/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth type="text" name="message" label='Your message' multiline rows={4} required/>
                            </Grid>
                         
                            <Grid item xs={12}>
                            <div data-netlify-recaptcha="true"></div>
                                <button className="btn-sub" type="submit"><CustomButton text="Submit" /></button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </form>
            </Grid>
               {/*Contact Information*/}
            <Grid item xs={12} lg={5}>
             <Grid container>
             <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">Contact Information</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography className="contactInfo_item">
                                <span>Address: </span> {resumeData.address}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className="contactInfo_item">
                                <span>Phone: </span> {resumeData.phone}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className="contactInfo_item">
                                <span>E-mail: </span> {resumeData.email}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container className="contactInfo_socialscontainer">
                            {Object.keys(resumeData.social).map(key => (
                                <Grid item className="contactInfo_social">
                                    <a target="_blank" href={resumeData.social[key].link}>{resumeData.social[key].icon}</a>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
             </Grid>
            </Grid>
        </Grid>
        </>
    );
}

export default Resume;
