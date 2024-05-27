import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 12.4rem;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 2.4rem;
    }
  }

`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;

  .label {
    margin-top: 1.6rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }
  
  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 5.6rem;
  padding: 1.6rem;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  border-radius: 1rem;
  margin-bottom: .8rem;
  background-image: url();

  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.6rem;

  > option {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 1.6rem;
  }

`;
