import Button from "../components/common/actions/Button";
import { Cell } from "../components/common/layout/Cell";
import Layout from "../components/common/layout/Layout";


export default function Main() {
  return (
    <div className="font-bold">
      <Layout>
        <Cell rows={1} span={4}>
          <Button label="button" />
        </Cell>
        <Cell rows={1} span={4}>
          <Button label="button" skin="primary" />
        </Cell>
        <Cell rows={1} span={4}>
          <Button label="button" skin="primary" priority="primary" />
        </Cell>
      </Layout>
    </div>
  )
}