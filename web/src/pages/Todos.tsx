import { Box, Fab, Tooltip, Typography } from '@mui/material';
import { Card } from '../components';
import AddIcon from '@mui/icons-material/Add';
import { theme } from '../theme';
import { ModalForm } from '../components/Modal';
import { useState } from 'react';

const arr = [1, 2, 3, 4];

export function TodoList() {
  const [open, setOpen] = useState(false);

  return (
    <Box px={20} pt={25}>
      <Typography variant='h3' fontWeight='600'>
        Gerencie Suas Tarefas
      </Typography>
      <Box display='flex' gap={10} paddingTop={5} maxWidth='100%'>
        {arr.map((item, index) => {
          return <Card isPurple={!(index % 2)} onClick={() => setOpen(true)} />;
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
          onClick={() => setOpen(true)}
        >
          <AddIcon color='#F5F5F5' />
        </Fab>
      </Tooltip>
      <ModalForm open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
}
