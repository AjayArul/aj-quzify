import { Box } from "@mantine/core"
interface MainLayoutProps {
  children?: React.ReactNode
}

const MainLayout = ({children}: MainLayoutProps) => {
  return <Box mih={"100vh"} 
  p="md"
  display={"flex"}
  style={{
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",}
  }
    >{children}</Box>
}

export default MainLayout
