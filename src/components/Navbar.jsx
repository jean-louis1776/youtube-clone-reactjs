import React from "react"
import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from "../utils/constants"
import SearchBar from "./SearchBar"

const Navbar = (props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#202020",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Home" height={45} />
        <Typography
          className="logo-name"
          variant="h4"
          fontWeight="bold"
          sx={{ color: "#fff", ml: 1 }}
        >
          You<span style={{ color: "#fc1503" }}>Tube</span>2.0
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar
