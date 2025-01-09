import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import GiftIcon from '@/assets/svg/christmas/gift.svg';
import SnowManIcon from '@/assets/svg/christmas/snowman.svg';
import StarIcon from '@/assets/svg/christmas/star.svg';
import LogoIcon from '@/assets/svg/logo.svg';
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
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'center' }}>
        <LogoIcon width={100} height={100} />
        <GiftIcon width={100} height={100} />
        <SnowManIcon width={100} height={100} />
        <StarIcon width={100} height={100} />
      </div>
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
