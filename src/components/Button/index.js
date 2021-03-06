import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({theme}) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.contrastRadius};
  border-radius: ${({theme}) => theme.borderRadius};
  border: 0;

  width: 100%;
  padding: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;  
  outline: 0;
  transition: .3s;
  cursor: pointer;

  &:hover,
  &:focus {
      opacity: .5;
  }

  &:disabled {
      background-color: #979797;
      cursor: not-allowed;
  }
`;

Button.propTypes = {
    type: PropTypes.oneOf(['subit', 'type', 'button']).isRequired,
    children: PropTypes.node.isRequired,
};

export default Button;
