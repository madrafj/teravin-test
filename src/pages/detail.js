import { useEffect, useState } from "react"
import { Page } from "../components/ui-layout/page"
import { getItem } from "../app/db"
import { reverseCamelCase } from "../app/utils"
import { NotInput } from "../components/ui-base/input"
import { Divider, Header } from "../components/ui-base/section"
import { View } from "../components/ui-layout/view"
import { useParams } from "react-router-dom"
import { Flex } from "../components/ui-layout/flex-box"
import { Column } from "../components/ui-layout/column"

const Details = () => {
  const [details, setDetails] = useState(undefined)

  const { id } = useParams()

  useEffect(() => {
    setDetails(getItem(id))
    console.log(id)
  }, [])

  if (!details) return <p>...please wait</p>

  return (
    <Page title="Detail Karyawan" type="detail">
      <View>
        <Header>No ID: {id}</Header>
        <Header>Data Pribadi</Header>
        <Column>
          {
            Object.entries(details.dataPribadi).map(v => (
              <NotInput
                label={reverseCamelCase(v[0])}
                value={v[1]}
              />
            ))
          }
        </Column>
        <Header>Riwayat Pendidikan</Header>
        {
          details.riwayatPendidikan.map((v, i) => (
            <>
              <Column row={3}>
                {Object.entries(v).map(val => (
                  <NotInput
                    label={reverseCamelCase(val[0])}
                    value={val[1]}
                  />
                ))}
              </Column>
              <Divider />
            </>
          ))
        }
        <Header>Pengalaman Kerja</Header>
        {
          details.pengalamanKerja.map((v, i) => (
            <>
              <Column row={3}>
                {Object.entries(v).map(val => (
                  <NotInput
                    label={reverseCamelCase(val[0])}
                    value={val[1]}
                  />
                ))}
              </Column>
              <Divider />
            </>
          ))
        }
        <Header>Keahlian</Header>
        <Flex row>
          {
            details.keahlian.map(v => <NotInput value={v} />)
          }
        </Flex>
      </View>
    </Page>
  )
}

export default Details