import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faImage, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import Grid from '@mui/joy/Grid';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';

export default function SendMsg({ onSendMsg }) {
  return (
    <Grid className="send-msg" container sx={{ position: 'fixed', bottom: 0, width: '100%', padding: '10px' }}>
      <Button
        size="lg"
        variant="plain"
        color="neutral"
      ><FontAwesomeIcon icon={faFaceSmile} /></Button>
      <Button
        size="lg"
        variant="plain"
        color="neutral"
      ><FontAwesomeIcon icon={faImage} /></Button>
      <Grid xs={8}>
        <Textarea
          color="neutral"
          minRows={2}
          placeholder="Send Message"
          size="sm"
          variant="outlined"
          style={{ width: '100%', padding: '10px', resize: 'none', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </Grid>
      <Button
        size="lg"
        variant="plain"
        color="neutral"
        onClick={onSendMsg}><FontAwesomeIcon icon={faPaperPlane} /></Button>
    </Grid >
  )
}