import { Button } from 'primereact/button';
import { User } from '@/types/types';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { useDispatch } from 'react-redux';
import { FC, useState } from 'react';
import { columnsTable, initialUser } from '@/constant/constant';
import { addNewEvent as addNewEventSearch } from '@/store/slice/searchSlice';
import { addNewEvent as addNewEventSelected } from '@/store/slice/selectedSlice';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ visible, onClose }) => {
  const dispatch = useDispatch();

  const [newEvent, setNewEvent] = useState<User>(initialUser);

  const handleChange = (field: keyof User, value: string) => {
    setNewEvent((prev) => ({ ...prev, [field]: value }));
  };

  const addNewEventHandler = () => {
    const item: User = {
      id: 'fhxdff',
      data: newEvent.data,
      name: newEvent.name,
      description: newEvent.description,
      equipment: newEvent.equipment,
      importan: newEvent.importan,
    };

    dispatch(addNewEventSearch(item));
    dispatch(addNewEventSelected(item));
    onClose();
  };

  const footerContent = (
    <div>
      <Button label="Добавить" onClick={addNewEventHandler} icon="pi pi-check" autoFocus />
    </div>
  );

  return (
    <Dialog
      header="Добавить событие"
      visible={visible}
      style={{ width: '50vw' }}
      onHide={onClose}
      footer={footerContent}>
      {columnsTable.map((col) => (
        <InputText
          className="w-full"
          key={col.field}
          placeholder={col.header}
          value={newEvent[col.field as keyof User]}
          onChange={(e) => handleChange(col.field as keyof User, e.target.value)}
        />
      ))}
    </Dialog>
  );
};
export default Modal;
