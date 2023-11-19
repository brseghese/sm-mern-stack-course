import { Router } from 'express';
const router = Router();

import {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
} from '../controllers/jobController.js';

// router.get('/', getAllJobs);
// router.post('/', createJob);
// router.get('/:id', getJob);
// router.patch('/:id', updateJob);
// router.delete('/:id', deleteJob);

router.route('/').get(getAllJobs).post(createJob);
router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

export default router;
