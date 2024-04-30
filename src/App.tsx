import {
  ArrowUpIcon
} from "@heroicons/react/24/solid"
import Button from "./components/common/actions/Button"
import IconButton from "./components/common/actions/IconButton"
import { Cell } from "./components/common/layout/Cell"
import Layout from "./components/common/layout/Layout"

function App() {
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
        <Cell rows={1} span={4}>
          <IconButton
            icon={<ArrowUpIcon width={18} height={18} />} />
        </Cell>
        <Cell rows={1} span={4}>
          <IconButton
            icon={<ArrowUpIcon width={18} height={18} />}
            skin="disabled" />
        </Cell>
      </Layout>
    </div>
  )
}

export default App
