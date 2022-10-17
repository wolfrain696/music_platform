import { ChangeEvent, FC, ReactNode, useRef } from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

interface FileUploadProps {
  setFile: (file: File) => void;
  accept: string;
  children: ReactNode;
}
const StyledFileUploadContainer = styled(Box)`
  cursor: pointer;
`;
export const FileUpload: FC<FileUploadProps> = ({
  setFile,
  accept,
  children,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleClickFileInput = () => {
    inputRef.current?.click();
  };
  const handleChangeFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };
  return (
    <StyledFileUploadContainer onClick={handleClickFileInput}>
      <input
        ref={inputRef}
        accept={accept}
        type="file"
        style={{ display: 'none' }}
        onChange={handleChangeFileInput}
      />
      {children}
    </StyledFileUploadContainer>
  );
};
