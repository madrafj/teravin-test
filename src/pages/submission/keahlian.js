import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { IcOutlineAdd } from "../../components/icons"
import { Button, Submit } from "../../components/ui-base/button"
import { StretchInput } from "../../components/ui-base/input"
import { Flex } from "../../components/ui-layout/flex-box"
import { Page } from "../../components/ui-layout/page"
import { View } from "../../components/ui-layout/view"
import { StepBar } from "../../components/ui-utils/progress-bar"
import { addKeahlian, saveAndReset } from "../../features/submission/submissionSlice"

const Keahlian = () => {
  const [newSkill, setNewSkill] = useState('')

  const skills = useSelector(state => state.submission.keahlian)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = e => setNewSkill(e.target.value)
  const handleAddEntry = () => {
    dispatch(addKeahlian(newSkill))
    setNewSkill('')
  }
  const handleSubmit = e => {
    if (newSkill !== '') {
      dispatch(addKeahlian(newSkill))
      dispatch(saveAndReset())
      navigate('../../')
    }
    else if ((newSkill === '') && (skills.length > 0)) {
      navigate('../../')
    }
    else {
      alert('Harap diisi terlebih dahulu! Minimal 1 entry')
    }
  }   

  return (
    <Page title="Submission | Keahlian" type="submission">
      <StepBar stepNum={3} />
      <View>
        <Flex>
          {
            skills.map((v, i) =>
              <StretchInput disabled value={v} key={i} />
            )
          }
          <StretchInput
            value={newSkill}
            onChange={handleChange}
            key={999}
          />
          <Button onClick={handleAddEntry}>
            <IcOutlineAdd />
            Add Keahlian Lain
          </Button>
        </Flex>
      </View>
      <Submit onClick={handleSubmit}>Submit</Submit>
    </Page>
  )
}

export default Keahlian