import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  margin-top: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: transparent;
  border-radius: ${({theme}) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
`;

export default function Input({ onChange, placeholder }) {
    return (
        <div>
            <InputBase 
                placeholder={placeholder}
                onChange={onChange} 
            />
        </div>
    );
}

Input.defaultProps = {
    value: '',
};

Input.PropTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};
