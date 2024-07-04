import { Box, Grid, TextInput } from "grommet";
import { GrFormClose } from "react-icons/gr";

import { useEffect, useState } from "react";

import "./usermodaledit.css";

function UserEditModal({ isOpen, setOpen }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  if (isOpen) {
    return (
      <div className="modaluser">
        <Grid
          rows={["xxsmall", "small"]}
          columns={["medium", "medium"]}
          gap="small"
          areas={[
            { name: "header", start: [0, 0], end: [1, 0] },
            { name: "nav", start: [0, 1], end: [0, 1] },
            { name: "main", start: [0, 1], end: [1, 1] },
            { name: "footer", start: [0, 2], end: [1, 1] },
          ]}
          style={{ borderRadius: "100px" }}
        >
          <Box
            gridArea="header"
            background="light-5"
            direction="row"
            align="center"
            pad="small"
            style={{ borderRadius: "14px" }}
          >
            <GrFormClose
              style={{ cursor: "pointer" }}
              onClick={() => setOpen(!isOpen)}
            />
          </Box>
          <Box
            gridArea="main"
            background="light-2"
            style={{ borderRadius: "25px" }}
            pad="small"
            gap="small"
          >
            <TextInput
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Box>
          <Box
            gridArea="footer"
            background="light-2"
            style={{ borderRadius: "25px" }}
            pad="small"
            gap="small"
          ></Box>
        </Grid>
      </div>
    );
  } else {
    return <></>;
  }
}

export default UserEditModal;
