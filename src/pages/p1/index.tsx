import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/constants';

export function Frontend() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      Header <div onClick={() => navigate(ROUTES.Backend)}>进入后台</div>
    </StyledHeader>
  );
};

const Content = () => {
  return <div>Content</div>;
};

const StyledHeader = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
`;
