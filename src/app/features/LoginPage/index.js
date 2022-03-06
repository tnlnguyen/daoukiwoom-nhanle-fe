import React, { useState } from "react";
import { useIntl } from "react-intl";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { login } from "../../core/apis/user";
import { updateUser } from "../../../store/userReducer";
import homeLanguage from "../../core/msg/home";

const LoginPage = () => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    (async () => {})();
  }, []);

  const register = () => {
    history.push("register");
  };

  const signIn = async () => {
    if (!email || !password) {
      return;
    }

    const result = await login({
      email,
      password,
    });

    if (result.status === 200) {
      dispatch(updateUser(result.data))
      history.replace("");
    }
  };

  const onChange = (obj, type) => {
    switch (type) {
      case "email":
        setEmail(obj.target.value);
        break;
      case "password":
        setPassword(obj.target.value);
        break;
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal
        open={true}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {formatMessage(homeLanguage.title)}
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                onChange={(obj) => onChange(obj, "email")}
                error={!email}
                id="outlined-search"
                label="Email"
                type="search"
              />
              <TextField
                onChange={(obj) => onChange(obj, "password")}
                error={!password}
                id="outlined-search"
                label="Password"
                type="password"
              />

              <Stack spacing={3} direction="row-reverse">
                <Button onClick={register} variant="outlined">
                  Register
                </Button>
                <Button onClick={signIn} variant="contained">
                  Sign In
                </Button>
              </Stack>
            </div>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default LoginPage;
