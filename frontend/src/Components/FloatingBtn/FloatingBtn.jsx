 import { KeyboardArrowUp } from '@mui/icons-material';
import { useScrollTrigger, Zoom } from '@mui/material';
import Fab from '@mui/material/Fab';

 const FloatingBtn = () => {
    return (
        <Zoom in={useScrollTrigger({threshold:100})} >
        <Fab onClick={()=>{
            scrollTo(0,0)
        }} size='small' sx={{position:'fixed' , bottom:20,right:20}} color="warning" aria-label="add" >
        <KeyboardArrowUp fontSize='medium' />
      </Fab>
        </Zoom>
    );
 }
 
 export default FloatingBtn;
 