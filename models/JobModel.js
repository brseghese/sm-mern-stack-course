import mongoose from 'mongoose';
import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js';

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: Object.values(JOB_STATUS),
      default: JOB_STATUS.PENDING,
    },
    jobType: {
      type: String,
      enum: Object.values(JOB_TYPE),
      default: JOB_TYPE.REMOTE,
    },
    jobLocation: {
      type: String,
      default: 'my city',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: {
      currentTime: () => {
        const now = new Date();
        const offset = now.getTimezoneOffset();
        const adjustedDate = new Date(now.getTime() - offset * 60 * 1000);
        return adjustedDate.toISOString();
      },
    },
  }
);

export default mongoose.model('Job', JobSchema);
