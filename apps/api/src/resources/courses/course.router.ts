import { StatusCodes } from 'http-status-codes';
import * as express from 'express';
import * as courseService from './course.service';
import { wrap } from '../../common/asyncWrapper';

const router = express.Router();

router.route('/').get(
  wrap(async (req: express.Request, res: express.Response) => {
    const courses = await courseService.getAll();
    res.status(StatusCodes.OK).json(courses.map((c) => c.toResponse()));
  })
);

router.route('/:id').get(
  wrap(async (req: express.Request, res: express.Response) => {
    const course = await courseService.get(req.params.id);
    res.status(StatusCodes.OK).send(course.toResponse());
  })
);

router.route('/:userid/').post(
  wrap(async (req: express.Request, res: express.Response) => {
    const course = await courseService.create(req.body, req.params.userid);
    res.status(StatusCodes.OK).send(course.toResponse());
  })
);

router.route('/:id').put(
  wrap(async (req, res) => {
    const course = await courseService.update(req.params.id, req.body);
    res.status(StatusCodes.OK).send(course.toResponse());
  })
);

export default router;
