import { Card } from 'primereact/card';
import { FC } from 'react';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
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
      event.preventDefault();
      dispatch(toggleSelectedUser(info));
    }
  };

  return (
    <Card
      tabIndex={0}
      className={`md:w-25rem w-full h-13rem align-items-center text-xs cursor-pointer media-card ${
        isSelected ? 'selected' : ''
      }`}
      onClick={handleClick}
      onKeyDown={handleKeyPress}>
      <div className="card-content">
        <div className="flex-1 flex flex-row gap-4 justify-content-center media-table">
          <div className="flex flex-column align-items-start">
            <p>Дата</p>
            <p>Важность</p>
            <p>Оборудование</p>
            <p>Сообщение</p>
          </div>
          <div className="flex flex-column align-items-start">
            <p>{info.data}</p>
            <p className="flex flex-row gap-2 align-items-center">
              <Button
                className={` w-1rem h-1rem p-0  ${
                  info.importan === 'Низкая'
                    ? 'p-button-success'
                    : info.importan === 'Высокая'
                    ? 'p-button-warning'
                    : 'p-button-danger'
                }`}
              />
              {info.importan}
            </p>
            <p>{info.equipment}</p>
            <p>{info.description}</p>
          </div>
        </div>

        <div className="flex flex-column gap-2 align-items-center">
          <Image
            src="https://www.pinclipart.com/picdir/big/165-1653686_female-user-icon-png-download-user-colorful-icon.png"
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
