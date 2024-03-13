
import DialogTitle from '@mui/joy/DialogTitle';
import List from '@mui/joy/List';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import SearchInput from './SearchInput';

export default function AllMembers({ msgs }) {

  return (
    <>
      <DialogTitle>Members</DialogTitle>
      <SearchInput />
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
              <Typography level="title-sm">Nadav Barda</Typography>
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
              <Typography level="title-sm">Sinpol Ben David</Typography>
              <Typography level="body-sm" noWrap>
                {msgs[msgs.length - 1]}
              </Typography>
            </ListItemContent>
          </ListItemButton>
        </List>
      </Box>
    </>
  )
}