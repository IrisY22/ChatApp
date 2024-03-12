
import DialogTitle from '@mui/joy/DialogTitle';
import List from '@mui/joy/List';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';

export default function AllChats() {

  return (
    <>
      <DialogTitle>Members</DialogTitle>
      <Box sx={{ width: 320 }}>
        <List
          aria-labelledby="ellipsis-list-demo"
          sx={{ '--ListItemDecorator-size': '56px' }}
        >
          <ListItemButton>
            <ListItemDecorator>
              <Avatar src="/static/images/avatar/1.jpg" />
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-sm">Brunch this weekend?</Typography>
              <Typography level="body-sm" noWrap>
                I&apos;ll be in your neighborhood doing errands this Tuesday.
              </Typography>
            </ListItemContent>
          </ListItemButton>
          <ListItemButton>
            <ListItemDecorator>
              <Avatar src="/static/images/avatar/2.jpg" />
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-sm">Summer BBQ</Typography>
              <Typography level="body-sm" noWrap>
                Wish I could come, but I&apos;m out of town this Friday.
              </Typography>
            </ListItemContent>
          </ListItemButton>
        </List>
      </Box>
    </>
  )
}