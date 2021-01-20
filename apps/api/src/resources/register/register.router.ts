import * as express from 'express';
import { StatusCodes } from 'http-status-codes';
import * as usersService from './../users/user.service';
import { wrap } from '../../common/asyncWrapper';

const router = express.Router();

router.route('/').post(
  wrap(async (req: express.Request, res: express.Response) => {
    const user = await usersService.create(req.body);
    res.status(StatusCodes.OK).json(user.toResponse());
  })
);

export default router;
