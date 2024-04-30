import Button from "./components/common/actions/Button"
import { Cell } from "./components/common/layout/Cell"
import Layout from "./components/common/layout/Layout"

function App() {
  return (
    <div className="font-bold">
      <Layout>
        <Cell>
          <Button label="button" />
        </Cell>
        <Cell>
          <Button label="button" skin="primary" />
        </Cell>
        <Cell>
          <Button label="button" skin="primary" priority="primary" />
        </Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
      </Layout>
    </div>
  )
}

export default App
