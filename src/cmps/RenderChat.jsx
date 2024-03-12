import Grid from '@mui/joy/Grid';
import Avatar from '@mui/joy/Avatar';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import Box from '@mui/joy/Box';



export default function RenderChat() {
  return (
    // <Grid className="render-chat" container sx={{ position: 'fixed', width: '100%', bottom: '85px', padding: '10px' }}>
    //   <List>
    //     <ListItem sx={{ gap: '20px' }}>
    //       <ListItemDecorator>
    //         <Avatar src="/static/images/avatar/1.jpg" />
    //       </ListItemDecorator>
    //       <ListItemContent>
    //         <Typography level="title-sm">Nadav Barda</Typography>
    //         <Typography level="body-sm" noWrap>
    //           I&apos;ll be in your neighborhood doing errands this Tuesday.
    //         </Typography>
    //       </ListItemContent>
    //     </ListItem>
    //   </List>
    // </Grid>
    <Box className="render-chat" sx={{ position: 'fixed', bottom: '60px', left: '50%', transform: 'translate(-50%, -50%)', width: 320 }}>
      <List
        aria-labelledby="ellipsis-list-demo"
        sx={{ '--ListItemDecorator-size': '56px' }}
      >
        <ListItem>
          <ListItemDecorator>
            <Avatar src="/static/images/avatar/1.jpg" />
          </ListItemDecorator>
          <ListItemContent>
            <Typography level="title-sm">Brunch this weekend?</Typography>
            <Typography level="body-sm" noWrap>
              I&apos;ll be in your neighborhood doing errands this Tuesday.
            </Typography>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <Avatar src="/static/images/avatar/2.jpg" />
          </ListItemDecorator>
          <ListItemContent>
            <Typography level="title-sm">Summer BBQ</Typography>
            <Typography level="body-sm" noWrap>
              Wish I could come, but I&apos;m out of town this Friday.
            </Typography>
          </ListItemContent>
        </ListItem>
      </List>
    </Box>
  )
}