import { trpc } from '../utils/trpc';
import { ModalForm, ModalFormProps } from './Base';
import { FormTaskInput } from './Base/Modal/validation';

type Props = Pick<ModalFormProps, 'open' | 'handleClose'>;

export function ModalCreateForm({ handleClose, open }: Props) {
  const createTask = trpc.createTask.useMutation();

  const context = trpc.useContext();

  function handleSubmit(values: FormTaskInput) {
    createTask.mutate(values, {
      onSuccess() {
        context.getTasks.refetch();
        handleClose();
      },
    });
  }

  return (
    <ModalForm
      open={open}
      handleClose={handleClose}
      handleSubmitAction={handleSubmit}
    />
  );
}
