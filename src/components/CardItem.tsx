import { Card } from 'primereact/card';
import { FC } from 'react';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import tor from '@/assets/tor.png';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '@/types/types';
import { selectedState, toggleSelectedUser } from '@/store/slice/selectedSlice';
interface CarsItemProps {
  info: User;
}

const CardItem: FC<CarsItemProps> = ({ info }) => {
  const { selectedUsers } = useSelector(selectedState);
  const dispatch = useDispatch();
  const isSelected = selectedUsers?.some((selectedUser) => selectedUser.id === info.id);

  const handleClick = () => {
    dispatch(toggleSelectedUser(info));
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.keyCode === 32) {
      dispatch(toggleSelectedUser(info));
    }
  };

  return (
    <Card
      className={`md:w-25rem w-full h-13rem align-items-center text-xs cursor-pointer ${
        isSelected ? 'selected' : ''
      }`}
      onClick={handleClick}
      onKeyDown={handleKeyPress}>
      <div className="flex ">
        <div className="flex-1 flex flex-row gap-4 ">
          <div className="flex flex-column align-items-start">
            <p>Дата</p>
            <p>Важность</p>
            <p>Оборудование</p>
            <p>Сообщение</p>
          </div>
          <div className="flex flex-column align-items-start">
            <p>{info.data}</p>
            <p className="flex flex-row gap-2 align-items-center">
              <Button className="p-button-success w-1rem h-1rem p-0 " />
              {info.importan}
            </p>
            <p>{info.equipment}</p>
            <p>{info.description}</p>
          </div>
        </div>

        <div className="flex flex-column gap-2 align-items-center">
          <Image
            src={tor}
            alt="Image"
            width="100"
            height="100"
            className="border-circle overflow-hidden"
          />
          <p>{info.name}</p>
        </div>
      </div>
    </Card>
  );
};

export default CardItem;
/* className={
    importan === 'низкая'
      ? 'p-button-success'
      : importan === 'высокая'
      ? 'p-button-warning'
      : 'p-button-danger'
  } */
