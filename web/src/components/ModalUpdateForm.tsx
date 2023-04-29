import { ModalForm, ModalFormProps } from './Base';
import { FormTaskInput } from './Base/Modal/validation';

type Props = Pick<ModalFormProps, 'open' | 'handleClose'>;

export function ModalUpdateForm({ handleClose, open }: Props) {
  function handleSubmit(values: FormTaskInput) {
    alert(JSON.stringify(values));
  }

  return (
    <ModalForm
      open={open}
      handleClose={handleClose}
      handleSubmitAction={handleSubmit}
      isUpdate
      initialValuesCustomer={{ description: '', title: '' }}
    />
  );
}
