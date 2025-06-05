import { Router } from "express"
import { RegisterUserController } from "../controllers/RegisterUserController"
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateAccountingEntryController } from "../controllers/CreateAccountingEntryController";
import { checkAuthenticate } from "../middlewares/checkAuthenticate";
import { FindAccountingEntriesController } from "../controllers/FindAccountingEntriesController";
import { UpdateAccountingEntryController } from "../controllers/UpdateAccountingEntryController";

const routes = Router();
const registerUserController = new RegisterUserController()
const authenticateUserController = new AuthenticateUserController()
const createAccountingEntryController = new CreateAccountingEntryController()
const findAccountingEntriesController = new FindAccountingEntriesController()
const updateAccountingEntryController = new UpdateAccountingEntryController()

routes.post("/user/", registerUserController.handle)
routes.post("/login", authenticateUserController.handle)


routes.use(checkAuthenticate)
routes.post("/accounting/", createAccountingEntryController.handle)
routes.get("/accounting", findAccountingEntriesController.handle)
routes.put("/accounting/:id", updateAccountingEntryController.handle)


export { routes }