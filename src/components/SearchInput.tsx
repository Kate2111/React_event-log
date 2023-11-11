import { InputText } from 'primereact/inputtext';
import { FC } from 'react';

interface SearchInputProps {
  onSearchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchInput: FC<SearchInputProps> = ({ onSearchHandler, value }) => {
  return (
    <>
      <InputText
        value={value}
        onChange={onSearchHandler}
        placeholder="поиск по сообщениям..."
        className="px-2"
      />
    </>
  );
};

export default SearchInput;
