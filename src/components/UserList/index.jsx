import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";
import {Link} from "react-router-dom";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList () {
    const users = models.userListModel();
    return (
      <div>
        <Typography variant="body1">
          danh sách người dùng 
        </Typography>
         <Divider />
        <List component="nav">
          {users.map((item) => (
            <>
              <ListItem>
                      <ListItemText primary={item.first_name}/>
              </ListItem>

           

              <Divider />
            </>
          ))}
        </List>
        <Typography variant="body1">
          The model comes in from models.userListModel()
        </Typography>
      </div>
    );
}

export default UserList;
