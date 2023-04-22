import { Box, Fab, Tooltip, Typography } from '@mui/material';
import { Card } from '../components';
import AddIcon from '@mui/icons-material/Add';
import { theme } from '../theme';

const arr = [1, 2, 3, 4];
export function TodoList() {
  return (
    <Box px={20} pt={25}>
      <Typography variant='h3' fontWeight='600'>
        Gerencie Suas Tarefas
      </Typography>
      <Box display='flex' gap={10} paddingTop={5}>
        {arr.map((item, index) => {
          return <Card isPurple={!(index % 2)} />;
        })}
      </Box>
      <Tooltip title='Criar nova tarefa' placement='top'>
        <Fab
          color='primary'
          aria-label='add'
          style={{
            position: 'fixed',
            right: theme.spacing(5),
            bottom: theme.spacing(5),
          }}
        >
          <AddIcon color='#F5F5F5' />
        </Fab>
      </Tooltip>
    </Box>
  );
}
