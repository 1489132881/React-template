import { LeftOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { useUpdate } from 'ahooks';
import React, { useEffect, useRef } from 'react';

import { usePropsValue } from '@/hooks/use-props-value';

export interface ICollapsibleLayoutProps {
  style?: React.CSSProperties;
  className?: string;
  // sider
  sider?: React.ReactNode | ((collapsed: boolean) => React.ReactNode);
  // sider options
  siderOptions?: {
    // sider 位置
    position?: 'left' | 'right' | 'top' | 'bottom';
    // sider 默认宽度
    defaultWidth?: number;
    // sider 宽度
    width?: number;
    // 是否支持侧栏收起
    collapsible?: boolean;
    // 默认收起状态
    defaultCollapsed?: boolean;
    // sider 收起状态
    collapsed?: boolean;
    // sider 收起和展开的回调
    onCollapsedChange?: (collapsed: boolean) => void;
    // sider 收起后的宽度
    collapsedWidth?: number;
    // sider 最小的宽度
    minWidth?: number;
    // sider 最大的宽度
    maxWidth?: number;
    // 是否支持侧栏宽度可伸缩
    resizable?: boolean;
    // sider resize 的回调
    onResize?: (width: number) => void;
  };
  // 主要内容
  children?: React.ReactNode;
}

export const CollapsibleLayout: React.FC<ICollapsibleLayoutProps> = ({ style, className, sider, siderOptions, children }) => {
  const {
    defaultWidth: defaultSiderWidth = 280,
    width: siderWidth,
    minWidth: siderMinWidth = 200,
    maxWidth: siderMaxWidth = 480,
    collapsedWidth: siderCollapsedWidth = 50,
    defaultCollapsed: defaultSiderCollapsed = false,
    collapsed: siderCollapsed,
    collapsible: siderCollapsible = true,
    resizable: siderResizable = true,
    onResize: onSiderResize,
    onCollapsedChange: onSiderCollapsedChange
  } = siderOptions ?? {};

  const hasSider = !!sider;

  const [width, setWidth] = usePropsValue<number>({
    defaultValue: defaultSiderWidth,
    value: siderWidth
  });
  const [collapsed, setCollapsed] = usePropsValue<boolean>({
    defaultValue: defaultSiderCollapsed,
    value: siderCollapsed,
    onChange: onSiderCollapsedChange
  });

  const draggingRef = useRef(false);

  const siderRef = useRef<HTMLDivElement>(null!);
  const gutterRef = useRef<HTMLDivElement>(null!);

  const update = useUpdate();

  useEffect(() => {
    if (!siderResizable || !hasSider) {
      return;
    }

    let startX = 0;
    let startWidth = 0;

    const gutterDom = gutterRef.current;

    const onMousedown = (e: MouseEvent) => {
      draggingRef.current = true;

      startX = e.clientX;

      const { width } = siderRef.current.getBoundingClientRect();
      startWidth = width;

      update();

      e.preventDefault();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (draggingRef.current) {
        const moveX = e.clientX - startX;
        let newWidth = startWidth + moveX;
        if (newWidth <= siderMinWidth) newWidth = siderMinWidth;
        if (newWidth >= siderMaxWidth) newWidth = siderMaxWidth;
        setWidth(newWidth);
        onSiderResize?.(newWidth);
      }
    };

    const onMouseUp = () => {
      draggingRef.current = false;
      update();
    };

    gutterDom.addEventListener('mousedown', onMousedown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      gutterDom.removeEventListener('mousedown', onMousedown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [siderResizable, hasSider, siderMinWidth, siderMaxWidth]);

  const onIconClick = () => {
    setCollapsed(!collapsed);
    onSiderCollapsedChange?.(!collapsed);
  };

  return (
    <StyledContainer style={style} className={className}>
      {sider && (
        <StyledSider ref={siderRef} style={{ width: collapsed ? siderCollapsedWidth : width }} isDragging={draggingRef.current}>
          {typeof sider === 'function' ? sider(collapsed) : sider}
          {siderCollapsible && (
            <StyledIcon collapsed={collapsed} onClick={onIconClick}>
              <LeftOutlined />
            </StyledIcon>
          )}
        </StyledSider>
      )}
      <StyledGutter ref={gutterRef} visible={!collapsed && hasSider && siderResizable} isDragging={draggingRef.current} />
      <StyledContent>{children}</StyledContent>
      {draggingRef.current && <StyledMask />}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

const StyledSider = styled.div<{ isDragging: boolean }>`
  position: relative;
  width: 240px;
  height: 100%;
  transition: ${(props) => (props.isDragging ? 'unset' : '0.1s width ease-out')};
`;

const StyledIcon = styled.div<{ collapsed: boolean }>`
  box-sizing: border-box;
  position: absolute;
  top: 120px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 58px;
  padding: 23px 0;
  border-radius: 0 6px 6px 0;
  background: var(--kms-grey-2);
  z-index: 100;
  cursor: pointer;

  ${(props) =>
    props.collapsed &&
    css`
      svg {
        transform: scale(-1);
      }
    `};
`;

const StyledGutter = styled.div<{ visible: boolean; isDragging: boolean }>`
  z-index: ${(props) => (props.isDragging ? 999 : 99)};
  position: relative;
  width: 0;
  height: 100%;
  cursor: col-resize;
  user-select: none;

  &:hover::before {
    background: var(--kms-brand-5);
  }

  ${(props) =>
    props.visible &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
        transition: 0.2s background-color;
        transition-delay: 0.3s;
        background-color: ${props.isDragging ? 'var(--kms-brand-5)' : 'transparent'};
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 100%;
      }
    `};
`;

const StyledContent = styled.div`
  flex: 1;
  width: 0;
  height: 100%;
`;

const StyledMask = styled.div`
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  cursor: col-resize;
`;
