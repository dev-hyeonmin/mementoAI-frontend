import styled from 'styled-components';

interface IconButtonProps {
  icon: React.ReactNode;
  type?: 'button' | 'submit';
  skin?: 'disabled' | 'primary';
}

const ButtonStyled = styled.button<{ skin: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 6px;
  width: 32px;
  height: 32px;
  background-color: ${(props) => (props.skin === 'primary' ? props.theme.color.primary : props.theme.color.grayLight)};
  color: ${(props) => props.theme.color.white};

  // &.primary {
  //   background-color: ${(props) => props.theme.color.primary};
  //   color: #fff;
  // }

  // &.default {
  //   border: 1px solid #cbd5e0;
  //   color: #4a5568;
  // }
`;

export default function IconButton({
  icon,
  skin = 'primary'
}: IconButtonProps) {
  // const className = `${skin}`; // 클래스 명으로 구분하는 케이스
  return (
    <ButtonStyled skin={skin}>
      {icon}
    </ButtonStyled>
  );
}