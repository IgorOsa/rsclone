import * as express from 'express';
import { StatusCodes } from 'http-status-codes';
import * as loginService from './login.service';
import { wrap } from '../../common/asyncWrapper';

const router = express.Router();

router.route('/').post(
  wrap(async (req: express.Request, res: express.Response) => {
    const { login, password } = req.body;

    const auth = await loginService.signIn({ login, password });

    res.status(StatusCodes.OK).json({
      message: 'Authenticated',
      ...auth,
    });
  })
);

export default router;
