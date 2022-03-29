import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { isCompleted, isEmpty } from "../../app/utils"
import { IcOutlineAdd } from "../../components/icons"
import { FlexButton, Submit } from "../../components/ui-base/button"
import { Input } from "../../components/ui-base/input"
import { Box } from "../../components/ui-layout/box"
import { Page } from "../../components/ui-layout/page"
import { View } from "../../components/ui-layout/view"
import { StepBar } from "../../components/ui-utils/progress-bar"
import { addPengalaman } from "../../features/submission/submissionSlice"

const initialState = {
  namaPerusahaan: '',
  jenisPerusahaan: '',
  jabatan: '',
  atasanLangsung: '',
  awalBekerja: '',
  akhirBekerja: '',
}

const PengalamanKerja = () => {
  const [state, setState] = useState(initialState)

  const pengalaman = useSelector(state => state.submission.pengalamanKerja)
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
      dispatch(addPengalaman(state))
      setState(initialState)
    }
    else {
      alert('Harap lengkapi semua field terlebih dahulu.')
    }
  }

const handleSubmit = (e) => {
  e.preventDefault()
  if (isCompleted(state)) {
    dispatch(addPengalaman(state))
    navigate('../keahlian')
  }
  else if (isEmpty(state) && (pengalaman.length > 0)) {
    navigate('../keahlian')
  }
  else {
    alert('Harap lengkapi semua field terlebih dahulu atau kosongkan semua jika sudah memiliki minimal 1 entry')
  }
}

  return (
    <Page title="Submission | Pengalaman Kerja" type="submission">
      <form onSubmit={handleSubmit}>
        <StepBar stepNum={(2)} />
        <View flexRow>
          <Box>
            <Input
              label="Nama Perusahaan"
              value={state.namaPerusahaan}
              onChange={e => handleChange(e, 'namaPerusahaan')}
            />
            <Input
              label="Jenis Perusahaan"
              value={state.jenisPerusahaan}
              onChange={e => handleChange(e, 'jenisPerusahaan')}
            />
            <Input
              label="Jabatan"
              value={state.jabatan}
              onChange={e => handleChange(e, 'jabatan')}
            />
            <Input
              label="Atasan Langsung"
              value={state.atasanLangsung}
              onChange={e => handleChange(e, 'atasanLangsung')}
            />
            <Input
              label="Awal Bekerja"
              value={state.awalBekerja}
              onChange={e => handleChange(e, 'awalBekerja')}
              type="month"
            />
            <Input
              label="Akhir Bekerja"
              value={state.akhirBekerja}
              onChange={e => handleChange(e, 'akhirBekerja')}
              type="month"
            />
          </Box>
          <Box noPadding>
            <FlexButton type="button" onClick={handleAddEntry}>
              <IcOutlineAdd />
              Add Pengalaman Kerja
            </FlexButton>
          </Box>
        </View>
        <Submit>Next</Submit>
      </form>
    </Page>
  )
}

export default PengalamanKerja