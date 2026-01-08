import styled from 'styled-components';
import { Tag } from 'antd';

export const WrapperUser = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  border: 1px solid rgba(58, 151, 232, 0.15);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .name {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: var(--text-main);
    line-height: 1.1;
  }
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 2px;
`;

export const StyledTag = styled(Tag)`
  margin: 0 !important;
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  border-radius: 4px;
  border: none;
  background: ${props => (props.color === 'blue' ? '#e0f2fe' : '#f1f5f9')};
  color: ${props => (props.color === 'blue' ? '#0369a1' : '#475569')};
`;

export const AvatarWrapper = styled.div`
  position: relative;
  cursor: pointer;

  .camera-badge {
    position: absolute;
    bottom: 0;
    right: 0;
    background: var(--accent-color);
    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #fff;
    color: white;
    font-size: 11px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .ant-avatar {
    border: 2px solid transparent;
    transition: all 0.3s ease;
    font-size: 24px;
    background: #f1f5f9;
  }

  &:hover .ant-avatar {
    border-color: var(--accent-color);
    transform: scale(1.05);
  }
`;

export const ButtonLogout = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  padding: 0;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.2s ease;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    color: #e11d48;
  }

  svg {
    font-size: 14px;
  }
`;
