import express from 'express';
import { submitContact, getMessages, updateMessageStatus, deleteMessage } from '../controllers/contact.controller';
import { protect } from '../middlewares/auth.middleware';

const router = express.Router();

router.route('/')
  .post(submitContact)
  .get(protect, getMessages);

router.route('/:id')
  .put(protect, updateMessageStatus)
  .delete(protect, deleteMessage);

export default router;
