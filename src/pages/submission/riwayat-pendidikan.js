import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { isCompleted, isEmpty } from "../../app/utils"
import { IcOutlineAdd } from "../../components/icons"
import { FlexButton, Submit } from "../../components/ui-base/button"
import { Dropdown, Input } from "../../components/ui-base/input"
import { Box } from "../../components/ui-layout/box"
import { View } from "../../components/ui-layout/view"
import { StepBar } from "../../components/ui-utils/progress-bar"
import { useDispatch, useSelector } from "react-redux"
import { addPendidikan } from "../../features/submission/submissionSlice"
import { Page } from "../../components/ui-layout/page"

const initialState = {
  namaSekolah: '',
  kota: '',
  jurusan: '',
  tahunMasuk: '',
  tahunLulus: '',
  jenjangPendidikan: ''
}

const RiwayatPendidikan = () => {
  const [state, setState] = useState(initialState)

  const riwayat = useSelector(state => state.submission.riwayatPendidikan)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e, key) => {
    setState({
      ...state,
      [key]: e.target.value
    })
  }

  const handleAddEntry = () => {
    if (isCompleted(state)) {
      dispatch(addPendidikan(state))
      setState(initialState)
    }
    else {
      alert('Harap lengkapi semua field terlebih dahulu.')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isCompleted(state)) {
      dispatch(addPendidikan(state))
      navigate('../pengalaman-kerja')
    }
    else if (isEmpty(state) && (riwayat.length > 0)) {
      navigate('../pengalaman-kerja')
    }
    else {
      alert('Harap lengkapi semua field terlebih dahulu atau kosongkan semua jika sudah memiliki minimal 1 entry')
    }
  }

  return (
    <Page title="Submission | Riwayat Pendidikan" type="submission">
      <form onSubmit={handleSubmit}>
        <StepBar stepNum={1} />
        <View flexRow>
          <Box>
            <Input autoFocus
              label="Nama Sekolah"
              value={state.namaSekolah}
              onChange={e => handleChange(e, 'namaSekolah')}
            />
            <Input
              label="Kota"
              value={state.kota}
              onChange={e => handleChange(e, 'kota')}
            />
            <Input
              label="Jurusan"
              value={state.jurusan}
              onChange={e => handleChange(e, 'jurusan')}
            />
            <Input
              label="Tahun Masuk"
              value={state.tahunMasuk}
              onChange={e => handleChange(e, 'tahunMasuk')}
              type="number"
              min="1950"
              max="2022"
            />
            <Input
              label="Tahun Lulus"
              value={state.tahunLulus}
              onChange={e => handleChange(e, 'tahunLulus')}
              type="number"
              min="1950"
              max="2022"
            />
            <Dropdown
              label="Jenjang Pendidikan"
              value={state.jenjangPendidikan}
              onChange={e => handleChange(e, 'jenjangPendidikan')}
              data={['SMA', 'D3', 'S1', 'S2', 'S3']}
            />
          </Box>
          <Box noPadding>
            <FlexButton type="button" onClick={handleAddEntry}>
              <IcOutlineAdd />
              Add Riwayat Pendidikan
            </FlexButton>
          </Box>
        </View>
        <Submit>Next</Submit>
      </form>
    </Page>
  )
}

export default RiwayatPendidikan