import { User } from '@/types/types';

export const requestUsersWithError = (): Promise<User[]> => {
  return new Promise(() => {
    throw new Error('500, unknown server error');
  });
};

export const usersService = (): Promise<User[]> => {
  const users: User[] = [
    {
      id: 'f230fh0g3',
      data: '21.12.2022',
      name: 'Иванов А.В.',
      description: 'Сервер недоступен',
      equipment: 'Вегас',
      image: 'bamboo-watch.jpg',
      importan: 'Высокая',
    },
    {
      id: 'nvklal433',
      data: '10.12.2022',
      name: 'Смирнов В.Е.',
      description: 'Низкий заряд батареи',
      equipment: 'Коммутатор',
      image: 'black-watch.jpg',
      importan: 'Низкая',
    },
    {
      id: 'zz21cz3c1',
      data: '10.12.2022',
      name: 'Кузнецов В.У.',
      description: 'Открыта крышка',
      equipment: 'Люк',
      image: 'blue-band.jpg',
      importan: 'Критическая',
    },
    {
      id: '244wgerg2',
      data: '21.12.2022',
      name: 'Попов Д.В.',
      description: 'Низкий заряд батареи',
      equipment: 'КИБП',
      image: 'blue-t-shirt.jpg',
      importan: 'Критическая',
    },
    {
      id: 'h456wer53',
      data: '21.12.2022',
      name: 'Васильев К.С.',
      description: 'Недостаточное количество масла',
      equipment: 'Трансформатор',
      image: 'blue-t-shirt.jpg',
      importan: 'Высокая',
    },
    {
      id: 'av2231fwg',
      data: '10.12.2022',
      name: 'Соколов Г.Д.',
      description: 'Обрыв сетевого кабеля',
      equipment: 'ЛВС',
      image: 'blue-t-shirt.jpg',
      importan: 'Низкая',
    },
    {
      id: 'bib36pfvm',
      data: '05.12.2022',
      name: 'Михайлов Л.О.',
      description: 'Отсутствует подтверждение пуска в работу',
      equipment: 'Люк',
      image: 'blue-band.jpg',
      importan: 'Низкая',
    },
    {
      id: 'mbvjkgip5',
      data: '05.12.2022',
      name: 'Новиков П.Р.',
      description: 'Низкий заряд батареи',
      equipment: 'Вегас',
      image: 'bamboo-watch.jpg',
      importan: 'Критическая',
    },
    {
      id: 'vbb124btr',
      data: '10.12.2022',
      name: 'Федоров М.И.',
      description: 'Недостаточное количество масла',
      equipment: 'Коммутатор',
      image: 'black-watch.jpg',
      importan: 'Критическая',
    },
    {
      id: 'cm230f032',
      data: '05.12.2022',
      name: 'Морозов Л.Б.',
      description: 'Низкий заряд батареи',
      equipment: 'КИБП',
      image: 'blue-t-shirt.jpg',
      importan: 'Низкая',
    },
  ];

  return new Promise((res) => {
    setTimeout(() => {
      res(users);
    }, 2000);
  });
};
