import AddIcon from '@mui/icons-material/Add';
import { Box, Fab, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { Card, ModalCreateForm, ModalUpdateForm } from '../components';
import { theme } from '../theme';

const arr = [
  {
    title: 'Fazer compras no mercado',
    description:
      'Comprar os itens da lista de compras, incluindo frutas, legumes, carne, ovos, pão e leite.',
  },
  {
    title: 'Limpar a casa',
    description:
      'Limpar os quartos, banheiros e cozinha, incluindo aspirar o tapete, lavar a louça, tirar o lixo e varrer o chão.',
  },
  {
    title: 'Preparar o jantar',
    description:
      'Escolher uma receita, comprar os ingredientes necessários e preparar o jantar para a família.',
  },
  {
    title: 'Fazer exercícios físicos',
    description:
      'Ir à academia, fazer uma caminhada ou praticar yoga para manter o corpo em forma e saudável.',
  },
  {
    title: 'Estudar para uma prova',
    description:
      'Revisar o material de estudo, fazer exercícios e se preparar para uma prova ou exame importante.',
  },
];

export function TodoList() {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

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
        {arr.map((item, index) => {
          return (
            <Card
              isPurple={!(index % 2)}
              title={item.title}
              description={item.description}
              onClick={() => setOpenModalUpdate(true)}
            />
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
