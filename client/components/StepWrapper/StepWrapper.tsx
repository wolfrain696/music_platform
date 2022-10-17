import { FC, ReactNode } from 'react';
import { Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material';
import styled from '@emotion/styled';

export const StyledStepWrapper = styled(Grid)`
  margin: 70px 0;
  min-height: 270px;
  justify-content: center;
`;

interface StepWrapperProps {
  activeStep: number;
  children: ReactNode;
}

const steps = ['Main info', 'Upload image', 'Upload song'];

export const StepWrapper: FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={step} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <StyledStepWrapper container>
        <Card>{children}</Card>
      </StyledStepWrapper>
    </Container>
  );
};
