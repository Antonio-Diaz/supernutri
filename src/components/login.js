import {
  Grid,
  Paper,
  Box,
  TextField,
  Button,
  Link,
  Typography,
} from '@mui/material'
import Divider from '@mui/material/Divider'
import { Google, Facebook } from '@mui/icons-material'
import styled from '@emotion/styled'

const OutlinedButton = styled(Button)({
  borderColor: 'rgb(6, 68, 32)',
  color: 'rgb(132,184,146)',
  ':hover': { borderColor: 'rgb(6, 68, 32)' },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const ContainedButton = styled(Button)({
  backgroundColor: 'rgb(6, 68, 32, 0.8)',
  color: 'rgb(228, 239, 231)',
  ':hover': { backgroundColor: 'rgb(6, 68, 32)' },
})

const Login = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: 'rgb(253, 250, 246)',
        padding: { xs: 4, sm: 5 },
        minWidth: { xs: '10rem', sm: '20rem' },
        maxWidth: { xs: '20rem', sm: '30rem' },
      }}
    >
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        <Grid item xs={12}>
          <Box
            sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
          >
            <img src="http://via.placeholder.com/100x100" alt="imagen logo" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Correo electronico"
            placeholder="email@dominio.com"
            type="email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Contraseña"
            placeholder="Contraseña"
            type="password"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <ContainedButton fullWidth variant="contained">
            {' '}
            Inicia sesion{' '}
          </ContainedButton>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              fontSize: '0.8rem',
              color: 'rgb(228, 239, 231)',
            }}
          >
            <Link href="#" underline="hover" color="rgb(132,184,146)">
              {'¿Olvidaste tu contraseña?'}
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Divider
            sx={{ my: { xs: 3, sm: 4 } }}
            variant="middle"
            orientation="horizontal"
          />
        </Grid>
        <Grid item xs={12}>
          <OutlinedButton fullWidth variant="outlined">
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                mr: '0.5rem',
                width: '25%',
              }}
            >
              <Google />
            </Box>
            <Typography
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                width: '75%',
                fontSize: { xs: '0.7rem', sm: '1rem' },
              }}
            >
              Continua con google
            </Typography>
          </OutlinedButton>
        </Grid>
        <Grid item xs={12}>
          <OutlinedButton fullWidth variant="outlined">
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                mr: '0.5rem',
                width: '25%',
              }}
            >
              <Facebook />
            </Box>
            <Typography
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                width: '75%',
                fontSize: { xs: '0.7rem', sm: '1rem' },
              }}
            >
              Continua con Facebook
            </Typography>
          </OutlinedButton>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Login
