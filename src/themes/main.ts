
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
          main: '#577BFF'
        },  
        
        background: {
          default: '#0F0F0F',
          paper: '#1C1C1C',
        },
        text: {
          primary: '#fff',
          secondary: 'rgba(175,175,175,0.7)'
        }
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              // 2E4FF2
              // F5F5F5
              backgroundColor: '#1C1C1C',
              color: '#2E4FF2'
            }
          }
        }
      }

});





export default theme