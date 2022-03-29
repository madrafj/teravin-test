import { useNavigate } from "react-router-dom"
import { isCompleted } from "../../app/utils"
import { Flex } from "../../components/ui-layout/flex-box"
import { View }from "../../components/ui-layout/view"
import { StepBar } from "../../components/ui-utils/progress-bar"
import { Submit } from "../../components/ui-base/button"
import { Dropdown, Input } from "../../components/ui-base/input"
import { useDispatch } from "react-redux"
import { addPersonal } from "../../features/submission/submissionSlice"
import { useState } from "react"
import { Page } from "../../components/ui-layout/page"

const initialState = {
  namaLengkap: '',
  namaPanggilan: '',
  agama: '',
  jenisKelamin: '',
  tempatLahir: '',
  tanggalLahir: '',
  golonganDarah: '',
  nomorKTP: '',
  alamatKTP: '',
  alamatDomisili: '',
  nomorHP: '',
  statusPernikahan: ''
}

const DataPersonal = () => {
  const [state, setState] = useState(initialState)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e, key) => {
    setState({
      ...state,
      [key]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isCompleted(state)) {
      dispatch(addPersonal(state))
      navigate('../riwayat-pendidikan')
    }
    else {
      alert('Harap lengkapi semua field terlebih dahulu.')
    }
  }

  return (
    <Page title="Submission | Data Personal" type="submission">
      <form onSubmit={handleSubmit}>
        <StepBar stepNum={0} />
        <View flexRow>
          <Flex>
            <Input autoFocus
              label="Nama Lengkap"
              value={state.namaLengkap}
              onChange={e => handleChange(e, 'namaLengkap')}
            />
            <Input
              label="Nama Panggilan"
              value={state.namaPanggilan}
              onChange={e => handleChange(e, 'namaPanggilan')}
            />
            <Dropdown
              label="Agama"
              value={state.agama}
              onChange={e => handleChange(e, 'agama')}
              data={['Islam', 'Kristen', 'Khatolik', 'Budha', 'Hindu', 'Konghuchu']}
            />
            <Dropdown
              label="Jenis Kelamin"
              value={state.jenisKelamin}
              onChange={e => handleChange(e, 'jenisKelamin')}
              data={['Laki-laki', 'Perempuan']}
            />
            <Input
              label="Tempat Lahir"
              value={state.tempatLahir}
              onChange={e => handleChange(e, 'tempatLahir')}
            />
            <Input
              label="Tanggal Lahir"
              value={state.tanggalLahir}
              onChange={e => handleChange(e, 'tanggalLahir')}
              type="date"
            />
          </Flex>
          <Flex>
            <Dropdown
              label="Golongan Darah"
              value={state.golonganDarah}
              onChange={e => handleChange(e, 'golonganDarah')}
              data={['A', 'B', 'AB', 'O']}
            />
            <Input
              label="Nomor KTP"
              value={state.nomorKTP}
              onChange={e => handleChange(e, 'nomorKTP')}
              pattern="^[1-9][0-9]{15}"
              title="Nomor KTP 16 digit"
            />
            <Input
              label="Alamat KTP"
              value={state.alamatKTP}
              onChange={e => handleChange(e, 'alamatKTP')}
            />
            <Input
              label="Alamat Domisili"
              value={state.alamatDomisili}
              onChange={e => handleChange(e, 'alamatDomisili')}
            />
            <Input
              label="Nomor HP"
              value={state.nomorHP}
              onChange={e => handleChange(e, 'nomorHP')}
              pattern="^[0][1-9]{1}[0-9]{7,}"
              title="Nomor HP tidak valid"
            />
            <Dropdown
              label="Status Pernikahan"
              value={state.statusPernikahan}
              onChange={e => handleChange(e, 'statusPernikahan')}
              data={['Menikah', 'Belum Menikah']}
            />
          </Flex>
        </View>
        <Submit>Next</Submit>
      </form>
    </Page>
  )
}

export default DataPersonal