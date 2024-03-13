import Grid from '@mui/joy/Grid';
import Avatar from '@mui/joy/Avatar';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import Box from '@mui/joy/Box';



export default function RenderChat({ msgs }) {
  return (
    <Box className="render-chat" sx={{ position: 'fixed', bottom: '60px', left: '50%', transform: 'translate(-50%, -50%)', width: 320 }}>
      <List
        aria-labelledby="ellipsis-list-demo"
        sx={{ '--ListItemDecorator-size': '56px' }}
      >
        {msgs.map((currMsg, index) => (
          <ListItem key={index}>
            <ListItemDecorator>
              <Avatar src="/static/images/avatar/1.jpg" />
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="body-sm" noWrap>
                {currMsg}
              </Typography>
            </ListItemContent>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}