import { Router } from 'express';
import { logger } from '../utils/logger.utils';

const serviceRouter = Router();

serviceRouter.post('/', async (req, res) => {
  logger.info('Cart update extension executed');
  return res.status(200).json({ message: 'success'});
});

export default serviceRouter;
