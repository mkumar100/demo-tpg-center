import logo from './logo.svg';
import './App.css';
import { Typography, Box } from '@mui/material';

function App() {
  return (
    <div style={{width:"100%"}}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        }}>
          <Typography>Hello</Typography>
      </Box>
    </div>
  );
}

export default App;
