
import DialogTitle from '@mui/joy/DialogTitle';
import List from '@mui/joy/List';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItem from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';

export default function UserProfile() {
  return (
    <>
      <DialogTitle>My Profile</DialogTitle>
      <Box sx={{ width: 320 }}>
        <List
          aria-labelledby="ellipsis-list-demo"
          sx={{ '--ListItemDecorator-size': '56px' }}
        >
          <ListItem>
            <ListItemDecorator>
              <Avatar src="/static/images/avatar/1.jpg" />
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-sm">Nadav Barda</Typography>
            </ListItemContent>
          </ListItem>
        </List>
        <div className='user-logout-btn'>
          <Button>Logout</Button>
        </div>
      </Box>
    </>
  )
}