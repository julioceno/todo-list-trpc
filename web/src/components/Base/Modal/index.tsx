import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Form, Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { FormTaskInput, schema } from './validation';
import { FormHelperText } from '@mui/material';
import { formatList } from '../../../utils';
import { useMemo } from 'react';

export interface ModalFormProps {
  open: boolean;
  initialValuesCustomer?: FormTaskInput;
  isUpdate?: boolean;
  handleClose: () => void;
  handleSubmitAction: (values: FormTaskInput) => void;
}

export function ModalForm({
  open,
  handleClose,
  isUpdate = false,
  handleSubmitAction,
  initialValuesCustomer,
}: ModalFormProps) {
  const title = isUpdate ? 'Atualize Sua Tarefa' : 'Crie Sua Tarefa';
  const buttonPrimaryActionTitle = isUpdate ? 'Atualizar' : 'Criar';

  const initialValues: FormTaskInput = useMemo(() => {
    return initialValuesCustomer
      ? initialValuesCustomer
      : { title: '', description: '' };
  }, [initialValuesCustomer]);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth='md'>
      <DialogTitle>{title}</DialogTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitAction}
        validationSchema={toFormikValidationSchema(schema)}
      >
        {({ values, handleBlur, handleChange, handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <DialogContent>
              <TextField
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
                {buttonPrimaryActionTitle}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
}
