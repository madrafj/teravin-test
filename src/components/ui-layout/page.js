import { useEffect } from 'react'
import styled from 'styled-components'
import { useTitle } from '../../app/utils'

export const PageBase = styled.main`
  margin: 0;
  padding: 8px 24px 24px;
  width: auto;
  max-width: 1200px;
  height: auto;
  min-height: 480px;
  background-color: white;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (min-width: 768px) {
    margin: 24px auto;
  }
`

const pageType = {
  'home': 'Teravin Test React.js',
  'submission': 'Form Submission',
  'detail': 'Detail Karyawan'
}

export const Page = props => {
  useEffect(() => document.title = props.title, [])

  return (
    <PageBase>
      <h2>
        {pageType[props.type]}
      </h2>
      {props.children}
    </PageBase>
  )
}