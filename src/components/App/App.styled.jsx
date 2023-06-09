import Styled from '@emotion/styled';

export const Container = Styled.div`
padding: 20px;
 background-color: ${({ theme }) => {
    return theme.colors.backgroundColor;
  }};

`;

export const SectionsContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
`;

export const Section = Styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 600px;
  height: 570px;
  padding: 20px;
  background-color: ${({ theme }) => {
    return theme.colors.sectionBackgroundColor;
  }};
  border-radius: ${({ theme }) => {
    return theme.containerBorderRadius;
  }};
  box-shadow: ${({ theme }) => {
    return theme.boxShadow;
  }};

  &.contacts {
    overflow-y: auto;
  }
`;

export const Title = Styled.h1`
 margin-top: 0;
  margin-bottom: 40px;
  text-align: center;
  font-size: 32px;
  text-transform: uppercase;

`;

export const SectionTitle = Styled.h2`
  margin-top: 0;
  text-align: center;
  font-size: 28px;
`;