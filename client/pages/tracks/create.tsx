import MainLayout from '../../layouts/MainLayout';
import { StepWrapper } from '../../components/StepWrapper/StepWrapper';
import { Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import styled from '@emotion/styled';
import { FileUpload } from '../../components/FileUpload/FileUpload';
import { useInput } from '../../hooks/useInput';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { AppThunk } from '../../store';
import { createTrack } from '../../store/asyncThunks/fetchTracks';
import { TrackImage } from '../../components/TrackImage/TrackImage';
import { useRouter } from 'next/router';

const StyledStepContainer = styled(Grid)`
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  width: 500px;
`;

const Create = () => {
  const dispatch = useAppDispatch() as AppThunk;
  const [step, setStep] = useState(0);
  const [picture, setPicture] = useState<File | null>(null);
  const [audio, setAudio] = useState<File | null>(null);
  const songName = useInput('');
  const authorName = useInput('');
  const text = useInput('');
  const router = useRouter();

  const nextStep = () => {
    if (step !== 2) {
      setStep((prev) => prev + 1);
    } else {
      handleCreateTrack();
    }
  };
  const backStep = () => {
    if (step !== 0) {
      setStep((prev) => prev - 1);
    }
  };

  const handleCreateTrack = () => {
    if (!picture || !audio) return;
    const formData = new FormData();
    formData.append('name', songName.value);
    formData.append('text', text.value);
    formData.append('artist', authorName.value);
    formData.append('picture', picture);
    formData.append('audio', audio);
    dispatch(createTrack(formData));
    router.back();
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={step}>
        {step === 0 && (
          <StyledStepContainer container>
            <TextField {...songName} label="Song name" />
            <TextField {...authorName} label="Author name" />
            <TextField {...text} label="Lyrics" rows={3} multiline />
          </StyledStepContainer>
        )}
        {step === 1 && (
          <StyledStepContainer container>
            {picture && <TrackImage src={URL.createObjectURL(picture)} />}
            <FileUpload setFile={setPicture} accept={'image/*'}>
              <Button>Upload image</Button>
            </FileUpload>
          </StyledStepContainer>
        )}
        {step === 2 && (
          <StyledStepContainer container>
            <FileUpload setFile={setAudio} accept={'audio/*'}>
              <Button>Upload song </Button>
            </FileUpload>
          </StyledStepContainer>
        )}
      </StepWrapper>
      <Grid container justifyContent={'space-between'}>
        <Button disabled={step === 0} onClick={backStep}>
          Back
        </Button>
        <Button disabled={step === 2 && !audio} onClick={nextStep}>
          Next
        </Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
