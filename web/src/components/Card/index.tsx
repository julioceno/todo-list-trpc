import { Box, Button, Divider, Typography, styled } from '@mui/material';
import { theme } from '../../theme';

const MyCard = styled(Box)(({ isPurple }: { isPurple: boolean }) => {
  const color = isPurple
    ? theme.palette.primary.main
    : theme.palette.secondary.main;

  return {
    display: 'flex',
    flexDirection: 'column',

    height: '15rem',
    width: '20rem',

    borderWidth: '4px',
    borderStyle: 'solid',
    borderColor: color,
    fontFamily: ['"Montserrat"', 'Open Sans'].join(','),

    padding: 10,
    color,

    transition: 'transform 0.3s ease-out',
    '&:hover': {
      transform: 'translateY(-1rem)',
    },

    cursor: 'pointer',
  };
});

interface Props {
  isPurple: boolean;
}

export function Card({ isPurple }: Props) {
  return (
    <MyCard isPurple={isPurple}>
      <Typography fontWeight='500' fontSize={30}>
        Título
      </Typography>
      <Typography
        style={{
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitLineClamp: 5,
          WebkitBoxOrient: 'vertical',
        }}
      >
        Descrição Descrição Descrição Descrição Descrição Descrição Descrição
        Descrição Descrição Descrição Descrição Descrição Descrição Descrição
        Descrição Descrição Descrição Descrição Descrição Descrição Descrição
        Descrição
      </Typography>
    </MyCard>
  );
}
