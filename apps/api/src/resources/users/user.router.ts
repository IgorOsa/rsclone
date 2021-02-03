import * as express from 'express';
import * as usersService from './user.service';
import * as profileService from './profile.service';
import { wrap } from '../../common/asyncWrapper';

const router = express.Router();

router.route('/').get(
  wrap(
    async (req: express.Request, res: express.Response): Promise<void> => {
      const users = await usersService.getAll();
      res.json(users.map((u) => u.toResponse()));
    }
  )
);

router.route('/:id').get(
  wrap(
    async (req: express.Request, res: express.Response): Promise<void> => {
      const user = await usersService.get(req.params.id);
      res.json(user.toResponse());
    }
  )
);

router.route('/:id/statistics').get(
  wrap(async (req: express.Request, res: express.Response) => {
    const stats = await profileService.getUserStats(req.params.id);
    res.json(stats);
  })
);

router.route('/:id/statistics').put(
  wrap(async (req: express.Request, res: express.Response) => {
    const stats = await profileService.updateUserStats(req.params.id, req.body);
    res.json(stats);
  })
);

router.route('/').post(
  wrap(async (req: express.Request, res: express.Response) => {
    const user = await usersService.create(req.body);
    res.json(user.toResponse());
  })
);

router.route('/:id').put(
  wrap(async (req: express.Request, res: express.Response) => {
    const user = await usersService.update(req.params.id, req.body);
    res.json(user.toResponse());
  })
);

export default router;
