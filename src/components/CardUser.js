import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Delete from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { deleteUser } from "../api/users";

const CardUser = ({ user, setUsers }) => {
  return (
    <ListItem>
      <ListItemAvatar sx={{ marginRight: 2 }}>
        <Avatar
          alt="avatar"
          src={`https://robohash.org/${user?.id}?set=set2&size=180x180`}
          sx={{ width: 75, height: 75 }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={<Typography variant="h6">{user?.name}</Typography>}
        secondary={<Typography variant="p">{user?.email}</Typography>}
      />
      <Button onClick={()=> deleteUser(user?.id).then(setUsers(prev => prev.filter((u) => {
              return user.id !== u.id;
            })))}>
        <Delete />
      </Button>
    </ListItem>
  );
};

export default CardUser;
