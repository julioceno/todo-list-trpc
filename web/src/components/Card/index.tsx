import { Box, BoxProps, Typography, styled } from '@mui/material';
import { theme } from '../../theme';

const MyCard = styled(Box)(({ isPurple }: { isPurple: boolean }) => {
  const color = isPurple
    ? theme.palette.primary.main
    : theme.palette.secondary.main;

  return {
    display: 'flex',
    flexDirection: 'column',

    height: '15rem',
    minWidth: '20rem',

    borderWidth: '4px',
    borderStyle: 'solid',
    borderColor: color,

    padding: 10,
    color,

    transition: 'transform 0.3s ease-out',
    '&:hover': {
      transform: 'translateY(-1rem)',
    },

    cursor: 'pointer',
  };
});

interface Props extends BoxProps {
  isPurple: boolean;
  title: string;
  description: string;
}

export function Card({ isPurple, title, description, ...rest }: Props) {
  return (
    <MyCard isPurple={isPurple} {...rest}>
      <Typography fontWeight='500' fontSize={30}>
        {title}
      </Typography>
      <Typography
        style={{
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitLineClamp: 5,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {description}
      </Typography>
    </MyCard>
  );
}
