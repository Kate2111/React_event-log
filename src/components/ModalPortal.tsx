import { Button } from 'primereact/button';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';

const ModalPortal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        label="Добавить событие"
        onClick={() => {
          setShowModal(true);
        }}
      />
      {showModal &&
        createPortal(
          <Modal visible={showModal} onClose={() => setShowModal(false)} />,
          document.body,
        )}
    </>
  );
};

export default ModalPortal;
