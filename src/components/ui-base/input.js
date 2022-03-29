import styled from 'styled-components'

const LabelBase = styled.label`
  display: inline-block;
  padding: 8px 16px;
  height: auto;
  min-height: 24px;
  line-height: 24px;
  
  input, select {
    float: right;
    border: 1px solid #ccc;
    margin-left: 8px;
    padding: 4px 8px;
    font-size: 16px;
    width: 80%;
    min-width: 240px;
    max-width: 320px;
    background-color: white;
    box-sizing: border-box;

    :focus {
      outline: 2px solid #888;
    }

    @media (min-width: 400px) {
      width: 256px;
    }
  }
`

export const StretchInput = styled.input`
  border: 1px solid #ccc;
  font-size: 16px;
  box-sizing: border-box;
  padding: 8px 8px;
  text-align: center;
  margin-bottom: 24px;
` 

export const Input = props => {
  return (
    <LabelBase>
      {props.label}
      <input {...props} />
    </LabelBase>
  )
}

export const NotInput = props => {
  return (
    <Input disabled {...props} />
  )
}

export const Dropdown = ({ label, data, ...props }) => {
  return (
    <LabelBase>
      {label}
      <select {...props}>
        <option key={0} disable="true" hidden></option>
        {data && data.map((v, i) => <option key={i + 1}>{v}</option>)}
      </select>
    </LabelBase>
  )
}