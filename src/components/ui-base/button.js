import styled from 'styled-components'

const TransparentButton = styled.button`
  display: inline-block;
  position: relative;
  padding: 8px 12px;
  border: 1px solid #222;
  --bgc: transparent;
  background: var(--bgc);
  background-position: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  transition: background 0.8s;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 2;

  :hover {
    background: var(--bgc) radial-gradient(circle, #aaaa, var(--bgc) 1%) center/100000%;
    outline: none;
  }
  :active {
    background-size: 100%;
    outline: none;
    transition: background 0s;
  }

`

export const ButtonBase = ({ onClick, ...props }) => {
  const handleClick = () => setTimeout(onClick, 600)

  return <TransparentButton onClick={handleClick} {...props} />
}

export const Button = styled(ButtonBase)`
  --bgc: ${({ color }) => color || '#f0f0f0'};
  border-radius: 4px;
  min-width: 120px;
  ${(right) => right && 'align-self: flex-start;'}
`

export const FlexButton = styled(ButtonBase)`
  --bgc: #f0f0f0;
  height: 100%;

  svg {
    display: block;
    margin: 0 auto;
    font-size: 48px;
  }
`

export const Submit = styled(Button)`
  align-self: flex-end;
  float: right;
  margin: 16px 8px 0;
  width: 120px;
`