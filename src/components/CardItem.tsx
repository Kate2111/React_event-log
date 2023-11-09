import { Card } from 'primereact/card';
import { FC } from 'react';
import { Image } from 'primereact/image';

interface CardIremProps {
  description: string;
}

const CardItem: FC<CardIremProps> = ({ description }) => {
  return (
    <Card className="md:w-25rem w-full">
      <div className="flex ">
        <div className="flex-1 flex flex-row gap-4 text-xs">
          <div className="flex flex-column align-items-start">
            <p>Дата</p>
            <p>Важность</p>
            <p>Оборудование</p>
            <p>Сообщение</p>
          </div>
          <div className="flex flex-column align-items-start">
            <p>21.11.12</p>
            <p>
              <i className="pi pi-times"></i> важно
            </p>
            <p>Вегас</p>
            <p>{description}</p>
          </div>
        </div>

        <Image
          src="https://w.forfun.com/fetch/7a/7a8ee07ec53aca2c78a47850bf615c18.jpeg"
          alt="Image"
          width="100"
          className="border-circle overflow-hidden"
        />
      </div>
    </Card>
  );
};

export default CardItem;
