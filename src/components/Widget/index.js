import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({theme}) => theme.borderRadius};
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p{
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    padding: 0;
  }
`;

Widget.Input = styled.input`
  padding: 10px;
  margin-top: 20px;
  background-color: transparent;
  border: 1px solid #FFFFFF;
  border-radius: ${({theme}) => theme.borderRadius};
  width: 100%;
  font-size: 13px;
`;

Widget.Buttom = styled.button`
  padding: 10px;
  display: block;
  width: 100%;
  margin-top: 20px;
  font-size: 15px;
  font-weight: 700;
  color: #FFFFFF;
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: ${({theme}) => theme.borderRadius};
  text-transform: uppercase;  
`;

export default Widget;
