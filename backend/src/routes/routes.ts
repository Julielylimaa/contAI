import { Router } from "express"
import { RegisterUserController } from "../controllers/RegisterUserController"
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateAccountingEntryController } from "../controllers/CreateAccountingEntryController";
import { checkAuthenticate } from "../middlewares/checkAuthenticate";
import { FindAccountingEntriesController } from "../controllers/FindAccountingEntriesController";
import { UpdateAccountingEntryController } from "../controllers/UpdateAccountingEntryController";
import { DeleteAccountingEntryController } from "../controllers/DeleteAccountingEntryController";

const routes = Router();
const registerUserController = new RegisterUserController()
const authenticateUserController = new AuthenticateUserController()
const createAccountingEntryController = new CreateAccountingEntryController()
const findAccountingEntriesController = new FindAccountingEntriesController()
const updateAccountingEntryController = new UpdateAccountingEntryController()
const deleteAccountingEntryController = new DeleteAccountingEntryController()

routes.post("/user", registerUserController.handle)
routes.post("/login", authenticateUserController.handle)


routes.use(checkAuthenticate)
routes.post("/accounting", createAccountingEntryController.handle)
routes.get("/accounting", findAccountingEntriesController.handle)
routes.put("/accounting/:id", updateAccountingEntryController.handle)
routes.delete("/accounting/:id", deleteAccountingEntryController.handle)


export { routes }