import './Profile.css';
import React from 'react';
import { Typography } from '@material-ui/core';
import PersonalImage from '../../assests/images/ahmed.png';
import mycv from '../../assests/documents/Ahmed Egeh CV.pdf';
import CustomTimeLine, {CustomTimeLineSeparator} from '../Timeline/Timeline';
import resumeData from '../../utils/resumeData';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import CustomButton from '../Button/Button'
import GetAppIcon from '@material-ui/icons/GetApp';

const CustomTimeLineItem = ({title, text, link}) => (
    <TimelineItem>
    <CustomTimeLineSeparator />
    <TimelineContent className='timeline_content'>
        {link ? (
            <Typography className='timeline_text'><span>{title}: </span> <a href={link} target='_blank'>{text}</a></Typography>
        ) : (
            <Typography className='timeline_text'><span>{title}</span> {text}</Typography>
        )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
    return(
        <div className="profile container_shadow ">
            <div className="profile_name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>
            </div>
            <figure className="profile_image">
                <img src={PersonalImage} alt="Personal image"/>
            </figure>
            <div className="profile_information">
            <CustomTimeLine icon={<PersonOutlineIcon />}> 
            <CustomTimeLineItem title="Name" text={resumeData.name} />
            <CustomTimeLineItem title="Title" text={resumeData.title} />
            <CustomTimeLineItem title="Email" text={resumeData.email} />

            <CustomTimeLineItem title={"Github"} text={resumeData.social.Github.text} link={resumeData.social.Github.link} />
            <CustomTimeLineItem title={"LinkedIn"} text={resumeData.social.LinkedIn.text} link={resumeData.social.LinkedIn.link} />
            </CustomTimeLine>
                
                <div className="button_container">
                <a className="mycv" href={mycv} download><CustomButton text={'Download CV'} icon={<GetAppIcon />} /></a>
                </div>
             </div>
        </div>
    );
}

export default Profile;