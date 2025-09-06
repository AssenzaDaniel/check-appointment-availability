import { checkAppointments } from "./integrations/gestionaMadrid.js";
import { logger } from "./utils/logger.js";

logger.error('Prueba de logger!!');
logger.info('Prueba de logger info!!');

const appointments = await checkAppointments();
