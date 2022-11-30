import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Quicksand',
      textTransform: 'none',
    },
  },
});

export default function muiTheme(): any {
  return theme;
}
