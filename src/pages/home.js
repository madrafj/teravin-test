import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getPreviews } from "../app/db"
import { IcOutlineRemoveRedEye } from "../components/icons"
import { Button } from "../components/ui-base/button"
import { Table } from "../components/ui-base/table"
import { Page } from "../components/ui-layout/page"

const Home = () => {
  const [previews, setPreviews] = useState([])

  const navigate = useNavigate()

  const handleOpenDetail = id => navigate(`details/${id}`)

  useEffect(() => {
    setPreviews(getPreviews())
  }, [])

  return (
    <Page title="Teravin Test" type="home">
      <Button onClick={() => navigate('submission/data-personal')}>+ Add Data</Button>
      <Table>
        <thead>
          <tr key={0}>
            <th>No ID</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            previews.map((v, i) => (
              <tr key={i+1}>
                <td>{v.noID}</td>
                <td>{v.nama}</td>
                <td>{v.alamat}</td>
                <td>
                  <IcOutlineRemoveRedEye
                    onClick={() => handleOpenDetail(v.noID)}
                  />
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Page>
  )
}

export default Home