import styled from 'styled-components'

const activeStat = {
  'active': 'blue',
  'visited': 'green',
  'inactive': 'gray'
}

const StepBarContainer = styled.div`
  width: 96%;
  max-width: 1000px;
  margin: 0 auto 32px;
  
  ul {
    padding-inline-start: 0;
  }
  div {
    clear: both;
  }
`

const Step = styled.li`
  list-style-type: none;
  float: left;
  width: 25%;
  position: relative;
  text-align: center;
  color: ${({ stat }) => activeStat[stat] || '#ccc'};

  ::before {
    content: '';
    height: 16px;
    width: 16px;
    line-height: 16px;
    display: block;
    text-align: center;
    margin: 0 auto 6px;
    border-radius: 50%;
    background-color: ${({ stat }) => activeStat[stat] || '#ccc'};
    position: relative;
    z-index: 1;
  }
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ stat }) => activeStat[stat] || '#ccc'};
    top: 7px;
    left: -50%;
    z-index: 0;
  }
  :first-child:after {
    content: none;
  }
  
`

const stats = [
  'Data Personal',
  'Riwayat Pendidikan',
  'Pengalaman Kerja',
  'Keahlian'
]

export const StepBar = ({ stepNum }) => {
  return (
    <StepBarContainer>
      <ul>
        {
          stats.map((v, i) => 
            <Step
              stat={i<stepNum ? 'visited' : i===stepNum ? 'active' : 'inactive'}
              key={i}
            >
              { v }
            </Step>
          )
        }
      </ul>
      <div>
        {/* I am here to neutralize float left in list style */}
      </div>
    </StepBarContainer>
  )
}