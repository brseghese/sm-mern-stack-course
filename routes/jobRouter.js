import { Router } from 'express';
const router = Router();

import {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
} from '../controllers/jobController.js';

import { validateJobInput } from '../middleware/validationMiddleware.js';

// router.get('/', getAllJobs);
// router.post('/', createJob);
// router.get('/:id', getJob);
// router.patch('/:id', updateJob);
// router.delete('/:id', deleteJob);

router.route('/').get(getAllJobs).post(validateJobInput, createJob);
router
  .route('/:id')
  .get(getJob)
  .patch(validateJobInput, updateJob)
  .delete(deleteJob);

export default router;
