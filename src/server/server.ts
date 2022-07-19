import { app, express, PORT } from "./exports";
import cors from "cors";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`listen port to ${PORT}`);
});
