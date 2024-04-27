import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import DevicesIcon from '@mui/icons-material/Devices';
import Typography from '@mui/material/Typography';




export default function Experience() {
  return (
    <Timeline position="alternate"
        className='timeline'
    >
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.white"
        >
          Nov 2022 - March 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <CastForEducationIcon color="secondary"/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" fontWeight={600}>
            Coding Ninjas
          </Typography>
          <Typography>Teaching Assistant</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.white"
        >
          Jan 2023 - July 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" fontWeight={600}>
            BNP Paribas
          </Typography>
          <Typography>Intern</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.white"
        >
          July 2023 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <DevicesIcon/>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" fontWeight={600}>
            BNP Paribas
          </Typography>
          <Typography>Integration Architect</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}


