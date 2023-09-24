import {
  Admin,
  Resource,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList, UserEdit, UserCreate } from "./users/users";

export const App = () => (
    <Admin 
      dataProvider={dataProvider}>

      <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />

    </Admin>
);
