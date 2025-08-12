import "./styles.css";
import { greeting } from "./greeting.js";
import { hitApi } from "./api-handler.js";

hitApi();
console.log(greeting);
