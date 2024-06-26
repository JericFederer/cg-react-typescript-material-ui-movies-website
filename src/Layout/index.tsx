import { ReactNode } from "react"
import { Box } from "@mui/material";

import { Colors } from "../constants/colors";
import Sidebar from "../components/sidebar";

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{
      backgroundColor: Colors.primary01,
      display: 'flex',
      flexDirection: {
        xs: 'column',
        lg: 'row'
      },
      color: 'white',
      padding: 3,
      gap: 3,
      overflowY: 'hidden',
      height: '100vh',
    }}>
      <Sidebar />
      <Box sx={{
        width: "100%",
        overflowY: "scroll"
      }}>
        { children }
      </Box>
    </Box>
  );
};

export default Layout