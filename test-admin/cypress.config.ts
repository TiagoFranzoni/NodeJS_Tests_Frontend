import { defineConfig } from "cypress";
import axios from "axios";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        async "db:erase"() {
          const {data} = await axios.delete("http://localhost:3001/users");
          return data;
        },

        async "db:create:users"(users) {
          const {data} = await axios.post("http://localhost:3001/users", users);
          return data;
        }

      })
    },
  },
});
