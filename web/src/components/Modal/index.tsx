import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Form, Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { schema } from './validation';
import { FormHelperText } from '@mui/material';
import { formatList } from '../../utils';

interface Props {
  open: boolean;
  handleClose: () => void;
}

export function ModalForm({ open, handleClose }: Props) {
  function handleCreate() {
    alert('Ainda não implementado');
    handleClose();
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth='md'>
      <DialogTitle>Crie Sua Tarefa</DialogTitle>
      <Formik
        initialValues={{ title: '', description: '' }}
        onSubmit={handleCreate}
        validationSchema={toFormikValidationSchema(schema)}
      >
        {({ values, handleBlur, handleChange, handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <DialogContent>
              <TextField
                autoFocus
                margin='dense'
                label='Título'
                name='title'
                type='text'
                fullWidth
                variant='standard'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <TextField
                autoFocus
                margin='dense'
                label='Descrição'
                name='description'
                type='text'
                fullWidth
                variant='standard'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              {
                <FormHelperText error>
                  {formatList(Object.values(errors))}
                </FormHelperText>
              }
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='secondary' fullWidth>
                Cancelar
              </Button>
              <Button type='submit' variant='contained' fullWidth>
                Criar
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
}
