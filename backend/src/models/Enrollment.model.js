import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema(
  {
    courseId: { type: String, required: true },
    courseName: { type: String, required: true },
    batchId: { type: String, required: true },
    batchLabel: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, default: '' },
    age: { type: Number, required: true },
    qualification: { type: String, default: '' },
    address: { type: String, default: '' },
    referenceNumber: { type: String, required: true, unique: true },
    status: { type: String, enum: ['confirmed', 'cancelled', 'completed'], default: 'confirmed' },
  },
  { timestamps: true }
);

export default mongoose.model('Enrollment', enrollmentSchema);
