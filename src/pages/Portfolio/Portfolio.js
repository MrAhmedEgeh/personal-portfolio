import './Portfolio.css';
import React from 'react';
import {Grid, Typography,Tabs, Tab, Card, CardActionArea, CardMedia, CardContent, Grow, Dialog, DialogTitle, DialogContent, DialogActions} from "@material-ui/core";
import {useState} from 'react';
import resumeData from '../../utils/resumeData';
const Portfolio = () => {

    const [tabValue, setTabValue] = useState("All");
    const [projectDialog, setProjectDialog] = useState(false);


    return(
       <Grid container spacing={1} className="pb_45 pt_45 section mb_20">
           {/*TITLE */}
       <Grid item className="section-title mb_30">
                <span></span>
                <h6 className="section_title_text">Portfolio</h6>
            </Grid> 
        {/*TABS */}
        <Grid item xs={12}>
            <Tabs value={tabValue} indicator='white' className='customTabs' onChange={(event, newValue) => setTabValue(newValue)}>
                <Tab label='All' value='All' className={tabValue == 'All' ? 'customTabs_item active': 'customTabs_item'} />
                {[...new Set(resumeData.projects.map(item => item.tag))].map(tag => (
                    <Tab label={tag} value={tag} className={tabValue == tag ? 'customTabs_item active': 'customTabs_item'}/>
                ))}
            </Tabs>
        </Grid>
        <Grid item>
            <Grid container spacing={3}>
                {resumeData.projects.map(project => (
                    <>
                    {tabValue == project.tag || tabValue == 'All' ? (

                        <Grid item xs={12} sm={6} md={4}>
                        <Grow in timeout={1000}>
                        <Card className="custom_card" onClick={() => setProjectDialog(project)}>
                        <CardActionArea>
                            <CardMedia className='custom_card_image' image={project.image} title={project.title}/>
                            <CardContent variant='body2'>
                                <Typography className='custom_card_title'>{project.title}</Typography>
                                <Grid item className='custom_card_tags_con'>{project.tags?.map(el => (<span class='custom_card_tags'>{el}</span>))}</Grid>
                                <Typography variant='body2' className='custom_card_caption'>{project.caption}</Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                        </Grow>
                        </Grid>
                    ) : null}
                    </>
                ))}
            </Grid>
        </Grid>
        <Dialog className="projectDialog" open={projectDialog} onClose={() => setProjectDialog(false)}>
            <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
            <img src={projectDialog.image} alt="" className="projectDialog_image"/>
            <DialogContent>
            <Grid item className='custom_card_tags_con'>{projectDialog.tags?.map(el => (<span class='custom_card_tags'>{el}</span>))}</Grid>
                <Typography className="projectDialog_description">{projectDialog.description}</Typography>
            </DialogContent>
            <DialogActions className="projectDialog_actions">
            {projectDialog?.links?.map(link => (
                <a href={link.link} target='_blank' className="projectDialog_icon">{link.icon}</a>
            )) }
            </DialogActions>
        </Dialog>
       </Grid>

    );
}

export default Portfolio;
