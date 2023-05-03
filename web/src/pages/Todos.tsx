import AddIcon from '@mui/icons-material/Add';
import { Box, Fab, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { Card, ModalCreateForm, ModalUpdateForm } from '../components';
import { theme } from '../theme';
import { trpc } from '../utils/trpc';

export function TodoList() {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const tasks = trpc.getTasks.useQuery();

  return (
    <Box pl={20} pt={25}>
      <Typography variant='h3' fontWeight='600'>
        Gerencie Suas Tarefas
      </Typography>
      <Box
        display='flex'
        gap={10}
        pt={5}
        pr={10}
        overflow='scroll hidden'
        sx={{
          '&::-webkit-scrollbar': {
            height: '0',
          },
        }}
      >
        {tasks.data?.map((item, index) => {
          return (
            <Box key={index}>
              <Card
                isPurple={!(index % 2)}
                title={item.title}
                description={item.description}
                onClick={() => setOpenModalUpdate(true)}
              />
            </Box>
          );
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
          onClick={() => setOpenModalCreate(true)}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <ModalUpdateForm
        open={openModalUpdate}
        handleClose={() => setOpenModalUpdate(false)}
      />
      <ModalCreateForm
        open={openModalCreate}
        handleClose={() => setOpenModalCreate(false)}
      />
    </Box>
  );
}
